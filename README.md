# Pip Calc

Mobile-first, offline-capable Forex and XAUUSD position-size calculator.

## What this version does
- Instrument-aware Forex pip sizing
- Distinguishes pip size from point size (5-digit/3-digit feeds)
- Separate XAUUSD metal model using configurable tick/point/contract specifications
- Account currencies: USD, EUR, GBP, CAD, AUD, NZD, CHF, JPY
- All requested major/cross Forex pairs
- Cross-currency pip-value conversion with conventional FX quoting and inverse rates
- Manual/stored conversion rates; no backend required
- Risk amount, raw lot size, conservative lot-step rounding, potential loss/profit and RR
- Validation instead of silently producing an inaccurate result
- PWA manifest + service worker for offline use
- GitHub Pages deployment workflow included

## Broker specifications
The defaults in `engine.js` are generic retail assumptions. **Do not treat them as universal.**
Edit the instrument configuration to match your broker, especially XAUUSD contract size, tick size, digits, minimum lot, maximum lot and lot step.

## Exchange rates
The app is intentionally offline-first. When a conversion is required, enter the requested market rate shown in the UI. The engine also accepts a rate table for programmatic integrations.

Example: for GBPJPY in a USD account, the engine uses the USDJPY rate and inverts it to convert JPY pip value into USD.

## Local tests
Requires Node.js:

```bash
node engine.test.js
```

The current test suite covers representative Forex pairs, JPY conversion, cross-currency conversion, XAUUSD, validation, lot-step rounding and pair coverage.

## GitHub Pages from iPhone
1. Create a GitHub repository named `pip-calc` (or any name).
2. Upload the **contents of this folder** to the repository root, including `.github/workflows/pages.yml`.
3. Commit to the `main` branch.
4. Open the repository's **Actions** tab and wait for `Deploy Pip Calc to GitHub Pages` to finish.
5. In **Settings → Pages**, the site should use GitHub Actions. The deployment job will expose the site URL.
6. Open the URL in Safari and use **Share → Add to Home Screen**.

If GitHub Pages is configured manually instead, use the `main` branch and `/ (root)` as the source.
