import Theory from "../components/fileupload/Theory";
import Practice from "../components/fileupload/Practice";
import Quiz from "../components/fileupload/Quiz";

function FileUpload() {

  return (

    <div className="min-h-screen bg-gray-100">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-5xl font-bold text-center text-orange-700 mb-10">

          📁 File Upload Vulnerability Lab

        </h1>

        <Theory />

        <Practice />

        <Quiz />

      </div>

    </div>

  );

}

export default FileUpload;