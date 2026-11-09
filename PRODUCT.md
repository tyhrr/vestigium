# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences of equal weight; no single one dominates the site (confirmed by the site's developer):

- **Local neighbours and families** in the association's area of Zagreb who come to workshops, the farmers market, the free library and community events.
- **International young people**: volunteers in the European Solidarity Corps (ESC) and Erasmus+ participants looking for a project in Croatia.
- **Partners and funders**: foundations, NGOs and public bodies assessing the association's track record.

The site is purely informational: no accounts, logins or user areas, and no separate entry points per audience. One page tells everyone what Vestigium is, what happens when, and where.

## Product Purpose

The public website of **Vestigium** (lat. *footprint*), an ecological-creative association that improves its community's quality of life by promoting a healthy, sustainable way of living through education, ecological and creative activities.

**Primary success:** a visitor finds an upcoming activity (calendar, workshops, events) and shows up. Membership, volunteering, project applications and partnership contact are secondary paths that must stay reachable.

## Positioning

A grassroots, neighbour-founded community space that is also part of the Global Transition Movement and active in European youth programmes (ESC, Erasmus+). Local, hands-on activity and international cooperation coexist in one association.

## Operating Context

- Bilingual: **English (default) and Croatian**, switched client-side and persisted per visitor; every user-facing string has an `en` and `hr` entry.
- Main sections: Activities, About / Who we are, Projects (Erasmus+, national, previous), Calendar, Community Center, Gallery, Get engaged (volunteer, ESC), Join us / Become a member, Zadruga Zelenica (cooperative).
- Activity areas: education & workshops, community life, sustainability, empowerment.
- The site is maintained by an external developer, not by association staff.

## Capabilities and Constraints

- Static site: plain HTML, CSS and vanilla JavaScript, no framework and no build step; hosted on GitHub Pages; the canonical domain is `https://tyhrr.github.io/vestigium/` (owner decision: no custom domain for now). Must keep working by opening `index.html` directly.
- Existing features: EN/HR language switcher (`data-i18n` keys), About carousel, responsive navigation with hamburger menu, footer visitor counter (Abacus), PWA manifest.
- Any new copy must be added in both languages.
- Two locations (confirmed on the association's previous site): **Community Center Vrbani**, Rudeška 142, Zagreb, and **Cooperative Community Center Zelenica**, Grančarska 2a, Brezovica (opened 2022). The office is at Grančarska 2a. Vrbani is where the association was founded.
- Events are published in two Google Calendars (Vrbani: udruga.vestigium@gmail.com, Brezovica: zadruga.zelenica@gmail.com), embedded on the site. Keep the embeds; a future "next 3 activities" list should be derived from them.
- Header navigation: at small widths only Gallery stays visible; everything else lives in the hamburger menu (owner decision).

## Brand Commitments

- Name: Vestigium, with the meaning *footprint* (lat.) as part of its story.
- Existing logo files in `src/assets/images/logo/` (several alternates; which one is official is undecided).
- Voice in the current copy: warm, community-first, inclusive of families, elderly residents, women and young people.

## Evidence on Hand

The figures below are self-reported by the association on its previous site (udrugavestigium.wixsite.com/vestigium). They are the association's own published claims, not independently verified; attribute them to Vestigium and avoid making them the headline.

- Founded in 2011 by six women responding to their neighbours' needs.
- "Over 1000 activities annually".
- Institutional support from the National Foundation for Civil Society Development since 2017.
- Presented as a "Changemakers" example from Croatia (2017); nominated among the top 30 of 250 projects for the Social Marie Award (2018).
- About 50 volunteers a year, over 2,000 volunteer hours.
- Zadruga Zelenica founded 2021; Brezovica cooperative centre opened 2022.

Recurring programme (previous site): EKO PLAC local farmers market every **Saturday 9–11**; green-basket delivery Mondays (Vrbani) and Tuesdays (Brezovica); clothes swap usually the last Saturday of the month 10–12; evening yoga, fitness or dance; free library.

Contact: +385 95 856 12 70, **udruga.vestigium@gmail.com** (confirmed by the owner; the old info@vestigium.hr is not used).

Real assets: activity photos in `src/assets/images/activities/` (9 images), Erasmus imagery in `src/assets/images/erasmus/`, hero banner `src/assets/images/index/banner-hero.jpg`.

Absent: testimonials, partner logos. Do not fabricate them.

## Product Principles

1. **What's on next comes first.** Upcoming activities and how to attend are the shortest path on the site.
2. **One informational page, no repetition.** Each topic appears once; no per-audience paths or user areas.
3. **Bilingual by default.** No feature or string ships in only one language.
4. **Real over claimed.** Show actual photos and verified facts; unverified numbers stay out of prominent placements.
5. **Simple to maintain.** Keep the no-build, static nature so a single developer can sustain it.
