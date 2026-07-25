function Theory() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">

      <h2 className="text-3xl font-bold text-blue-600 mb-6">
        📖 What is Cross Site Scripting (XSS)?
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        Cross Site Scripting (XSS) is a web security vulnerability that allows
        an attacker to inject malicious JavaScript into a web page viewed by
        other users. The browser executes the malicious script because it
        trusts the vulnerable website.
      </p>

      <h3 className="text-2xl font-bold text-blue-500 mb-4">
        Types of XSS
      </h3>

      <ul className="list-disc pl-8 text-gray-700 space-y-3">

        <li>
          <strong>Stored XSS</strong> – Malicious script is permanently stored
          on the server (database, comments, profile, etc.).
        </li>

        <li>
          <strong>Reflected XSS</strong> – Script is reflected from the server
          through a request such as a URL parameter.
        </li>

        <li>
          <strong>DOM-Based XSS</strong> – The vulnerability exists entirely
          in client-side JavaScript without server interaction.
        </li>

      </ul>

      <h3 className="text-2xl font-bold text-blue-500 mt-8 mb-4">
        Example Payload
      </h3>

      <div className="bg-gray-900 text-green-400 rounded-lg p-5 font-mono">
        {"<script>alert('XSS')</script>"}
      </div>

      <h3 className="text-2xl font-bold text-blue-500 mt-8 mb-4">
        Impact of XSS
      </h3>

      <ul className="list-disc pl-8 text-gray-700 space-y-3">

        <li>Steal user cookies and session tokens</li>

        <li>Hijack user accounts</li>

        <li>Modify website content</li>

        <li>Redirect users to phishing websites</li>

        <li>Execute malicious JavaScript in the victim's browser</li>

      </ul>

    </div>
  );
}

export default Theory;