import Theory from "../components/sql/Theory";
import Practice from "../components/sql/Practice";
import Terminal from "../components/sql/Terminal";
import Database from "../components/sql/Database";
import Prevention from "../components/sql/Prevention";
import Quiz from "../components/sql/Quiz";

function SQLInjection() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-700 to-red-500 text-white py-16">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            SQL Injection Lab
          </h1>

          <p className="mt-5 text-xl">
            Learn how SQL Injection works, practice real attack scenarios,
            understand the database output, and master secure coding techniques.
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

      {/* Terminal */}
      <section className="max-w-7xl mx-auto py-10 px-6">
        <Terminal />
      </section>

      {/* Database */}
      <section className="max-w-7xl mx-auto py-10 px-6">
        <Database />
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

export default SQLInjection;