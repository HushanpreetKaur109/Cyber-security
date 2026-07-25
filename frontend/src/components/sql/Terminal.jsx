import { useState } from "react";

function Terminal() {

  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("");

  const runCommand = () => {

    const cmd = command.trim().toLowerCase();

    if (
      cmd === "' or '1'='1" ||
      cmd === "' or 1=1--" ||
      cmd === "admin'--"
    ) {

      setOutput(`
> Payload Accepted

[+] Authentication Bypassed
[+] Admin Access Granted
[+] SQL Injection Successful

⚠ This happened because the application
directly concatenated user input into
the SQL query.

Never do this in production.
      `);

    } else if (cmd === "help") {

      setOutput(`
Available Payloads

' OR '1'='1

' OR 1=1--

admin'--

Type any payload and press Execute.
      `);

    } else {

      setOutput(`
[-] Invalid Payload

Try:

help

or

' OR '1'='1
      `);

    }

  };

  return (

    <div className="bg-gray-900 rounded-xl shadow-xl p-8 mt-10">

      <h2 className="text-3xl font-bold text-green-400 mb-6">
        💻 SQL Injection Terminal
      </h2>

      <p className="text-gray-300 mb-5">
        Try common SQL Injection payloads.
      </p>

      <input

        value={command}

        onChange={(e) => setCommand(e.target.value)}

        placeholder="Type payload..."

        className="w-full bg-black text-green-400 border border-green-500 rounded-lg p-3 font-mono"

      />

      <button

        onClick={runCommand}

        className="mt-5 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"

      >

        Execute

      </button>

      {output && (

        <pre className="mt-6 bg-black text-green-400 p-6 rounded-lg overflow-x-auto whitespace-pre-wrap font-mono">

{output}

        </pre>

      )}

    </div>

  );

}

export default Terminal;