// HOME PAGE NAVIGATION
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (event) {
    const targetId = link.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, "", "#" + targetId);
      }
    }
  });
});


// AUDIO SCRIPTS FOR FIVE TOPICS
const lessons = {
  ml: "Machine learning is a part of artificial intelligence. It helps computers learn from data and make predictions. For example, an email system can learn to identify spam messages. In supervised learning, the computer learns from examples with correct answers. In reinforcement learning, it learns through actions and rewards. Overfitting happens when a model learns training examples too closely. Generalisation means using what it learned on new data.",

  nlp: "Natural Language Processing, or NLP, helps computers work with human language. It can process written text and spoken words. Translation apps, chatbots and voice assistants use NLP. Sentiment analysis estimates whether a message is positive, negative or neutral. Speech recognition changes spoken words into text. NLP can make mistakes when words have several meanings or context is unclear.",

  cv: "Computer Vision helps computers analyse images and videos. Image classification gives an image a label, such as cat or car. Object detection finds objects and shows where they are. Computer Vision can support photo search and driver assistance. Results can be affected by blurry pictures, poor lighting and limited training examples. Important decisions should be checked by people.",

  nn: "A neural network is a machine learning model made of connected mathematical units. The input layer receives data, hidden layers learn patterns, and the output layer gives a result. During training, the network compares its prediction with the correct target and adjusts its weights to reduce error. Neural networks can recognise images and process language, but they may need lots of data and their decisions are not always easy to explain.",

  genai: "Generative AI creates new content, such as text, pictures, audio and computer code. The user gives it a prompt, which tells the tool what to make. It can draft simple study notes. However, generated content can include incorrect facts or bias. Always check important information against reliable sources and ask a person to review the result."
};


// PLAY AUDIO
function speakTopic(topic) {
  const status = document.getElementById("audio-status-" + topic);

  if (
    !("speechSynthesis" in window) ||
    !("SpeechSynthesisUtterance" in window)
  ) {
    if (status) {
      status.textContent =
        "Audio is not supported in this browser. Try Chrome or Safari.";
    }
    return;
  }

  if (!lessons[topic]) {
    if (status) {
      status.textContent = "Audio script not found.";
    }
    return;
  }

  // Stop any previous speech
  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(lessons[topic]);

  speech.lang = "en-US";
  speech.rate = 0.9;
  speech.pitch = 1;
  speech.volume = 1;

  speech.onstart = function () {
    if (status) {
      status.textContent = "Audio is playing...";
    }
  };

  speech.onend = function () {
    if (status) {
      status.textContent = "Audio finished.";
    }
  };

  speech.onerror = function (event) {
    if (status) {
      status.textContent =
        "Audio error: " + event.error +
        ". Check your Mac volume and try again.";
    }
  };

  if (status) {
    status.textContent = "Preparing audio...";
  }

  window.speechSynthesis.resume();
  window.speechSynthesis.speak(speech);
}


// STOP AUDIO
function stopAudio() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  document.querySelectorAll('[id^="audio-status-"]').forEach(function (status) {
    status.textContent = "Audio stopped.";
  });
}


// QUIZ ANSWERS
const answers = {
  ml: ["b", "a"],
  nlp: ["b", "a"],
  cv: ["a", "a"],
  nn: ["b", "a"],
  genai: ["a", "a"]
};


// CHECK QUIZ ANSWERS
document.querySelectorAll(".quiz").forEach(function (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const topic = form.dataset.topic;
    const correctAnswers = answers[topic];

    if (!correctAnswers) {
      return;
    }

    let score = 0;
    let unanswered = false;

    for (let i = 0; i < correctAnswers.length; i++) {
      const questionName = topic + "q" + (i + 1);

      const selected = form.querySelector(
        'input[name="' + questionName + '"]:checked'
      );

      if (!selected) {
        unanswered = true;
      } else if (selected.value === correctAnswers[i]) {
        score++;
      }
    }

    const result = form.querySelector(".result");

    if (unanswered) {
      result.textContent = "Please answer all questions first.";
      return;
    }

    result.textContent =
      "Your score: " + score + " / " + correctAnswers.length +
      (score === correctAnswers.length
        ? " — Excellent! All answers are correct!"
        : " — Review the notes and try again!");
  });
});