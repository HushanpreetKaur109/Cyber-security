import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Quiz() {

  const questions = [

    {
      question: "1. What is a File Upload Vulnerability?",
      options: [
        "Uploading images only",
        "Uploading files without proper validation",
        "Downloading files",
        "Encrypting files"
      ],
      answer: "Uploading files without proper validation"
    },

    {
      question: "2. Which file is the most dangerous?",
      options: [
        "image.jpg",
        "notes.txt",
        "shell.php",
        "logo.png"
      ],
      answer: "shell.php"
    },

    {
      question: "3. Which validation should be performed?",
      options: [
        "File Extension",
        "MIME Type",
        "File Size",
        "All of these"
      ],
      answer: "All of these"
    },

    {
      question: "4. What can happen if executable files are uploaded?",
      options: [
        "Nothing",
        "Server compromise",
        "Website becomes faster",
        "File compression"
      ],
      answer: "Server compromise"
    },

    {
      question: "5. Which extension is commonly used for PHP web shells?",
      options: [
        ".jpg",
        ".pdf",
        ".php",
        ".png"
      ],
      answer: ".php"
    },

    {
      question: "6. What is MIME Type validation used for?",
      options: [
        "Checking actual file type",
        "Changing file name",
        "Compressing file",
        "Deleting file"
      ],
      answer: "Checking actual file type"
    },

    {
      question: "7. Where should uploaded files be stored?",
      options: [
        "Inside web root",
        "Outside web root",
        "Desktop",
        "Browser Cache"
      ],
      answer: "Outside web root"
    },

    {
      question: "8. Which is a good security practice?",
      options: [
        "Allow every file",
        "Rename uploaded files",
        "Disable validation",
        "Store executable files"
      ],
      answer: "Rename uploaded files"
    },

    {
      question: "9. Which attack can result from unrestricted upload?",
      options: [
        "Remote Code Execution",
        "Faster Login",
        "Better UI",
        "Session Timeout"
      ],
      answer: "Remote Code Execution"
    },

    {
      question: "10. Which files should normally be allowed?",
      options: [
        "PHP",
        "EXE",
        "Images and PDFs",
        "BAT"
      ],
      answer: "Images and PDFs"
    }

  ];

  const navigate = useNavigate();

  const [score, setScore] = useState(0);

  const [current, setCurrent] = useState(0);

  const [finished, setFinished] = useState(false);

  const checkAnswer = (option) => {

    let newScore = score;

    if (option === questions[current].answer) {

      newScore++;

      setScore(newScore);

    }

    if (current + 1 < questions.length) {

      setCurrent(current + 1);

    }

    else {

      setFinished(true);

    }

  };

  const completeLab = async () => {

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Please login first.");
    return;
  }

  try {

    const response = await fetch("http://127.0.0.1:5000/complete_lab", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({

        user_id: user.id,
        lab_name: "File Upload"

      })

    });

    const data = await response.json();

    if (data.success) {

      alert("🎉 File Upload Lab Completed!");

      navigate("/dashboard");

    } else {

      alert(data.message);

    }

  } catch (error) {

    console.log(error);

    alert("Unable to connect to server.");

  }

};

  return (

    <div className="bg-white rounded-xl shadow-lg p-8 mt-8">

      <h2 className="text-3xl font-bold text-orange-700 mb-6">

        📝 File Upload Quiz

      </h2>

      {!finished ? (

        <>

          <h3 className="text-xl font-bold mb-6">

            {questions[current].question}

          </h3>

          <div className="space-y-4">

            {questions[current].options.map((option) => (

              <button

                key={option}

                onClick={() => checkAnswer(option)}

                className="w-full text-left bg-gray-100 hover:bg-orange-100 p-4 rounded-lg"

              >

                {option}

              </button>

            ))}

          </div>

          <p className="mt-8 text-gray-500">

            Question {current + 1} of {questions.length}

          </p>

        </>

      ) : (

        <div className="text-center">

          <h2 className="text-4xl font-bold text-green-600">

            Quiz Completed 🎉

          </h2>

          <p className="mt-6 text-2xl">

            Your Score

          </p>

          <p className="text-5xl font-bold mt-3">

            {score} / {questions.length}

          </p>

          {score >= 7 ? (

            <div className="mt-8">

              <h3 className="text-3xl font-bold text-green-700">

                ✅ Congratulations!

              </h3>

              <p className="mt-3">

                You passed the File Upload Quiz.

              </p>
              <button
               onClick={completeLab}

      className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-bold"

    >

      ✅ Complete Lab

    </button>

  </div>

) : (  

      

            <div className="mt-8">

              <h3 className="text-3xl font-bold text-red-700">

                ❌ Failed

              </h3>

              <p className="mt-3">

                Score at least 7/10 to pass.

              </p>

            </div>

          )}

        </div>

      )}

    </div>

  );

}

export default Quiz;