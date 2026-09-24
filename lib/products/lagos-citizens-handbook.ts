/**
 * Everything that changes from one PDF landing page to the next lives here.
 * To sell another PDF: copy this file and the page folder, then edit the text.
 */
export const product = {
  slug: "lagos-citizens-handbook",
  title: "The Lagos Citizen's Government Services Handbook",
  subtitle: "2026 Premium Edition",
  headline: "Know what you need. Know where to go. Know what happens next.",
  tagline:
    "15 deep-dive guides to navigating Lagos State government services: land, property, planning, LASRRA, traffic, business and more. Every chapter turns a confusing process into a documented, repeatable one.",

  // PLACEHOLDER — set your real price here and keep it equal to the amount
  // on your Paystack Payment Page. This was not specified, so change it
  // before you publish.
  price: 5000,

  // Paste your Paystack Payment Page link into .env.local (see .env.example)
  paystackUrl:
    process.env.NEXT_PUBLIC_PAYSTACK_LAGOS_HANDBOOK_URL ?? "https://paystack.com/pay/your-slug",

  brand: "Verscomm",
  supportEmail: "versatilecommservice@gmail.com",

  stats: [
    { value: "45", label: "pages" },
    { value: "15", label: "deep-dive chapters" },
    { value: "8", label: "fillable workbook trackers" },
    { value: "30+", label: "official sources cited" },
  ],

  images: {
    cover: "/lagos-citizens-handbook/cover.webp",
    previews: [
      { src: "/lagos-citizens-handbook/preview-contents.webp", caption: "A full table of contents across 15 chapters" },
      { src: "/lagos-citizens-handbook/preview-chapter1.webp", caption: "Chapter 1: Land Use Charge, step by step" },
      { src: "/lagos-citizens-handbook/preview-ambiguity.webp", caption: "Ambiguities in official guidance are flagged, not guessed at" },
      { src: "/lagos-citizens-handbook/preview-workbook.webp", caption: "Fillable trackers in the Practical Workbook" },
      { src: "/lagos-citizens-handbook/preview-sources.webp", caption: "A full directory of official sources, checked for this edition" },
    ],
  },

  labels: [
    { name: "Official Requirement", color: "emerald", text: "Information directly supported by an official government source checked for this edition." },
    { name: "Practical Guidance", color: "sky", text: "An organising method or preparation technique designed to reduce confusion. Not itself a government rule." },
    { name: "Verify Before You Act", color: "amber", text: "Information that may change: fees, addresses, contacts, forms, portals and deadlines." },
  ],

  groups: [
    { title: "Land & Property", range: "Chapters 1–3", color: "sky", text: "Land Use Charge, title and registration, and a full due-diligence checklist before you buy." },
    { title: "Planning & Building", range: "Chapters 4–6", color: "violet", text: "Development permits, LASBCA authorization, and stage-by-stage inspection to completion." },
    { title: "Residents", range: "Chapters 7–9", color: "emerald", text: "LASRRA registration for adults and children, school requests, and how to escalate a complaint." },
    { title: "Vehicles", range: "Chapters 10–12", color: "amber", text: "Impound and release, challenging a traffic violation, and a pre-drive compliance routine." },
    { title: "Business", range: "Chapters 13–15", color: "gold", text: "Premises compliance, LASAA signage, and the drainage and environmental approvals developers overlook." },
  ],

  includes: [
    "45-page PDF, fully annotated with colour-coded guidance labels",
    "A Quick Route flow diagram at the start of every chapter",
    "A document & evidence checklist in every chapter",
    "An 8-tracker practical workbook you can print or duplicate",
    "A \"Verify Before You Pay\" tool for any government payment",
    "A full directory of the 30+ official sources used",
    "Ambiguities in official guidance flagged honestly, not guessed at",
  ],

  faqs: [
    { q: "Is this an official government publication?", a: "No. This is an independent practical guide prepared using publicly available official Lagos State information. It is not published by the Lagos State Government or any ministry, department or agency, and does not create a legal relationship with any government body." },
    { q: "Will the fees and procedures always be correct?", a: "Government procedures, fees, contacts and forms can change after this edition was prepared. Every chapter tells you what to verify and where, so you always know what to double-check before you pay or travel." },
    { q: "Who is this for?", a: "Residents, property owners, developers, drivers, families and small business owners in Lagos State who want a clear, organised way to deal with government services instead of starting from zero each time." },
    { q: "Do I need any special software?", a: "No. It's a standard PDF that opens on any phone, tablet or computer. Print the workbook pages if you prefer to fill them by hand." },
    { q: "How do I get the PDF after paying?", a: "The download link is sent to the email address you use at checkout. If you don't see it, check your spam folder or write to us." },
    { q: "How do I pay?", a: "Payment is handled securely by Paystack. You'll see the payment options available to you, such as card or bank transfer, on the checkout page." },
  ],
};
