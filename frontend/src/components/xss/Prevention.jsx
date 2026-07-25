function Prevention() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">

      <h2 className="text-3xl font-bold text-green-600 mb-6">
        🛡 XSS Prevention
      </h2>

      <ul className="list-disc pl-8 space-y-4 text-gray-700">

        <li>Never trust user input.</li>

        <li>Validate all input.</li>

        <li>Escape HTML output before displaying it.</li>

        <li>Avoid using <strong>innerHTML</strong>.</li>

        <li>Use <strong>textContent</strong> whenever possible.</li>

        <li>Implement Content Security Policy (CSP).</li>

        <li>Sanitize user input using trusted libraries.</li>

      </ul>

    </div>
  );
}

export default Prevention;