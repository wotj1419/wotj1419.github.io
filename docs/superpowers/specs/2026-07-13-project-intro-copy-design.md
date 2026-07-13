# Project Intro Copy Design

## Goal

Rewrite the three project detail `INTRO.` paragraphs so they communicate user experience and service value, without describing the author's individual contribution.

## Scope

- Change only the `intro` values for Anvi, 알맹이, and ITDA in `src/data/portfolio.ts`.
- Preserve the existing detail-page layout, project ordering, feature lists, technical explanations, and contribution badges.

## Copy Principles

Each introduction uses a three-part user-journey narrative:

1. Identify the target user's friction or need.
2. Describe how the service supports the user through its core flow.
3. State the resulting user value in plain, portfolio-appropriate Korean.

Individual implementation work, technologies, and performance metrics remain in the existing contribution, feature, technical-selection, and troubleshooting sections.

## Project Messages

### Anvi

Remote-exam participants need a low-friction way to prepare a reliable test environment, while proctors need timely visibility into exceptions. The copy should highlight guided preparation, smartphone-assisted monitoring, and confidence in a fair, manageable exam.

### 알맹이

Small-business owners and employees face fragmented attendance, scheduling, contract, payroll, and communication tasks. The copy should emphasize a mobile-first connected operating flow and reduced administrative burden for both roles. It must not foreground the auction/chat feature, because it lacks context in the service's central HR story.

### ITDA

Non-developers face a high entry barrier in AI video creation because creation stages and tools are fragmented. The copy should describe a connected scenario-to-video workflow and the ability to create and collaborate with a clear shared view of progress.

## Acceptance Criteria

- Every intro has three or four natural Korean sentences.
- Every intro leads with user context rather than technology or author contribution.
- No intro uses first-person phrasing such as `저는` or `담당했습니다`.
- The data remains compatible with the existing single `<p>{project.intro}</p>` rendering in `ProjectDetail.tsx`.
