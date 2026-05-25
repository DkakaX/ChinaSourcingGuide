---
title: "Importing Electronics From China: FCC, CE, UKCA, RoHS Compliance Guide"
description: "Which certifications you actually need for electronics imported from China by market, what each one tests, real costs, and the certifications suppliers will fake if you don't push back."
pubDate: 2025-05-22
category: "Sourcing Tips"
tags: ["electronics importing", "fcc", "ce certification", "rohs", "compliance", "china electronics"]
author: "China Market Guide"
---

The first batch of Bluetooth speakers I imported from Shenzhen came with a beautiful CE certificate, FCC ID, and RoHS declaration. Two of the three were forged. I learned this when Amazon pulled my listing 11 days after launch over an FCC ID that didn't exist in the FCC database.

Electronics is the highest-friction product category to import from China precisely because every developed market has overlapping technical certifications, and faked certifications are common. Here's what you actually need, by market, and how to verify what your supplier hands you.

## Certifications by destination market

| Market | Mandatory marks | What it covers |
|---|---|---|
| US | FCC (radio/EMC), UL or ETL (safety, electrical) | Radio interference, electrical safety |
| EU | CE, RoHS, REACH, WEEE | Safety, EMC, hazardous materials, recycling |
| UK | UKCA (post-Brexit) + RoHS | Same as CE, separate UK regime |
| Canada | IC (radio), CSA or cULus (safety) | Similar to FCC + UL but separate certs |
| Australia | RCM (combines C-Tick and A-Tick) | EMC + electrical safety |
| Japan | PSE (electrical), TELEC (radio) | Strict, often most expensive |

You need certifications for **every market you sell into**. A CE-only product cannot legally be sold in the US, and vice versa. Don't let suppliers tell you "CE covers everything internationally" — that's a common misunderstanding.

## US: FCC, UL/ETL, sometimes more

### FCC

Required for any electronic device that intentionally or unintentionally radiates radio frequency energy. That means: **almost every electronic product**.

Two categories:

- **FCC Part 15 — Verification or DoC (Declaration of Conformity)**: for unintentional radiators (LED lamps, USB chargers, computers). Manufacturer tests and self-declares.
- **FCC Part 15 — Certification**: for intentional radiators (Bluetooth, WiFi, RF remotes). Requires testing at an FCC-accredited lab and an FCC ID issued by a TCB (Telecom Certification Body).

**Verify the FCC ID**: every certified device has a unique FCC ID printed on the product. Check it on https://www.fcc.gov/oet/ea/fccid — paste the FCC ID and you should see the granted certification, the device type, and the testing report.

If the FCC ID doesn't show up in the database, it's fake. This was my $4,200 lesson in 2019.

### UL / ETL (electrical safety)

Required for line-powered devices (AC plug, mains voltage). Not legally mandatory in many states for B2B sale but **mandatory in practice** because:

- Amazon requires UL or ETL listing for many electrical categories
- Walmart, Target, and most major US retailers require it
- Insurance liability is enormous without it

**UL** (Underwriters Laboratories) and **ETL** (Intertek) are two of the recognized NRTLs (Nationally Recognized Testing Laboratories). Either mark is accepted. Both cost similar.

Cost: **$8,000-25,000** for initial certification of a new product. Annual factory inspection: ~$2,000-4,000.

### Other US certs sometimes required

- **DOE / Energy Star**: for energy-consuming devices (chargers, monitors, etc.) — increasingly required for retailer placement
- **CPSC**: children's electronics fall under additional rules (lead testing, choking hazards)
- **Prop 65 (California)**: warning label requirement for products containing specific chemicals — applies to anyone selling into California

## EU: CE, RoHS, REACH, WEEE

### CE Mark

CE is **self-declared** for most consumer electronics. The manufacturer (or EU-based importer) declares conformity with applicable EU directives:

- **Radio Equipment Directive (RED 2014/53/EU)** — covers any wireless device
- **Low Voltage Directive (LVD 2014/35/EU)** — covers electrical safety for mains-powered devices
- **Electromagnetic Compatibility (EMC 2014/30/EU)** — covers radio interference

You need a **Declaration of Conformity (DoC)** and a **Technical File** to back up the CE mark. The factory typically prepares both for you, but **the legal responsibility is on the importer of record** (you), not the factory.

