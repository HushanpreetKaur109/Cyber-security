import { useState } from "react";
import { Link } from "react-router-dom";
import CryptoJS from "crypto-js";

function HashGenerator() {

  const [text, setText] = useState("");

  const [md5Hash, setMd5Hash] = useState("");

  const [sha256Hash, setSha256Hash] = useState("");

  const generateHashes = () => {

    if (!text.trim()) {

      alert("Please enter some text.");

      return;

    }

    const md5 = CryptoJS.MD5(text).toString();

    const sha256 = CryptoJS.SHA256(text).toString();

    setMd5Hash(md5);

    setSha256Hash(sha256);

  };

  const clearData = () => {

    setText("");

    setMd5Hash("");

    setSha256Hash("");

  };

  const copyText = (value) => {

    navigator.clipboard.writeText(value);

    alert("Copied Successfully!");

  };
    return (

    <div className="min-h-screen bg-gray-100 py-12">

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-10">

        <Link
          to="/toolkit"
          className="text-blue-600 font-bold hover:underline"
        >
          ← Back to Toolkit
        </Link>

        <h1 className="text-4xl font-bold text-center text-blue-700 mt-6">

          🔑 Hash Generator

        </h1>

        <p className="text-center text-gray-600 mt-4">

          Generate MD5 and SHA-256 hashes from any text.

        </p>

        <textarea

          value={text}

          onChange={(e) => setText(e.target.value)}

          placeholder="Enter any text..."

          rows="6"

          className="w-full mt-8 border-2 border-gray-300 rounded-lg p-4 text-lg outline-none focus:border-blue-600"

        ></textarea>

        <div className="flex gap-4 mt-8">

          <button

            onClick={generateHashes}

            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold"

          >

            Generate Hash

          </button>

          <button

            onClick={clearData}

            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold"

          >

            Clear

          </button>

        </div>
                {(md5Hash || sha256Hash) && (

          <div className="mt-10 space-y-8">

            {/* MD5 */}

            <div className="bg-gray-50 border rounded-xl p-6">

              <div className="flex justify-between items-center">

                <h2 className="text-2xl font-bold text-blue-700">

                  MD5 Hash

                </h2>

                <button

                  onClick={() => copyText(md5Hash)}

                  className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"

                >

                  📋 Copy

                </button>

              </div>

              <p className="mt-4 break-all bg-white p-4 rounded border font-mono">

                {md5Hash}

              </p>

            </div>

            {/* SHA-256 */}

            <div className="bg-gray-50 border rounded-xl p-6">

              <div className="flex justify-between items-center">

                <h2 className="text-2xl font-bold text-blue-700">

                  SHA-256 Hash

                </h2>

                <button

                  onClick={() => copyText(sha256Hash)}

                  className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"

                >

                  📋 Copy

                </button>

              </div>

              <p className="mt-4 break-all bg-white p-4 rounded border font-mono">

                {sha256Hash}

              </p>

            </div>

          </div>

        )}
                {/* Information */}

        <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">

          <h2 className="text-2xl font-bold text-blue-700">

            🛡 About Hashing

          </h2>

          <p className="mt-4 text-gray-700 leading-8">

            Hashing is a one-way cryptographic process that converts data
            into a fixed-length value called a hash. Unlike encryption,
            hashing cannot be reversed to recover the original text.

          </p>

          <div className="mt-6">

            <h3 className="text-xl font-bold text-green-700">

              🔑 MD5

            </h3>

            <p className="mt-2 text-gray-700">

              MD5 produces a 128-bit hash. It is fast but no longer
              considered secure because attackers can create collisions.
              It should not be used for storing passwords.

            </p>

          </div>

          <div className="mt-6">

            <h3 className="text-xl font-bold text-purple-700">

              🔐 SHA-256

            </h3>

            <p className="mt-2 text-gray-700">

              SHA-256 generates a 256-bit hash and is much more secure
              than MD5. It is widely used for digital signatures,
              blockchain, file integrity verification and cybersecurity
              applications.

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default HashGenerator;