function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-bold text-blue-400">
            VulnLab
          </h2>

          <p className="mt-4 text-gray-300 leading-7">
            VulnLab is a cybersecurity learning platform where students can
            practice web vulnerabilities safely and improve their secure coding
            skills.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>
              <a href="#" className="hover:text-blue-400">Home</a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-400">About</a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-400">Labs</a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-400">Contact</a>
            </li>
          </ul>
        </div>

        {/* Popular Labs */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Popular Labs
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>SQL Injection</li>
            <li>Cross Site Scripting</li>
            <li>JWT Authentication</li>
            <li>CSRF</li>
            <li>File Upload</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p className="text-gray-300">
            📧 support@vulnlab.com
          </p>

          <p className="text-gray-300 mt-3">
            📞 +91 98765 43210
          </p>

          <p className="text-gray-300 mt-3">
            📍 Punjab, India
          </p>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">

        © 2026 <span className="text-blue-400 font-semibold">VulnLab</span>.
        All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;