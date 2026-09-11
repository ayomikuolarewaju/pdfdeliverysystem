const PAYSTACK_BASE = 'https://api.paystack.co';

type InitParams = {
  email: string;
  amountKobo: number; // Paystack takes the amount in kobo (NGN * 100)
  reference: string;
  callbackUrl: string;
  metadata?: Record<string, unknown>;
};

export async function initializePaystackTransaction(params: InitParams) {
  const res = await fetch(`${PAYSTACK_BASE}/transaction/initialize`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: params.email,
      amount: params.amountKobo,
      reference: params.reference,
      callback_url: params.callbackUrl,
      metadata: params.metadata,
    }),
  });

  const data = await res.json();
  if (!data.status) {
    throw new Error(data.message || 'Paystack initialize failed');
  }
  // data.data.authorization_url is where you redirect the buyer
  return data.data as { authorization_url: string; access_code: string; reference: string };
}

export async function verifyPaystackTransaction(reference: string) {
  const res = await fetch(`${PAYSTACK_BASE}/transaction/verify/${reference}`, {
    headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` },
  });
  const data = await res.json();
  if (!data.status) {
    throw new Error(data.message || 'Paystack verify failed');
  }
  return data.data as { status: string; reference: string; amount: number; customer: { email: string } };
}

// Paystack signs webhook bodies with HMAC SHA512 of your secret key.
// Verify this in the webhook route before trusting the payload.
import crypto from 'crypto';

export function isValidPaystackSignature(rawBody: string, signatureHeader: string | null) {
  if (!signatureHeader) return false;
  const expected = crypto
    .createHmac('sha512', process.env.PAYSTACK_SECRET_KEY!)
    .update(rawBody)
    .digest('hex');

  const expectedBuf = Buffer.from(expected, 'hex');
  const receivedBuf = Buffer.from(signatureHeader, 'hex');

  // Buffers of different length would throw in timingSafeEqual — treat that
  // as "not valid" rather than crashing the route.
  if (expectedBuf.length !== receivedBuf.length) return false;

  return crypto.timingSafeEqual(expectedBuf, receivedBuf);
}

// Debug-only helper — never used for the actual security decision, just to
// log enough detail to tell "wrong key" apart from "body got mangled".
export function debugSignatureInfo(rawBody: string, signatureHeader: string | null) {
  const expected = crypto
    .createHmac('sha512', process.env.PAYSTACK_SECRET_KEY!)
    .update(rawBody)
    .digest('hex');
  return {
    bodyLength: rawBody.length,
    bodyPreview: rawBody.slice(0, 80),
    expectedSig: expected,
    receivedSig: signatureHeader ?? '(none)',
  };
}
