document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const value = this.value.toLowerCase().trim();

      document.querySelectorAll(".searchable").forEach(item => {
        const text = item.textContent.toLowerCase();
        item.classList.toggle("hidden", !text.includes(value));
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const value = this.value.toLowerCase().trim();

      document.querySelectorAll(".searchable").forEach(item => {
        const text = item.textContent.toLowerCase();
        item.classList.toggle("hidden", !text.includes(value));
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const value = this.value.toLowerCase().trim();

      document.querySelectorAll(".searchable").forEach(item => {
        const text = item.textContent.toLowerCase();
        item.classList.toggle("hidden", !text.includes(value));
      });
    });
  }
});

function toggleTest(testId, button) {
  const allTests = document.querySelectorAll(".test-content");
  const allButtons = document.querySelectorAll(".toggle-btn");
  const currentTest = document.getElementById(testId);
  const isOpen = currentTest.classList.contains("open");

  allTests.forEach(test => test.classList.remove("open"));
  allButtons.forEach(btn => {
    btn.textContent = "Открыть тест";
  });

  if (!isOpen) {
    currentTest.classList.add("open");
    button.textContent = "Закрыть тест";
  }
}

function resetTest(resultId) {
  const result = document.getElementById(resultId);
  if (result) {
    result.style.display = "none";
    result.innerHTML = "";
  }
}

function checkAnswers(answers, resultId) {
  let score = 0;
  let total = Object.keys(answers).length;
  let answered = 0;

  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);

    if (selected) {
      answered++;
      if (selected.value === answers[key]) {
        score++;
      }
    }
  }

  if (answered < total) {
    alert("Ответь на все вопросы!");
    return;
  }

  const percent = Math.round((score / total) * 100);
  let grade = "";

  if (score === 10) {
    grade = "5";
  } else if (score >= 8) {
    grade = "4";
  } else if (score >= 6) {
    grade = "3";
  } else {
    grade = "2";
  }

  let message = `Результат: ${score} из ${total} (${percent}%). Оценка: ${grade}.`;

  if (score === total) {
    message = "Отлично! " + message;
  } else if (score >= total / 2) {
    message = "Хорошо! " + message;
  } else {
    message = "Попробуй ещё раз! " + message;
  }

  const result = document.getElementById(resultId);
  if (result) {
    result.style.display = "block";
    result.innerHTML = message;
  }
}

function checkTest1() {
  checkAnswers({
    test1_q1: "a",
    test1_q2: "b",
    test1_q3: "b",
    test1_q4: "a",
    test1_q5: "b",
    test1_q6: "c",
    test1_q7: "a",
    test1_q8: "a",
    test1_q9: "b",
    test1_q10: "a"
  }, "result1");
}

function checkTest2() {
  checkAnswers({
    test2_q1: "a",
    test2_q2: "b",
    test2_q3: "a",
    test2_q4: "a",
    test2_q5: "a",
    test2_q6: "a",
    test2_q7: "a",
    test2_q8: "a",
    test2_q9: "a",
    test2_q10: "a"
  }, "result2");
}

function checkTest3() {
  checkAnswers({
    test3_q1: "a",
    test3_q2: "a",
    test3_q3: "b",
    test3_q4: "a",
    test3_q5: "a",
    test3_q6: "b",
    test3_q7: "a",
    test3_q8: "a",
    test3_q9: "a",
    test3_q10: "a"
  }, "result3");
}

function checkTest4() {
  checkAnswers({
    test4_q1: "a",
    test4_q2: "b",
    test4_q3: "a",
    test4_q4: "a",
    test4_q5: "a",
    test4_q6: "a",
    test4_q7: "c",
    test4_q8: "a",
    test4_q9: "a",
    test4_q10: "a"
  }, "result4");
}

function checkTest5() {
  checkAnswers({
    test5_q1: "a",
    test5_q2: "a",
    test5_q3: "a",
    test5_q4: "a",
    test5_q5: "a",
    test5_q6: "a",
    test5_q7: "a",
    test5_q8: "a",
    test5_q9: "a",
    test5_q10: "a"
  }, "result5");
}

function checkTest6() {
  checkAnswers({
    test6_q1: "a",
    test6_q2: "a",
    test6_q3: "a",
    test6_q4: "b",
    test6_q5: "a",
    test6_q6: "a",
    test6_q7: "a",
    test6_q8: "a",
    test6_q9: "a",
    test6_q10: "a"
  }, "result6");
}