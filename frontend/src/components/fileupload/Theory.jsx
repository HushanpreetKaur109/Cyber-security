function Theory() {

  return (

    <div className="bg-white rounded-xl shadow-lg p-8 mt-8">

      <h2 className="text-3xl font-bold text-orange-700 mb-6">

        📁 File Upload Vulnerability Theory

      </h2>

      <p className="text-gray-700 leading-8">

        File Upload Vulnerability occurs when a web application allows users
        to upload files without proper validation. Attackers can upload
        malicious files such as PHP web shells, executables or scripts
        and gain control over the server.

      </p>

      {/* How Attack Works */}

      <div className="mt-8 bg-red-50 rounded-lg p-6">

        <h3 className="text-2xl font-bold text-red-700">

          🚨 How the Attack Works

        </h3>

        <div className="space-y-4 mt-5">

          <p>1️⃣ User uploads a file.</p>

          <p>2️⃣ Server accepts every file.</p>

          <p>3️⃣ Attacker uploads shell.php.</p>

          <p>4️⃣ Server stores the file.</p>

          <p>5️⃣ Attacker executes the shell remotely.</p>

          <p>6️⃣ Server becomes compromised.</p>

        </div>

      </div>

      {/* Dangerous Files */}

      <div className="mt-8 bg-yellow-50 rounded-lg p-6">

        <h3 className="text-2xl font-bold text-yellow-700">

          Dangerous File Types

        </h3>

        <table className="w-full mt-5 border">

          <thead>

            <tr className="bg-gray-200">

              <th className="border p-3">File</th>

              <th className="border p-3">Risk</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td className="border p-3">shell.php</td>

              <td className="border p-3">Remote Code Execution</td>

            </tr>

            <tr>

              <td className="border p-3">backdoor.php</td>

              <td className="border p-3">Backdoor Access</td>

            </tr>

            <tr>

              <td className="border p-3">malware.exe</td>

              <td className="border p-3">Malware</td>

            </tr>

            <tr>

              <td className="border p-3">script.js</td>

              <td className="border p-3">Malicious Script</td>

            </tr>

          </tbody>

        </table>

      </div>

      {/* Prevention */}

      <div className="mt-8 bg-green-50 rounded-lg p-6">

        <h3 className="text-2xl font-bold text-green-700">

          🛡 Prevention

        </h3>

        <ul className="list-disc pl-8 mt-4 space-y-3">

          <li>Allow only trusted file extensions.</li>

          <li>Validate MIME Type.</li>

          <li>Rename uploaded files.</li>

          <li>Store uploads outside the web root.</li>

          <li>Limit maximum file size.</li>

          <li>Scan uploaded files using antivirus.</li>

          <li>Block executable file types.</li>

        </ul>

      </div>

    </div>

  );

}

export default Theory;