# AI Tools Comparison — CAPSTONE 14

## Task
Use the same Machine Learning text and prompt in four AI tools. Compare clarity, coverage, examples, audio-script suitability, visual-summary usefulness, and verification awareness.

## Common source for later fact-checking
MIT OpenCourseWare, 6.036 Introduction to Machine Learning (Fall 2020):
https://ocw.mit.edu/courses/6-036-introduction-to-machine-learning-fall-2020/

The course description gives the broad topic scope, including modelling and prediction, overfitting, generalization, supervised learning, and reinforcement learning. That alone does **not** verify every definition below. For a final accuracy check, consult the relevant lectures or readings.

## Common prompt used

> I am creating an AI Accessibility Study Aids project for students. Rewrite the following Machine Learning explanation in easy English without changing its meaning. Use short, simple sentences; explain technical words clearly; give one everyday example; create a short audio script of about 30 seconds; give a visual summary with four key points; list facts to check against the original; do not invent facts or claim the material has been verified.
>
> Text: Machine Learning is a branch of Artificial Intelligence that helps computers learn patterns from data and make predictions or decisions. Supervised learning uses examples with correct answers. Reinforcement learning learns through actions and rewards. Overfitting happens when a model learns its training examples too closely and performs poorly on new data. Generalization means performing well on new, unseen data.

---

## Tool 1 — Gemini (output provided by project owner)

### Summary
- Defines ML as learning data patterns to make choices or predictions.
- Explains supervised learning, reinforcement learning, overfitting, and generalization.
- Uses a driving-test analogy.
- Provides a roughly 67-word audio script, four visual-summary points, and facts to check.

### Human review
| Criterion | Assessment | Notes |
|---|---|---|
| Easy language | Good | Short definitions and a familiar analogy. |
| Key concepts | Good | All five main concepts appear in the explanation. |
| Everyday example | Useful, with an edit needed | “Drive safely on any new road” overstates generalization. A model's success on unseen data is not guaranteed. |
| Audio script | Suitable draft | Around 67 words; actual audio duration depends on the speech tool and pace. The output is a script, not an audio recording. |
| Four-point visual summary | Good | It includes ML, both learning styles, and overfitting/generalization. |
| Verification awareness | Good | It lists definitions to check against the source. |

### Recommended edit
Use “apply learned rules to a new situation” rather than “drive safely on any new road.” Prefer “may perform poorly on new data” to absolute wording such as “fails.”

---

## Tool 2 — ChatGPT (output provided by project owner)

### Summary
- Defines ML, data, and a model; explains supervised learning, reinforcement learning, overfitting, and generalization.
- Uses a cat-picture example.
- Provides a roughly 30-second script and four visual-summary points.
- Explicitly states its script is text, not a recording, and that the original source has not been independently checked.

### Human review
| Criterion | Assessment | Notes |
|---|---|---|
| Easy language | Good | Defines technical words with simple wording. |
| Key concepts | Good in explanation | All requested concepts appear in the explanation. |
| Everyday example | Good for some concepts | The cat-picture example shows supervised learning, overfitting, and generalization, but does not demonstrate reinforcement learning; the output notes this. |
| Audio script | Suitable draft | Written script only; actual duration should be timed after recording or text-to-speech. |
| Four-point visual summary | Needs a small improvement | It includes ML, supervised learning, overfitting, and generalization, but omits reinforcement learning from the visual summary. |
| Verification awareness | Good | It clearly says the source was not independently checked. |

### Recommended edit
For fuller coverage, make the second visual point “Supervised and reinforcement learning” and retain overfitting/generalization as a contrast point. Continue to say “may perform poorly” rather than implying failure is certain.

---

## Tool 3 — NotebookLM (output provided by project owner)

### Summary
- Explains ML as learning patterns in data for predictions or decisions.
- Defines AI, ML, supervised learning, reinforcement learning, overfitting, and generalization.
- Uses a maths-test analogy: an answer key for supervised learning, game rewards for reinforcement learning, and memorising versus understanding for overfitting/generalization.
- Provides a roughly 65-word audio script, a four-point visual summary, and source-check questions.
- States that the content is based on the text provided and has not been independently verified against external sources.

