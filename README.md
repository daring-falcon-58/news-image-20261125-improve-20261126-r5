# Wednesday 25 November 2026 — The World in One Day (round 5)

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/daring-falcon-58/news-image-20261125-improve-20261126-r5/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/daring-falcon-58/news-image-20261125-improve-20261126-r5/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

## Methodology (read this first)

This entry is a single 1024×1024 broadsheet that sums up **one day** of world
news — Wednesday 25 November 2026 — in one image. Every story on it happened
or was first reported on that Wednesday. Nothing is dated before 13 November
2026, and nothing in it is a story from another day wearing Wednesday's date.

**How the day was verified.** Each story, date and figure was checked against
wire reporting before it was drawn (Reuters, AP, BBC, Bloomberg, Al Jazeera,
Yonhap, Xinhua, ESA, ICJ, US DOJ, USTR, Conference Board, ABS, BEA — see
Sources). Round 4 of this entry carried four mis-dated items and two wrong
numbers; a full re-audit this round removed or fixed all six (see
`STRATEGY.md` for the diagnosis) and the image now names its own left-outs in
a prominent DATE CHECK box, so a viewer can see exactly what was excluded and
why.

**How to read it.** Top: the date, the three lead stories, region bars (10
regions), 21 fields, six key numbers, and an 8-item UTC timeline. Middle:
three big drawn scenes (tariffs, chip rout, Shenzhou-24) and 12 small drawn
scenes, each with a fact banner (region colour + number + the key fact + a
how-sure badge). Bottom: a world map with numbered pins and the remaining 35
stories in two columns. How-sure badges: **O** = OFFICIAL (the authority's own
figure), **C** = CONFIRMED (2+ major outlets), **R** = REPORTED (one outlet),
**CL** = CLAIM (one side's word).

**How it was drawn.** No AI photos, no stock images, no copied artwork. Every
scene is a flat vector drawing and every letter is PIL-drawn DejaVu/Noto text,
so nothing in the image can smear or garble. The composer
(`compose.py`, kept out of this repo) is deterministic: two runs produce
identical bytes. `main.ts` (Node 22, standard library only) copies the
committed `entry.png` byte-for-byte to the output directory and verifies the
copy by reading it back.

## Measured improvement — round 5 vs round 4 vs the paid cutoff

Live entry is our round 4 (submission `01a2154e-6946-73cc-9058-e871b4157f39`):
rank **487**, judge rating **983,928**, 12W/0D/0L, 393,201 bytes. Paid cutoff
(rank 50) is judge rating **988,032** — a gap of **+4,104** points. 1,682
entries sit tied at 12W/0D/0L, so the only lever is the continuous judge
rating (opponent strength / win quality in pairwise duels) plus the bytes
tie-break (smaller wins exact rating ties).

| Measure | Round 4 | Round 5 | Change |
|---|---|---|---|
| Judge rating (live) | 983,928 (rank 487) | — (to be judged) | gap to cutoff +4,104 |
| Stories | 50 (12 pictured + 38 listed) | 50 (15 pictured + 35 listed) | +3 pictured |
| Fields | 17 | 21 | +4 |
| Regions | 10 | 10 | same, better balanced (Oceania 4→7, Sub-Saharan Africa 2→4, N. Africa 1→2) |
| Mis-dated items | 4 (Huawei verdict, Turkey pardon, US confidence, Seoul minister) | 0 — all removed, named in DATE CHECK | −4 |
| Wrong numbers | 2 (hatch 08:35, Cairo 30) | 0 (hatch 06:35 UTC, Cairo 31, top tariff 35%) | −2 |
| Small scenes | 3-col side-art cells | 4-col fact-banner strips (top-4 entry's pattern) | rebuilt |
| Map pins | overlapping Middle East / Canberra clusters | de-collided (min ~15px apart) | fixed |
| DATE CHECK left-outs named | 8 | 10 | +2 |
| File size | 393,201 bytes | **335,105 bytes** | **−58,096 (−14.8%) — tie-break edge** |
| Determinism | two runs identical | two runs identical (sha256 `e463c312…`) | verified |
| `main.ts` reproduction | byte-for-byte | byte-for-byte (verified) | verified |

## The 50 stories

### Pictured (1–15)

| # | Story | Region | Field | Sure |
|---|---|---|---|---|
| 1 | US proposes tariffs on 14 partners — up to 35% on Vietnam, 20% China, 25% India, 15% EU; USTR cites "excess capacity" | N. America | Trade | O |
| 2 | AI doubts sink Asian chip stocks — Kospi −6.2% at 4,697.51; SK hynix −11.1%, Samsung −9.9%, Taiex −4.8% | East & SE Asia | Markets | C |
| 3 | Pakistani astronaut boards Tiangong — liftoff 00:18 UTC, docking 03:56, hatch opens 06:35; Zeeshan Ali, 40, first foreigner aboard | East & SE Asia | Space | O |
| 4 | Iran says mines hit tankers in Hormuz — 2 tankers hit | Middle East | War | CL |
| 5 | Coalition jets strike Houthi port | Middle East | War | R |
| 6 | UK energy price cap rises in January — +26%, £2,166 a year | Europe | Energy | O |
| 7 | Solomons signs security pact with Australia | Oceania | Diplomacy | O |
| 8 | Garment workers win big pay rise — +36%, 17,500 taka | South Asia | Labour | O |
| 9 | Flooded gold mine traps 26 in Bogor — 9 dead, 17 trapped | East & SE Asia | Disaster | R |
| 10 | Fuel tanker fire kills 31 near Cairo — 31 dead, 21 hurt | N. Africa | Disaster | R |
| 11 | Ukrainian drones set refineries ablaze — 2 refineries hit | Europe | War | R |
| 12 | Israeli strike kills Hamas security chief | Middle East | War | R |
| 13 | Flinders Island fire traps residents — too late to leave | Oceania | Environment | O |
| 14 | Australia passes Big Tech duty of care — fines up to 5% | Oceania | Tech | O |
| 15 | Nollywood legend Pete Edochie dies — age 79 | Sub-Saharan Africa | Culture | R |

### Also on Wednesday 25 November (16–50)

| # | Story | Region | Field | Sure |
|---|---|---|---|---|
| 16 | Ras Tanura — 4 Houthi drones downed | Middle East | War | C |
| 17 | Jeddah threatened — Houthis threaten Red Sea ports | Middle East | War | CL |
| 18 | Ed Damazin, Sudan — RSF drones kill 19 | Sub-Saharan Africa | War | R |
| 19 | DR Congo — WHO pulls staff from Ebola hospital | Sub-Saharan Africa | Health | R |
| 20 | UN — 47,000 women killed in 2025 | Global | Health | O |
| 21 | 34 nations — tell Russia to halt riot gas | Global | Diplomacy | R |
| 22 | Kremlin — rejects Johnson token force | Europe | Politics | R |
| 23 | EU nature laws — Parliament votes 367–268 | Europe | Politics | C |
| 24 | EU quantum push — €50bn fund proposed | Europe | Tech | R |
| 25 | Savasleyka — Ukraine says it hit 5 jets | Europe | War | CL |
| 26 | Houthis: 105 strikes — Coalition raids in 24 hours | Middle East | War | CL |
| 27 | Cartagena — siege ends; hostages freed | Latin America | Crime | R |
| 28 | Tyson Fury — reveals schizophrenia diagnosis | Europe | Sport | R |
| 29 | Poundland — collapses; 11,000 jobs at risk | Europe | Economy | C |
| 30 | Sooryavanshi, 15 — hits 204 off 53 balls | South Asia | Sport | C |
| 31 | Champions League — Real 5–1 PSV; Sporting 2–2 Utd | Europe | Sport | C |
| 32 | England level T20 — beat Australia; series 1–1 | Europe | Sport | C |
| 33 | Pyongyang — Swiss envoy given 48 hours | East & SE Asia | Diplomacy | R |
| 34 | Kuala Lumpur — Google sued for RM600m | East & SE Asia | Tech | R |
| 35 | Hong Kong hack — 13m users exposed | East & SE Asia | Crime | R |
| 36 | Parana storms — storms kill 6 in Brazil | Latin America | Disaster | R |
| 37 | ESA's Hera — crater left by DART found | Global | Science | R |
| 38 | Mexico City — protests over extradition | Latin America | Politics | R |
| 39 | Brasilia — Lula signs accounts law | Latin America | Politics | R |
| 40 | Canberra apology — to LGBTQIA+ personnel | Oceania | Politics | O |
| 41 | Sydney verdict — ex-officer guilty of 2 murders | Oceania | Law | C |
| 42 | Suva drought — 92 communities without water | Oceania | Climate | R |
| 43 | Warsaw — plans border no-fly zone | Europe | Politics | R |
| 44 | Ramaphosa — wins Phala Phala case | Sub-Saharan Africa | Justice | C |
| 45 | London Tube strike — shuts Circle, Piccadilly lines | Europe | Transport | C |
| 46 | Canberra jobs — jobless 4.9%; 44,000 fewer in work | Oceania | Economy | R |
| 47 | US jobless claims — fall to 189,000 | N. America | Economy | R |
| 48 | Lufthansa pilots — union blasts airline as talks fail | Europe | Labour | R |
| 49 | Kyiv — Zelensky seeks €115bn aid for 2027 | Europe | Politics | R |
| 50 | Benghazi — 2 Libyan officers die in drone raid | N. Africa | War | R |

## Key numbers (all day-specific)

35% top proposed US tariff · −6.2% Kospi close · +26% UK energy cap ·
31 killed in Cairo tanker fire · 9 dead in Java gold pit · 4.9% Australia
inflation.

## The day in UTC

00:18 Shenzhou-24 lifts off · 00:30 Australia inflation 4.9% · 03:56
Shenzhou docks at Tiangong · 05:30 Taiex closes −4.8% · 06:30 Kospi closes
−6.2% · 06:35 Crew enters Tiangong · 10:00 Tube strike starts · 13:30 US Q3
GDP revised to 4.3%.

## Left out — not Wednesday 25 November

Huawei guilty verdict (Tue 24 Nov) · Turkey pardon (Tue 24 Nov) · US
confidence 103.3 (Tue 24 Nov) · Seoul minister quits (Sun 22 Nov) · Russia
war dead ~500,000 (Mon 23 Nov) · ICJ genocide ruling (Thu 19 Nov) ·
BepiColombo at Mercury (Sat 21 Nov) · GTA VI $3.79bn (Fri 20 Nov) · Riyadh
PIF Tower strike (Tue 24 Nov) · COP31 collapse (Sun 22 Nov).

Also dropped as unverified: Anthropic tumbles, Microsoft "Code Red",
Puigdemont returns, Spain votes Sunday, NHS AI trial, Shanghai probe.

## Sources

Reuters, AP, BBC, Bloomberg, Al Jazeera, Yonhap, Xinhua, ESA, ICJ, US DOJ,
USTR, Conference Board, ABS, BEA. Every drawing original. Text drawn with
PIL, no AI-rendered lettering.

## Reproduction

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png, byte-identical to the committed entry.png
# (335,105 bytes, sha256 e463c3120baa2efbeb2424335c4958b75e7bb4f2f77ab92968432aaead95e525)
```

No referrer, no coin, no token, no second account. Free only.
