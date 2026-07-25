import { useState } from "react";

function Quiz() {

  const questions = [

    {
      question: "1. What does CSRF stand for?",
      options: [
        "Cross Site Request Forgery",
        "Cross Server Request Function",
        "Client Side Request Forgery",
        "Cross Script Rendering Function"
      ],
      answer: "Cross Site Request Forgery"
    },

    {
      question: "2. What is the main purpose of a CSRF attack?",
      options: [
        "Execute SQL queries",
        "Force a logged-in user to perform unwanted actions",
        "Steal passwords directly",
        "Crash the server"
      ],
      answer: "Force a logged-in user to perform unwanted actions"
    },

    {
      question: "3. Which HTTP methods are commonly targeted by CSRF attacks?",
      options: [
        "GET only",
        "POST, PUT and DELETE",
        "OPTIONS only",
        "HEAD only"
      ],
      answer: "POST, PUT and DELETE"
    },

    {
      question: "4. Which security mechanism prevents CSRF attacks?",
      options: [
        "CSRF Token",
        "SQL Query",
        "JWT Payload",
        "JavaScript Alert"
      ],
      answer: "CSRF Token"
    },

    {
      question: "5. Why are CSRF attacks successful?",
      options: [
        "Browser automatically sends session cookies",
        "Database is offline",
        "Server is slow",
        "Firewall is disabled"
      ],
      answer: "Browser automatically sends session cookies"
    },

    {
      question: "6. Which header can help protect against CSRF?",
      options: [
        "Origin / Referer",
        "Accept",
        "Host",
        "Cache-Control"
      ],
      answer: "Origin / Referer"
    },

    {
      question: "7. Which cookie attribute helps reduce CSRF attacks?",
      options: [
        "SameSite",
        "HttpOnly",
        "Secure",
        "Expires"
      ],
      answer: "SameSite"
    },

    {
      question: "8. Which framework feature is commonly used against CSRF?",
      options: [
        "Built-in CSRF middleware",
        "Console.log()",
        "HTML comments",
        "CSS Styling"
      ],
      answer: "Built-in CSRF middleware"
    },

    {
      question: "9. A CSRF attack usually requires the victim to:",
      options: [
        "Be logged into the website",
        "Know SQL",
        "Disable JavaScript",
        "Restart the browser"
      ],
      answer: "Be logged into the website"
    },

    {
      question: "10. Which is the best defense against CSRF?",
      options: [
        "Strong CSRF Tokens",
        "Bigger database",
        "Long URLs",
        "Changing CSS"
      ],
      answer: "Strong CSRF Tokens"
    }

  ];

  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [showComplete, setShowComplete] = useState(false);

  const handleChange = (index, value) => {

    setAnswers({
      ...answers,
      [index]: value
    });

  };

  const submitQuiz = () => {

    let marks = 0;

    questions.forEach((q, index) => {

      if (answers[index] === q.answer) {

        marks++;

      }

    });

    setScore(marks);

    if (marks >= 7) {

      setShowComplete(true);

    } else {

      setShowComplete(false);

    }

  };

  const completeLab = async () => {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {

      alert("Please login first.");

      return;

    }

    const response = await fetch("http://127.0.0.1:5000/complete_lab", {

      method: "POST",

      headers: {

        "Content-Type": "application/json"

      },

      body: JSON.stringify({

        user_id: user.id,

        lab_name: "CSRF"

      })

    });

    const data = await response.json();

    if (data.success) {

      alert("🎉 CSRF Lab Completed!");

      window.location.href = "/dashboard";

    }

  };

  return (

    <div className="bg-white rounded-xl shadow-lg p-8 mt-8">

      <h2 className="text-3xl font-bold text-indigo-700 mb-8">

        📝 CSRF Quiz

      </h2>

      {questions.map((q, index) => (

        <div key={index} className="mb-8">

          <h3 className="font-bold text-lg mb-3">

            {q.question}

          </h3>

          {q.options.map((option) => (

            <label key={option} className="block mb-2">

              <input

                type="radio"

                name={`question${index}`}

                value={option}

                onChange={(e) =>
                  handleChange(index, e.target.value)
                }

                className="mr-2"

              />

              {option}

            </label>

          ))}

        </div>

      ))}

      <button

        onClick={submitQuiz}

        className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-3 rounded-lg"

      >

        Submit Quiz

      </button>

      {score !== null && (

        <div className="mt-8">

          <h3 className="text-2xl font-bold">

            Score: {score} / 10

          </h3>

          <p className="mt-3">

            {score >= 7
              ? "✅ Congratulations! You passed the quiz."
              : "❌ You need at least 7/10 to pass."
            }

          </p>

        </div>

      )}

      {showComplete && (

        <div className="mt-8 text-center">

          <button

            onClick={completeLab}

            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-bold"

          >

            ✅ Complete CSRF Lab

          </button>

        </div>

      )}

    </div>

  );

}

export default Quiz;