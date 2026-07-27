import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Quiz() {

  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [showComplete, setShowComplete] = useState(false);

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

          "Content-Type": "application/json",

        },

        body: JSON.stringify({

          user_id: user.id,

          lab_name: "XSS"

        })

      });
       const data = await response.json();

    if (data.success) {

      alert("🎉 XSS Lab Completed!");

      navigate("/dashboard");

    } else {

      alert(data.message);

    }

  } catch (error) {

    alert("Unable to connect to server.");

  }
  };

  function checkAnswer(answer) {

    if (answer === "textContent") {

      setMessage("✅ Correct! Great Job.");

      setShowComplete(true);

    } else {

      setMessage("❌ Wrong Answer. Try Again.");

      setShowComplete(false);

    }

  }

  return (

    <div className="bg-white rounded-xl shadow-lg p-8">

      <h2 className="text-3xl font-bold text-blue-600 mb-6">

        📝 XSS Quiz

      </h2>

      <p className="text-xl mb-8">

        Which method is safer against Cross Site Scripting (XSS)?

      </p>

      <div className="space-y-4">

        <button
          onClick={() => checkAnswer("innerHTML")}
          className="w-full bg-gray-800 hover:bg-blue-700 text-white py-4 rounded-lg"
        >
          innerHTML
        </button>

        <button
          onClick={() => checkAnswer("textContent")}
          className="w-full bg-gray-800 hover:bg-blue-700 text-white py-4 rounded-lg"
        >
          textContent
        </button>

        <button
          onClick={() => checkAnswer("document.write")}
          className="w-full bg-gray-800 hover:bg-blue-700 text-white py-4 rounded-lg"
        >
          document.write()
        </button>

        <button
          onClick={() => checkAnswer("alert")}
          className="w-full bg-gray-800 hover:bg-blue-700 text-white py-4 rounded-lg"
        >
          alert()
        </button>

      </div>

      {message && (

        <div className="mt-8 text-center">

          <h3 className="text-2xl font-bold text-yellow-500">

            {message}

          </h3>

        </div>

      )}

      {showComplete && (

        <div className="mt-10 text-center">

          <button  

          onClick={completeLab}

            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-bold"
          >
            ✅ Complete XSS Quiz
          </button>

        </div>

      )}

    </div>

  );

}

export default Quiz;