import Navbar from "../components/Navbar";
import Theory from "../components/csrf/Theory";
import Practice from "../components/csrf/Practice";
import Quiz from "../components/csrf/Quiz";
import Footer from "../components/Footer";

function CSRF() {

  return (

    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Page Heading */}

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">

          <h1 className="text-4xl font-bold text-indigo-700">

            🛡 Cross-Site Request Forgery (CSRF)

          </h1>

          <p className="mt-4 text-gray-600 text-lg">

            Learn how Cross-Site Request Forgery attacks work,
            practice exploiting a vulnerable application,
            and understand how CSRF tokens protect web applications.

          </p>

        </div>

        {/* Theory */}

        <Theory />

        {/* Practice */}

        <Practice />

        {/* Quiz */}

        <Quiz />

      </div>

      <Footer />

    </div>

  );

}

export default CSRF;