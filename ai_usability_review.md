# AI Accessibility Study Aids — AI-Assisted Usability Review

**Purpose:** This document records an AI-assisted review of the study-aid website because human peer responses have not yet been collected.

**Important limitation:** This is NOT feedback from three real students. The perspectives below are simulated review prompts/findings to help improve the project. They must not be reported as actual peer-review data. The assignment's requirement to ask three peers remains pending until three people review the site and provide their own responses.

## Scope of review

The review is based on the website HTML and project details shared in this conversation. It is a code/content review, not a formal usability test with independent participants.

Features considered:
- Five topic sections: Machine Learning, NLP, Computer Vision, Neural Networks, and Generative AI
- Easy-English notes and examples
- Visual summaries/mind-map style diagrams
- Browser text-to-speech buttons
- Machine Learning MP3 player
- Topic quizzes and a Verification Report section

## AI-assisted review findings

| Area | Positive finding | Issue or limitation to check | Suggested improvement |
|---|---|---|---|
| Navigation | Topic links point to lesson section IDs such as `#ml`, `#nlp`, and `#cv`. | Confirm every home-page and navigation link moves to the right section in the browser. | Test all five topic links and the Verification Report link after each code change. |
| Easy-English notes | Notes use short explanations, examples, and defined key terms. | Simplified wording may omit nuance from the original educational source. | Compare each definition to the relevant original lesson/lecture and record changes. |
| Visual summaries | Each topic has a compact visual summary that can help scanning and recall. | Current summaries are mostly styled text boxes, not detailed diagrams; colour alone should not convey meaning. | Keep labels explicit, ensure good contrast, and include a text description for screen readers. |
| Audio | Browser speech buttons can read the lesson script; user has reported that audio is audible. | Browser text-to-speech depends on browser/OS settings and is not itself a downloadable audio file. The MP3 player requires `audio/ml_basics.mp3` at the expected relative path. | Test the browser-voice buttons and MP3 player separately. Keep the audio script available as text. |
| Quizzes | Each topic includes two multiple-choice questions with automatic scoring. | Two questions provide only a small check of understanding. | Add more questions later if time allows and check each correct-answer key. |
| Accuracy | The site links to the selected MIT OpenCourseWare course for Machine Learning. | A source link alone does not prove all five topics have been verified against primary sources. The MIT ML course is a direct source for ML, not necessarily the best primary source for NLP, vision, neural networks, and generative AI. | Use an appropriate original source for each topic, cite the specific section/lecture, and complete a claim-by-claim comparison. |
| Accessibility | Semantic headings, labels, links, buttons, and `aria-live` status areas are used in places. | Keyboard navigation, contrast, zoom, screen-reader reading order, and captions/transcripts have not had a formal accessibility test. | Run a keyboard-only check, test zoom, review contrast, and test with available assistive technology. |

## Simulated audience perspectives (not real peer feedback)

These are hypothetical questions to consider during revision. They are not quotations or ratings from real people.

### Perspective A — Student who prefers simple language
- Likely strength to evaluate: short definitions and everyday examples.
- Question to test with a real student: Which term or sentence was still confusing?
- Possible improvement: keep one idea per sentence and explain technical terms the first time they appear.

### Perspective B — Student who learns by listening
- Likely strength to evaluate: the audio script offers an alternative to reading.
- Question to test with a real student: Was the speech pace clear, and did audio controls work?
- Possible improvement: provide an actual audio file where required, and retain a text transcript.

### Perspective C — Student who uses visual structure
- Likely strength to evaluate: topic cards and mind-map style summaries make the page scannable.
- Question to test with a real student: Did the summary help them recall the main points without rereading the full lesson?
- Possible improvement: make relationships between ideas visually clearer and ensure the text remains readable on a small screen.

## Human peer feedback status

**Status: Pending — not collected yet.**

To complete the assignment requirement, give the website and the existing `peer_feedback_form.md` to three real reviewers. Ask each person to review one or more lessons and fill in their own ratings and comments. Do not enter invented names, ratings, quotes, or dates.

When the three responses are received, summarise:
1. Number of real reviewers and date collected
2. Common positive feedback
3. Common issues raised
4. Changes made because of the feedback
5. Any limitations (for example, small informal sample)

## Overall AI-assisted conclusion

The website has a useful beginner-friendly structure with five topic sections, explanations, visual summaries, audio controls, and quizzes. The main remaining quality checks are source-specific fact verification, accessibility testing, and human peer review. This AI-assisted review can support improvement, but it cannot replace real feedback from three peers.
