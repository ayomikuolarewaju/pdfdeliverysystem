
import { createBrowserClient } from "@supabase/ssr";

// Public client — safe for the browser, only ever used to read the pdfs catalog
// (RLS only grants SELECT on pdfs to this key; everything else is server-only).
export const supabasePublic = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);

// Server client — service role key, never shipped to the browser.
// Use this in API routes / server components only.
export const supabaseAdmin = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } }
);
