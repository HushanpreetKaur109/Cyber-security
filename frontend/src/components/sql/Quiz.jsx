import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Quiz() {

  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const [showComplete, setShowComplete] = useState(false);

  const checkAnswer = (answer) => {

    if (answer === "Prepared Statements") {

      setMessage("✅ Correct! Great Job.");

      setShowComplete(true);

    }

    else {

      setMessage("❌ Wrong Answer. Try Again.");

      setShowComplete(false);

    }

  };

  const completeLab = async () => {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {

      alert("Please login first.");

      return;

    }

    try {

      const response = await fetch(
        "http://127.0.0.1:5000/complete_lab",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({

            user_id: user.id,

            lab_name: "SQL Injection"

          }),

        }
      );

      const data = await response.json();

      if (data.success) {

        alert("🎉 SQL Injection Lab Completed!");

        navigate("/dashboard");

      }

      else {

        alert(data.message);

      }

    }

    catch (error) {

      console.log(error);

      alert("Unable to connect to server.");

    }

  };

  return (

    <section className="max-w-5xl mx-auto py-20 px-6">

      <div className="bg-gray-900 rounded-2xl border border-blue-500 p-10">

        <h2 className="text-4xl font-bold text-blue-400">

          📝 SQL Injection Quiz

        </h2>

        <p className="text-gray-300 mt-8 text-xl">

          Which is the best defense against SQL Injection?

        </p>
                <div className="mt-10 space-y-5">

          <button
            onClick={() => checkAnswer("Cookies")}
            className="w-full bg-gray-800 hover:bg-blue-700 text-white py-4 rounded-lg transition"
          >
            Cookies
          </button>

          <button
            onClick={() => checkAnswer("Prepared Statements")}
            className="w-full bg-gray-800 hover:bg-blue-700 text-white py-4 rounded-lg transition"
          >
            Prepared Statements
          </button>

          <button
            onClick={() => checkAnswer("CSS")}
            className="w-full bg-gray-800 hover:bg-blue-700 text-white py-4 rounded-lg transition"
          >
            CSS
          </button>

          <button
            onClick={() => checkAnswer("HTML")}
            className="w-full bg-gray-800 hover:bg-blue-700 text-white py-4 rounded-lg transition"
          >
            HTML
          </button>

        </div>

        {message && (

          <div className="mt-8 text-center">

            <h3 className="text-2xl font-bold text-yellow-400">

              {message}

            </h3>

          </div>

        )}
                {showComplete && (

          <div className="mt-10 text-center">

            <button

              onClick={completeLab}

              className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-lg text-lg font-bold transition"

            >

              ✅ Complete Lab

            </button>

          </div>

        )}

      </div>

    </section>

  );

}

export default Quiz;