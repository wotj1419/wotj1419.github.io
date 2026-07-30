# Project Modal Accessibility Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the project-detail modal usable with keyboard navigation while preserving its existing visual and scroll-restoration behavior.

**Architecture:** `Projects` passes the clicked button element to `App`; `App` restores focus after the dialog closes. `ProjectDetail` owns initial focus, Escape handling, Tab containment, and temporary body-scroll locking.

**Tech Stack:** React 18, TypeScript, Vitest, Testing Library.

## Global Constraints

- Add no runtime dependency.
- Preserve the existing modal content, visual layout, project selection, and window scroll restoration.
- Keep keyboard focus inside the dialog only while it is mounted.

---

### Task 1: Cover keyboard dialog behavior

**Files:**
- Modify: `src/App.test.tsx`

**Interfaces:**
- Consumes: existing project-detail open buttons and dialog.
- Produces: regression coverage for focus, Escape, Tab containment, and body-scroll lifecycle.

- [ ] **Step 1: Write failing tests**

Add tests that open the first project and assert the close button is `document.activeElement`, dispatch `Escape` and assert the dialog is gone with focus returned to the triggering button, dispatch `Tab` and `Shift+Tab` on the close button and assert focus stays in the dialog, and assert `document.body.style.overflow` changes to `hidden` while open then restores after closing.

- [ ] **Step 2: Run the tests to verify failure**

Run: `npm.cmd test -- src/App.test.tsx`

Expected: the focus, Escape, Tab, and body-overflow assertions fail because the current dialog has no keyboard lifecycle handling.

### Task 2: Implement modal focus lifecycle

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/Projects.tsx`
- Modify: `src/components/ProjectDetail.tsx`

**Interfaces:**
- `ProjectsProps.onSelect(projectId: string, trigger: HTMLButtonElement): void`
- `ProjectDetailProps.onClose(): void`
- `App` keeps `HTMLButtonElement | null` as the most recent modal trigger.

- [ ] **Step 1: Store and restore the trigger in App**

Change `selectProject` to receive the triggering button, store it before selecting the project, and after `closeProject` clears selection, restore focus to that stored element on the next frame so the main content has remounted.

- [ ] **Step 2: Pass the activating button from Projects**

Change both project image and detail-button click handlers to pass `event.currentTarget` together with `project.id`.

- [ ] **Step 3: Add dialog keyboard lifecycle**

In `ProjectDetail`, attach refs to the dialog container and close button. On mount, save `document.body.style.overflow`, set it to `hidden`, and focus the close button. Register a document `keydown` handler that calls `onClose` for Escape and cycles focusable elements inside the dialog for Tab/Shift+Tab. On cleanup, remove the listener and restore the saved body overflow value.

- [ ] **Step 4: Run focused tests**

Run: `npm.cmd test -- src/App.test.tsx`

Expected: all modal interaction tests pass.

### Task 3: Run the full verification suite

**Files:**
- No production file changes.

- [ ] **Step 1: Run static checks and tests**

Run: `npm.cmd run lint` and `npm.cmd test`

Expected: lint reports no errors and every test passes.

- [ ] **Step 2: Build the static site**

Run: `npm.cmd run build`

Expected: TypeScript and Vite complete successfully.

- [ ] **Step 3: Commit implementation**

Run:

```bash
git add src/App.tsx src/components/Projects.tsx src/components/ProjectDetail.tsx src/App.test.tsx
git commit -m "feat: improve project modal accessibility"
```
