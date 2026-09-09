# Pip Calc

Mobile-first, offline-first Forex and XAUUSD position-size calculator.

## Included
- Instrument-aware Forex pip values and separate XAUUSD tick model
- Major and cross Forex pairs requested for the project
- Account currencies: USD, EUR, GBP, CAD, AUD, NZD, CHF, JPY
- Manual conversion rates when the quote currency differs from the account currency
- Conservative lot-step rounding so calculated risk does not exceed the requested risk
- Broker minimum/maximum validation
- Potential loss, potential profit and risk:reward
- PWA manifest + service worker for offline use
- GitHub Pages deployment workflow

## Important broker note
Forex contract size is assumed to be 100,000 units per standard lot. XAUUSD defaults to 100 troy oz per lot and $0.01 tick size. These are **broker-dependent**; verify the symbol specification in MT5/your broker before using the result on a live trade.

## Rates
The app does not depend on a backend or live-rate service. When conversion is required, enter the current market rate shown by the calculator. This keeps the app usable offline and avoids silently using stale prices.

## Tests
Run locally with Node.js:

```bash
node engine.test.js
```

## GitHub Pages
Pushes to `main` deploy automatically through `.github/workflows/pages.yml`. After the Actions run succeeds, open the Pages URL in Safari and choose **Share → Add to Home Screen**.
