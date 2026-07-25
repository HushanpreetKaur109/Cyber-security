import { useState } from "react";

function Quiz() {

  const questions = [

    {
      question: "1. What does JWT stand for?",
      options: [
        "Java Web Token",
        "JSON Web Token",
        "JavaScript Web Transfer",
        "JSON Website Token"
      ],
      answer: "JSON Web Token"
    },

    {
      question: "2. Which part of JWT verifies that the token has not been modified?",
      options: [
        "Header",
        "Payload",
        "Signature",
        "Claims"
      ],
      answer: "Signature"
    },

    {
      question: "3. Which algorithm should never be accepted without verification?",
      options: [
        "HS256",
        "RS256",
        "alg: none",
        "SHA256"
      ],
      answer: "alg: none"
    },

    {
      question: "4. What is the purpose of the Payload?",
      options: [
        "Store user claims",
        "Store passwords",
        "Encrypt files",
        "Verify signature"
      ],
      answer: "Store user claims"
    },

    {
      question: "5. What is the best defense against JWT tampering?",
      options: [
        "Hide the token",
        "Verify the JWT signature",
        "Increase token length",
        "Encode the password"
      ],
      answer: "Verify the JWT signature"
    }

  ];

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleChange = (index, option) => {

    setAnswers({

      ...answers,

      [index]: option

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

    setSubmitted(true);

  };

  return (

    <div className="bg-white rounded-xl shadow-lg p-8 mt-10">

      <h2 className="text-3xl font-bold text-purple-700 mb-8">

        📝 JWT Quiz

      </h2>

      {questions.map((q, index) => (

        <div key={index} className="mb-8">

          <h3 className="font-bold text-xl mb-4">

            {q.question}

          </h3>

          {q.options.map((option) => (

            <label
              key={option}
              className="block bg-gray-100 rounded-lg p-3 mb-2 cursor-pointer hover:bg-purple-100"
            >

              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                checked={answers[index] === option}
                onChange={() => handleChange(index, option)}
                className="mr-3"
              />

              {option}

            </label>

          ))}

        </div>

      ))}

      {!submitted ? (

        <button

          onClick={submitQuiz}

          className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-lg font-bold"

        >

          Submit Quiz

        </button>

      ) : (

        <div className="mt-8">

          <h3 className="text-2xl font-bold">

            Score: {score} / {questions.length}

          </h3>

          {score >= 4 ? (

            <div className="mt-6 bg-green-100 border-l-4 border-green-600 p-6 rounded-lg">

              <h3 className="text-2xl font-bold text-green-700">

                🎉 Congratulations!

              </h3>

              <p className="mt-2">

                You passed the JWT Quiz.

              </p>

            </div>

          ) : (

            <div className="mt-6 bg-red-100 border-l-4 border-red-600 p-6 rounded-lg">

              <h3 className="text-2xl font-bold text-red-700">

                ❌ Quiz Failed

              </h3>

              <p className="mt-2">

                Score at least 4 out of 5 to pass.

              </p>

            </div>

          )}

        </div>

      )}

    </div>

  );

}

export default Quiz;