# Durby Global Hack

The marketing site for **Durby Global Hack**, an international AI hackathon.
Standalone Next.js app — deploys independently of the main Durby product at
its own subdomain, **hack.durby.tech**.

## Stack

- Next.js 15 (App Router) + React 19
- Tailwind CSS, sharing Durby's brand tokens (black / off-white / electric
  blue) plus one event-only accent (`hack-signal`, a lime green used for
  the hackathon's own identity — countdown, live badges, the primary CTA)
- Framer Motion for scroll reveals, hero entrance, and micro-interactions
- Zero backend — fully static/SSG marketing page. Registration is an
  external link (see below), not a form this app owns.

## Local development

```bash
npm install
cp .env.example .env.local   # then edit values as needed
npm run dev
```

Runs on `http://localhost:3010`.

## Editing content

Every section pulls from a config or data file — no content is hardcoded
in a component. To update the site, edit these instead of the JSX:

| What | File |
| --- | --- |
| Registration link, event date, contact/social links, pricing note | [`src/lib/config.ts`](src/lib/config.ts) |
| Challenge tracks | [`src/data/tracks.ts`](src/data/tracks.ts) |
| Prizes & special awards | [`src/data/prizes.ts`](src/data/prizes.ts) |
| Timeline / schedule | [`src/data/timeline.ts`](src/data/timeline.ts) |
| How-to-join steps & eligibility | [`src/data/steps.ts`](src/data/steps.ts) |
| Why-join value props | [`src/data/value.ts`](src/data/value.ts) |
| "What you can build" ideas | [`src/data/builds.ts`](src/data/builds.ts) |
| Judging criteria & weights | [`src/data/judging.ts`](src/data/judging.ts) |
| Judges & mentors | [`src/data/mentors.ts`](src/data/mentors.ts) |
| Resource links | [`src/data/resources.ts`](src/data/resources.ts) |
| Sponsor categories & logos | [`src/data/sponsors.ts`](src/data/sponsors.ts) |
| FAQ | [`src/data/faq.ts`](src/data/faq.ts) |
| Trust marquee phrases | [`src/data/marquee.ts`](src/data/marquee.ts) |

**Event dates & duration**: not decided yet. The Hero shows a "dates
announced soon" placeholder instead of a countdown until
`NEXT_PUBLIC_EVENT_DATE_CONFIRMED=true` is set (alongside a real
`NEXT_PUBLIC_EVENT_START`) — see `EVENT_DATE_CONFIRMED` in
`src/lib/config.ts`. Never set the date confirmed flag without an actual
confirmed date; it's a factual claim, not a design toggle.

**Pricing**: entry is paid, not free — final pricing (base / early-bird /
student tiers) isn't set. Every mention of cost on the site reads
`PRICING_NOTE` from `src/lib/config.ts` ("Paid registration — pricing
announced soon."). Update that constant once pricing is confirmed; a
`PRICING_ANNOUNCED` flag is there if a section needs to branch on it later.

**Registration CTA**: every "Register" button reads `REGISTRATION_URL`
from `src/lib/config.ts`, which reads `NEXT_PUBLIC_REGISTRATION_URL`. Point
it at the real registration platform (Luma, Devpost, Typeform, a custom
form...) when it's ready — no component changes required.

**Sponsor logos**: `SPONSOR_CATEGORIES[].slots` in `src/data/sponsors.ts`
starts empty (renders "Open slot" placeholders). Add `{ name, href }`
entries — or swap the render for an `<Image>` — as sponsors are confirmed.
University Partners is a priority sponsor category — the event itself is
global, but private universities (German institutions in particular) get
real value from reaching ambitious international students, including
outreach markets like India — so it's ordered first among the logo-wall
tiers. Don't let this framing creep into the core event identity, though:
the hackathon itself is global, not an India × Germany event.

**Prize amounts**: `src/data/prizes.ts` uses placeholder `"X,XXX"` values
by design. Replace with confirmed figures before launch.

**No Durby product integration**: this is a Durby-*organized* hackathon,
not a Durby product hackathon — it's fully technology-agnostic, with no
Durby API/platform track and no requirement to build with Durby's own
technology. Don't reintroduce that framing when editing copy.

## Deploying to hack.durby.tech

This is a standalone app — it does not import from, depend on, or affect
the main Durby website/dashboard in any way. Deploy it as its own project:

1. Push this directory to its own git repository (or a subfolder of a
   monorepo deployed as an independent Vercel/Railway project — either
   works since it has no cross-project imports).
2. Deploy (Vercel is the path of least resistance for a Next.js app):
   - New Project → import this repo → framework auto-detected as Next.js.
   - Add the environment variables from `.env.example`, using production
     values (`NEXT_PUBLIC_SITE_URL=https://hack.durby.tech`, the real
     `NEXT_PUBLIC_REGISTRATION_URL`, `NEXT_PUBLIC_EVENT_START`, etc).
   - Add `hack.durby.tech` as a custom domain on the project, then point a
     `CNAME` for `hack` at the target Vercel gives you (in whatever DNS
     provider hosts `durby.tech`).
3. `output: "standalone"` is set in `next.config.ts`, so it also builds a
   minimal, self-contained server (`node .next/standalone/server.js`) if
   you'd rather run it in a container instead of on Vercel.

## Production checklist before launch

- [ ] Decide event dates/duration, then set `NEXT_PUBLIC_EVENT_START` and
      flip `NEXT_PUBLIC_EVENT_DATE_CONFIRMED=true` to turn on the countdown
- [ ] Replace placeholder dates in `src/data/timeline.ts`
- [ ] Decide entry pricing, then update `PRICING_NOTE` in
      `src/lib/config.ts`
- [ ] Replace placeholder prize amounts in `src/data/prizes.ts`
- [ ] Point `NEXT_PUBLIC_REGISTRATION_URL` at the live registration form
- [ ] Add real judge/mentor photos and sponsor/university logos
- [ ] Confirm `NEXT_PUBLIC_SITE_URL=https://hack.durby.tech` in production
      env (used for canonical URLs and the Open Graph image)
