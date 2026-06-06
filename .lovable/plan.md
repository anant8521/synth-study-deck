
# Engineering Study Hub — Multi-Screen Restructure

Convert the current single-page app into 8 separate mobile screens with dedicated routes, keeping the existing dark-blue glassmorphism theme and bottom navigation.

## Routes to create

```
src/routes/
  index.tsx                 -> Home (existing, lightly trimmed)
  subject.$id.tsx           -> Screen 1: Subject Dashboard
  notes.tsx                 -> Screen 2: Notes
  lectures.tsx              -> Screen 3: Video Lectures
  important-questions.tsx   -> Screen 4: Important Questions
  mcq.tsx                   -> Screen 5: MCQ Practice
  pyq.tsx                   -> Screen 6: PYQ
  cbt.tsx                   -> Screen 7: CBT Test
  profile.tsx               -> Screen 8: Profile
```

## Shared components

- `AppShell` — page wrapper with back button, title, search icon, glass header
- `BottomNav` — extracted from index.tsx; updated items: Home / Notes / MCQ / CBT Test / Profile (uses TanStack `Link` with `activeProps`)
- `StatPill`, `UnitCard`, `TabBar`, `GlassCard`, `GradientButton` — small reusable primitives so every screen feels consistent

## Per-screen content

**Screen 1 – Subject Dashboard** (`/subject/electrical-circuits`)
- Header banner: "Electrical Circuit and Networks", Semester 3 (AE/JE)
- Stat row (replacing misleading 65%): Notes Read 120 · MCQ Attempted 350 · PYQ Solved 45 · CBT Rank #25
- 6 feature cards (2×3 grid): Notes, Lectures, Important Questions, MCQ Practice, PYQ, E-Book — each links to its route
- Units list (5 units) with progress chips
- "Continue Learning" gradient CTA

**Screen 2 – Notes**
- Tabs: All Units / Bookmarks
- Per-unit card with 5 chips: Theory Notes, PDF Notes, Short Notes, Important Diagrams, Formula Sheet
- "Download All Notes" sticky CTA

**Screen 3 – Lectures**
- Tabs: Unit Wise / Bookmarks
- Video card: thumbnail w/ play, title, duration, views, progress bar, Watch + Download Notes buttons

**Screen 4 – Important Questions**
- Tabs: Long Answer / Short Answer / Most Repeated / Expected
- Unit cards with question count + Open button

**Screen 5 – MCQ Practice**
- Tabs: Unit Wise / Chapter Wise / Mock Test
- Difficulty filter chips: Easy / Medium / Hard
- Cards: question count, previous score ring, Start Quiz button
- Footer strip: Performance Analytics (Instant Result · Detailed Solution · Performance Report · Retry Quiz)

**Screen 6 – PYQ**
- Tabs: Year Wise / Unit Wise
- Year cards (2025–2021): Objective / Short / Long / Solved PDF chips + View
- "Download All PYQ" CTA

**Screen 7 – CBT Test** (new)
- Category cards: Subject Test, Semester Test, AE Mock Test, JE Mock Test, Full Length Test
- Each card shows: Timer, Questions Count, Attempts, Best Score + Start Test button

**Screen 8 – Profile**
- Avatar + Name + Branch + Semester
- Stats grid: Notes Read, MCQ Solved, PYQ Solved, CBT Tests
- Menu list: Bookmarks · Downloads · Settings · Help & Support · Logout
- Theme toggle moved here

## Home page changes
- Keep the welcome banner, semester accordions, and AE/JE volumes
- Replace the misleading "Your Progress 65%" stat row with: Notes Read · MCQ Attempted · PYQ Solved · CBT Rank
- Stat cards link to corresponding screens
- Move the theme toggle to Profile so the header is cleaner

## Technical notes
- All new files registered via TanStack file-based routing; `routeTree.gen.ts` regenerates automatically
- Every route file uses `createFileRoute` with matching path string + `head()` meta (title + description per screen)
- Shared dark-theme tokens from `src/styles.css` reused — no new colors
- Bottom nav uses `<Link to=... activeProps={...}>` so the active tab is route-driven
- Build verified after generation; placeholder data only (no backend yet)

## Out of scope
- No backend / auth wiring (UI shells only with sample data)
- No real PDF/video assets
