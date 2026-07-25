import Theory from "../components/xss/Theory";
import Practice from "../components/xss/Practice";
import CodeComparison from "../components/xss/CodeComparison";
import Prevention from "../components/xss/Prevention";
import Quiz from "../components/xss/Quiz";

function XSS() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white py-16">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Cross Site Scripting (XSS) Lab
          </h1>

          <p className="mt-5 text-xl">
            Learn how Cross Site Scripting (XSS) works, practice attacks in
            vulnerable mode, understand how secure coding prevents XSS,
            and test your knowledge.
          </p>

        </div>

      </section>

      {/* Theory */}
      <section className="max-w-7xl mx-auto py-10 px-6">
        <Theory />
      </section>

      {/* Practice */}
      <section className="max-w-7xl mx-auto py-10 px-6">
        <Practice />
      </section>

      {/* Code Comparison */}
      <section className="max-w-7xl mx-auto py-10 px-6">
        <CodeComparison />
      </section>

      {/* Prevention */}
      <section className="max-w-7xl mx-auto py-10 px-6">
        <Prevention />
      </section>

      {/* Quiz */}
      <section className="max-w-7xl mx-auto py-10 px-6 pb-20">
        <Quiz />
      </section>

    </div>
  );
}

export default XSS;