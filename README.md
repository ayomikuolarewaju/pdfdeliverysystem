# PDF Delivery System

A lean storefront for selling PDF guides, built to be simple to extend: add a product, add a page.

🔗 **Live:** [pdfsystem.netlify.app](https://pdfsystem.netlify.app/)

## What it does

Sells downloadable PDFs through per-product landing pages, with checkout routed through Nigerian payment processors and the download link delivered automatically by email.

## Features

- **Per-PDF landing pages** — each product gets its own static page (title, cover image, description) rather than a single dynamic route, so every product page can be tuned individually
- **Generic payment and success pages** — shared across all products, swapping only price and cover image
- **Nigerian payment rails** — checkout via Paystack and Flutterwave
- **Buyer capture** — buyer email captured at checkout and stored alongside the purchase
- **Automated delivery** — download link emailed on successful payment via plain SMTP
- **Supabase-backed catalog** — storage for the files themselves, a PDF metadata table (name, page count, storage reference, creation date), and a buyer list

## Tech stack

- **Framework:** Next.js
- **Backend:** Supabase (storage, catalog, buyers)
- **Payments:** Paystack, Flutterwave
- **Delivery:** SMTP email (Gmail/Zoho)

## Architecture notes

Adding a new PDF is a deliberately manual, two-step process — add the static landing page, add the corresponding row in Supabase — rather than a scaffolding script. For a catalog this size, that's a simpler and more reliable process than building tooling around it.

## Status

Live.
