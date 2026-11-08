# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences of equal weight; no single one dominates the site (confirmed by the site's developer):

- **Local neighbours and families** in the association's area of Zagreb who come to workshops, the farmers market, the free library and community events.
- **International young people**: volunteers in the European Solidarity Corps (ESC) and Erasmus+ participants looking for a project in Croatia.
- **Partners and funders**: foundations, NGOs and public bodies assessing the association's track record.

Because the audiences are balanced, every page must let each of them find their path quickly without one audience's content burying the others.

## Product Purpose

The public website of **Vestigium** (lat. *footprint*), an ecological-creative association that improves its community's quality of life by promoting a healthy, sustainable way of living through education, ecological and creative activities.

**Primary success:** a visitor finds an upcoming activity (calendar, workshops, events) and shows up. Membership, volunteering, project applications and partnership contact are secondary paths that must stay reachable.

## Positioning

A grassroots, neighbour-founded community space that is also part of the Global Transition Movement and active in European youth programmes (ESC, Erasmus+). Local, hands-on activity and international cooperation coexist in one association.

## Operating Context

- Bilingual: **English (default) and Croatian**, switched client-side and persisted per visitor; every user-facing string has an `en` and `hr` entry.
- Main sections: Activities, About / Who we are, Projects (Erasmus+, national, previous), Calendar, Community Center, News, Gallery, Get engaged (volunteer, ESC), Join us / Become a member, Zadruga Zelenica (cooperative).
- Activity areas: education & workshops, community life, sustainability, empowerment.
- The site is maintained by an external developer, not by association staff.

## Capabilities and Constraints

- Static site: plain HTML, CSS and vanilla JavaScript, no framework and no build step; hosted on GitHub Pages (`tyhrr.github.io/vestigium`). Must keep working by opening `index.html` directly.
- Existing features: EN/HR language switcher (`data-i18n` keys), About carousel, multi-level responsive navigation with hamburger menu, footer visitor counter (localStorage), PWA manifest, robots.txt, sitemap.xml.
- Any new copy must be added in both languages.
- **Open decision:** the address. The README says it moved to Grančarska 2a, Brezovica, while the About copy still describes the founding in the Vrbana area, Zagreb. Confirm with the association which location and wording are current.

## Brand Commitments

- Name: Vestigium, with the meaning *footprint* (lat.) as part of its story.
- Existing logo files in `src/assets/images/logo/` (several alternates; which one is official is undecided).
- Voice in the current copy: warm, community-first, inclusive of families, elderly residents, women and young people.

## Evidence on Hand

All figures below come from the current site copy and are **unverified**: the developer could not confirm them. Do not repeat them in new copy or headlines until the association confirms them.

- Founded in 2011 by six women responding to their neighbours' needs.
- "Over 1000 activities annually".
- Institutional support from the National Foundation for Civil Society Development since 2017.
- Presented as a "Changemakers" example from Croatia (2017); nominated among the top 30 of 250 projects for the Social Marie Award (2018).

Real assets: activity photos in `src/assets/images/activities/` (9 images), Erasmus imagery in `src/assets/images/erasmus/`, hero banner `src/assets/images/index/banner-hero.jpg`.

Absent: testimonials, partner logos, real calendar data feed, member or volunteer counts. Do not fabricate them.

## Product Principles

1. **What's on next comes first.** Upcoming activities and how to attend are the shortest path on the site.
2. **Three doors, equal weight.** Neighbours, international youth and partners each get a clear, findable route.
3. **Bilingual by default.** No feature or string ships in only one language.
4. **Real over claimed.** Show actual photos and verified facts; unverified numbers stay out of prominent placements.
5. **Simple to maintain.** Keep the no-build, static nature so a single developer can sustain it.