### Human review
| Criterion | Assessment | Notes |
|---|---|---|
| Easy language | Good | The explanation is clearly divided into short sections. |
| Key concepts | Good | All five requested concepts appear; definitions also cover AI and model-related language. |
| Everyday example | Good, with wording to soften | The maths-test example is familiar and covers both learning approaches. “Solve any new problem” is too absolute; use “solve many new problems.” |
| Audio script | Suitable draft | Around 65 words; it is written script text, not an audio recording. Actual playback duration depends on voice and speed. |
| Four-point visual summary | Good | It includes ML, supervised/reinforcement learning, overfitting, and generalization in four blocks. |
| Verification awareness | Good | It identifies missing topics and makes clear that independent source checking is still needed. |

### Recommended edit
Change “they can solve any new problem” to “they may solve new problems more successfully.” Keep the note that the cat/math examples are illustrations, not examples quoted from the original course.

---

## Tool 4 — Microsoft Copilot (output provided by project owner)

### Summary
- Defines ML as learning patterns in data to make predictions or choose actions.
- Explains AI, ML, supervised learning, reinforcement learning, overfitting, and generalization.
- Uses a maths-test analogy to explain the concepts.
- Supplies a short audio script, four visual-summary points, and a source-check list.

### Human review
| Criterion | Assessment | Notes |
|---|---|---|
| Easy language | Good | The definitions are direct and the student example is familiar. |
| Key concepts | Good | All requested concepts appear in the explanation. |
| Everyday example | Useful | The maths-test analogy covers answer keys, rewards, memorisation, and unseen questions. The reinforcement-learning analogy is simplified and should not imply every action is rewarded only when “good.” |
| Audio script | Suitable draft | Text script only, not an audio recording. Actual spoken duration should be checked after playback. |
| Four-point visual summary | Good | Includes ML, supervised learning, reinforcement learning, and the overfitting/generalization contrast. |
| Verification awareness | Good | Provides a checklist and identifies the added student example as illustrative. |

### Recommended edits
- Change “the computer learns to make better choices” to “the system adjusts its behaviour based on reward signals” if that level of precision suits the audience.
- Prefer “may perform poorly on new data” to absolute wording such as “fails on new data.”
- Independently check definitions against the relevant MIT lessons before calling the result verified.

## Side-by-side comparison

| Criterion | Gemini | ChatGPT | NotebookLM | Copilot |
|---|---|---|---|---|
| Easy English | Good | Good | Good | Good |
| Explains all key terms in main explanation | Yes | Yes | Yes | Yes |
| Everyday analogy | Driving-test analogy | Cat-picture example | Maths-test and game example | Maths-test and game example |
| Visual summary covers reinforcement learning | Yes | Not explicitly | Yes | Yes |
| Audio script supplied | Yes | Yes | Yes | Yes |
| Actual audio recording included in tool output | No; script only | No; script only | No; script only | No; script only |
| Lists source-check items | Yes | Yes | Yes | Yes |
| Explicitly states independent verification is still needed | Partly; asks for checks | Yes | Yes | Yes |
| Main edit recommended | Soften “any new road” claim | Include reinforcement learning in visual | Soften “any new problem” claim | Soften absolute “fails on new data” wording |

## Provisional conclusion
All four outputs are understandable beginner-level drafts and cover the main concepts in their explanation. Gemini, NotebookLM, and Copilot include reinforcement learning in the four-point visual summary; the ChatGPT visual summary needs one small revision for balanced coverage. Gemini's driving analogy and NotebookLM's “any new problem” claim should be softened because generalization does not guarantee success in every unseen situation. No tool output should be treated as source-verified until the relevant MIT lesson material is checked.

A reasonable draft to continue with is the NotebookLM or Copilot version after wording edits, because both use a maths-test analogy to illustrate the concepts and include reinforcement learning in the four-point visual summary. This is a qualitative judgement based on the supplied outputs, not a formal benchmark or proof of superior factual accuracy.

## Evidence and completion status
- Gemini output: supplied by the project owner and reviewed above.
- ChatGPT output: supplied by the project owner and reviewed above.
- NotebookLM output: supplied by the project owner and reviewed above.
- Microsoft Copilot output: supplied by the project owner and reviewed above.
- Four-tool text-output comparison: completed as an initial qualitative review of the supplied outputs.
- Independent fact-check against the relevant MIT lessons: still pending.
- Human peer feedback: still pending until comments are actually collected from three peers.
- Scores: no numerical scores assigned; a consistent rubric and source checking would be needed for defensible scoring.