CE compliance testing at a recognized lab costs **$2,500-8,000** depending on complexity.

### RoHS

Restriction of Hazardous Substances. Limits lead, cadmium, mercury, hexavalent chromium, PBB, PBDE, and four phthalates. Testing costs $300-1,500 depending on number of homogenous materials.

### REACH

Registration, Evaluation, Authorisation, and Restriction of Chemicals. Annual updates of the "SVHC list" — Substances of Very High Concern. Your supplier needs to disclose any SVHC presence above 0.1% by weight.

### WEEE

Waste Electrical and Electronic Equipment. You must register with your country's WEEE scheme (e.g. Stiftung EAR in Germany) and pay annual fees for take-back of end-of-life products. Often outsourced to a compliance service.

### EU Authorised Representative

If you're outside the EU, you legally need an **EU Authorised Representative** for many electronic product categories. This is an EU-based entity that holds your technical file and is liable to EU authorities. Services run €600-2,000/year per product line.

## UK: UKCA

Post-Brexit, the UK transitioned from CE to **UKCA (UK Conformity Assessed)** marking. The technical requirements are nearly identical to CE; the paperwork is parallel and separate.

As of 2025, the UK government allows continued use of CE marking for many product categories indefinitely, but UKCA is the safer long-term mark. Verify current acceptance with the UK Office for Product Safety and Standards.

You also need a **UK Responsible Person** (similar to EU Authorised Rep) if you're outside the UK.

## The supplier-provided certificate problem

A factory in Shenzhen will hand you a stack of certificates the first time you ask. Some are real; some are creative.

### Common fakes

**FCC ID printed on the product that doesn't match the FCC database**. Verify at https://www.fcc.gov/oet/ea/fccid

**CE certificate "issued" by a fake "notified body"**. Real EU notified bodies are listed at https://ec.europa.eu/growth/tools-databases/nando/ — only certain product categories actually require a notified body certificate anyway (most consumer electronics are self-declared with a real test report).

**RoHS certificates with vague scope** ("this product complies with RoHS") without an actual test report from a recognized lab (SGS, BV, TÜV, Intertek, Eurofins). A real RoHS test report is 8-15 pages with specific measurements per material.

**Reused FCC ID from a different product**. The FCC ID is product-specific. If your speaker has the same FCC ID as a different brand's headphones, it's borrowed (a violation by both parties).

### How to verify what's real

For each certificate the supplier sends:

1. **FCC**: search the FCC ID database directly
2. **UL / ETL**: search the file number on https://iq.ul.com/ or https://www.intertek.com/etl/search/
3. **CE / RoHS**: ask for the **underlying test report** (not just the certificate), check the testing lab is recognized
4. **Notified body certificates**: look up the 4-digit NB number on the NANDO database

Any supplier that pushes back on providing the full test report is likely working with a forged or scope-mismatched certificate.

## My actual workflow for a new electronics import

1. **Before sample**: send the supplier the destination market (US/EU/UK) and ask which certifications they have for *this specific product* (not a similar one).
2. **Receive certificate copies + test reports** in PDF before placing PO.
3. **Verify FCC ID / UL file number** in the public database while the supplier is still on call.
4. **If new certification is needed**: budget $5,000-25,000 for testing + 4-8 weeks before commercial launch. Don't try to short-cut this — Amazon will pull non-compliant listings within days of launch.
5. **Hire a compliance consultant** for first-time electronics imports. Cost: $1,500-4,000 for a one-product review. Saves the inevitable mistake on a $30,000 inventory commitment.

## Recognized testing labs

Any of these is recognized internationally for most consumer electronics:

- SGS (Swiss, large China operation)
- Bureau Veritas (French)
- TÜV Rheinland / TÜV SÜD (German, very respected for electronics)
- Intertek (UK)
- UL (US)
- Eurofins (Luxembourg)

Avoid "test reports" from obscure labs you can't find in Google search results.

## Related reading

- [Chinese factory audit checklist](/blog/china-factory-audit-checklist/)
- [How to verify Alibaba suppliers](/blog/how-to-verify-alibaba-suppliers/)
- [China HS code lookup guide](/blog/china-hs-code-lookup-guide/)
- [China product inspection guide](/blog/china-product-inspection-guide/)
- [Shenzhen Huaqiangbei electronics market](/blog/shenzhen-huaqiangbei-electronics-market/)
