import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const sendMessage = async (e) => {

    e.preventDefault();

    setSuccess("");

    setError("");

    try {

      const response = await fetch("http://127.0.0.1:5000/contact", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(formData)

      });

      const data = await response.json();

      if (response.ok) {

        setSuccess("✅ Your message has been sent successfully.");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });

      } else {

        setError(data.message || "Failed to send message.");

      }

    }

    catch {

      setError("Server is not responding.");

    }

  };
    return (

    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-900 to-cyan-700 text-white py-24">

        <div className="max-w-6xl mx-auto text-center px-6">

          <h1 className="text-5xl font-bold">

            Contact Us

          </h1>

          <p className="mt-6 text-xl">

            Have questions? We'd love to hear from you.

          </p>

        </div>

      </section>

      {/* Contact Section */}

      <section className="max-w-7xl mx-auto py-20 px-6">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <div className="bg-white shadow-xl rounded-2xl p-10">

            <h2 className="text-3xl font-bold mb-8">

              Contact Information

            </h2>

            <div className="space-y-8">

              <div className="flex items-center gap-5">

                <FaEnvelope className="text-blue-600 text-3xl"/>

                <div>

                  <h3 className="font-bold">Email</h3>

                  <p className="text-gray-600">

                    support@vulnlab.com

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <FaPhoneAlt className="text-blue-600 text-3xl"/>

                <div>

                  <h3 className="font-bold">Phone</h3>

                  <p className="text-gray-600">

                    +91 98765 43210

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <FaMapMarkerAlt className="text-blue-600 text-3xl"/>

                <div>

                  <h3 className="font-bold">Address</h3>

                  <p className="text-gray-600">

                    Punjab, India

                  </p>

                </div>

              </div>

            </div>

          </div>
                    {/* Right */}

          <div className="bg-white shadow-xl rounded-2xl p-10">

            <h2 className="text-3xl font-bold mb-8">

              Send Message

            </h2>

            {success && (

              <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">

                {success}

              </div>

            )}

            {error && (

              <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">

                {error}

              </div>

            )}

            <form onSubmit={sendMessage} className="space-y-6">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border rounded-lg p-4"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border rounded-lg p-4"
                required
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full border rounded-lg p-4"
                required
              />

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full border rounded-lg p-4"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 font-semibold transition"
              >

                Send Message

              </button>

            </form>

          </div>
                  </div>

      </section>

    </div>

  );

}

export default Contact;