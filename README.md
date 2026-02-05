# App_Build
A-1 Blueprint Builder SaaS — a proof-driven blueprint compiler with Supabase auth + Stripe subscriptions + server-side entitlement gating.
# A-1 Blueprint Builder SaaS (v1.0)

A production-ready SaaS that compiles a filled project intake into a structured **Blueprint Bundle** (specs, decisions, exit criteria, validation evidence), with **Supabase magic-link auth**, **Stripe subscriptions**, and **server-side entitlement gating** on the compile endpoint.

## What it does
- **Intake → Blueprint Bundle**: turns vague intent into actionable, versioned build artifacts.
- **Anti-cyclical**: enforces an exit criteria / release gates model to prevent endless “next steps.”
- **Monetized access**: compile is gated behind a paid subscription tier.
- **Legit-only**: designed for legitimate product/system design workflows (no malware/illicit C2 behavior).

## Key features
- ✅ Supabase authentication (magic links)
- ✅ Stripe subscriptions (3 tiers): Starter / Pro / Team
- ✅ Customer Portal (self-serve billing management)
- ✅ Webhook handler with **signature verification**
- ✅ Entitlements table + server-side enforcement on compile endpoint
- ✅ RLS policies for data protection (Supabase)
- ✅ CI via GitHub Actions (lint/typecheck/build)
- ✅ Deployment docs included

## Architecture (high level)
- **Frontend**: Next.js + TypeScript
- **Auth**: Supabase Auth (magic link)
- **Billing**: Stripe Checkout + Portal
- **Entitlements**: stored in Supabase; webhook syncs subscription state
- **Security**: server-side entitlement gate + webhook signature verification

## Pricing tiers (default)
- Starter: $9.99/mo
- Pro: $19.99/mo
- Team: $74.99/mo
- Annual: 199.99/yr
- Triannually: 499.99/3yrs
  
You can change pricing in Stripe Products/Prices and update tier labels in `specs/ENTITLEMENTS.md`.

## Quickstart (local dev)
1) Install deps
```bash
npm install

## License

MIT — see [LICENSE](LICENSE)
