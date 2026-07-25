function Theory() {

  return (

    <div className="bg-white shadow-lg rounded-xl p-8 mt-8">

      <h2 className="text-3xl font-bold text-indigo-700 mb-6">
        🛡 Cross-Site Request Forgery (CSRF)
      </h2>

      <p className="text-gray-700 leading-8">

        Cross-Site Request Forgery (CSRF) is a web security vulnerability
        where an attacker tricks a logged-in user into performing an
        unwanted action on a trusted website.

      </p>

      {/* Overview */}

      <div className="mt-8 bg-indigo-50 p-6 rounded-lg">

        <h3 className="text-2xl font-bold text-indigo-700">
          What is CSRF?
        </h3>

        <p className="mt-4 text-gray-700">

          When a user logs into a website, the browser stores a session
          cookie. If the user later visits a malicious website, that site
          can force the browser to send requests to the trusted website
          using the stored cookie.

        </p>

      </div>

      {/* Attack Flow */}

      <div className="mt-8 bg-gray-100 p-6 rounded-lg">

        <h3 className="text-2xl font-bold mb-5">

          CSRF Attack Flow

        </h3>

        <div className="space-y-3 text-lg">

          <p>1️⃣ User logs into Bank Website.</p>

          <p>2️⃣ Browser stores Session Cookie.</p>

          <p>3️⃣ User visits Malicious Website.</p>

          <p>4️⃣ Malicious Website sends hidden request.</p>

          <p>5️⃣ Browser automatically sends Session Cookie.</p>

          <p>6️⃣ Bank processes request as if it came from the real user.</p>

        </div>

      </div>

      {/* Example */}

      <div className="mt-8 bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">

        <h3 className="text-2xl font-bold text-red-700">

          🚨 Example Attack

        </h3>

<pre className="mt-4 bg-black text-green-400 p-4 rounded-lg overflow-x-auto">
{`<form action="https://bank.com/transfer" method="POST">

<input type="hidden" name="amount" value="10000">

<input type="hidden" name="to" value="attacker">

<script>
document.forms[0].submit();
</script>

</form>`}
</pre>

        <p className="mt-4 text-gray-700">

          The victim never clicks anything, but the browser automatically
          sends the request.

        </p>

      </div>

      {/* Prevention */}

      <div className="mt-8 bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">

        <h3 className="text-2xl font-bold text-green-700">

          🛡 Prevention

        </h3>

        <ul className="list-disc pl-6 mt-4 space-y-2">

          <li>Use CSRF Tokens.</li>

          <li>Validate Origin and Referer headers.</li>

          <li>Enable SameSite Cookies.</li>

          <li>Use Secure and HttpOnly Cookies.</li>

          <li>Require user confirmation for sensitive actions.</li>

        </ul>

      </div>

      {/* Real World */}

      <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">

        <h3 className="text-2xl font-bold text-yellow-700">

          🌍 Real World Example

        </h3>

        <p className="mt-4 text-gray-700">

          Imagine you are logged into your online banking account.
          You open another website containing hidden malicious code.
          Without your knowledge, your browser sends a money transfer
          request to your bank because your session cookie is still valid.

        </p>

      </div>

    </div>

  );

}

export default Theory;