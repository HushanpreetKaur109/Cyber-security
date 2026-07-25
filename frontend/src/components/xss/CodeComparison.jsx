function CodeComparison() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">

      <h2 className="text-3xl font-bold text-blue-600 mb-8">
        💻 Vulnerable vs Secure Code
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div>

          <h3 className="text-xl font-bold text-red-600 mb-4">
            ❌ Vulnerable Code
          </h3>

          <pre className="bg-gray-900 text-red-400 p-5 rounded-lg overflow-auto">
{`const comment = userInput;

document.getElementById("output").innerHTML = comment;`}
          </pre>

        </div>

        <div>

          <h3 className="text-xl font-bold text-green-600 mb-4">
            ✅ Secure Code
          </h3>

          <pre className="bg-gray-900 text-green-400 p-5 rounded-lg overflow-auto">
{`const comment = userInput;

document.getElementById("output").textContent = comment;`}
          </pre>

        </div>

      </div>

    </div>
  );
}

export default CodeComparison;