import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Certificate() {

  const navigate = useNavigate();

  const certificateRef = useRef(null);

  const [user, setUser] = useState(null);

  useEffect(() => {

    const loggedUser = JSON.parse(localStorage.getItem("user"));

    if (!loggedUser) {

      navigate("/login");

      return;

    }

    setUser(loggedUser);

  }, [navigate]);

  const today = new Date().toLocaleDateString();

  const certificateId =
    "VL-" +
    new Date().getFullYear() +
    "-" +
    Math.floor(100000 + Math.random() * 900000);

  const downloadCertificate = async () => {

    const element = certificateRef.current;

    const canvas = await html2canvas(element, {

      scale: 2,

      backgroundColor: "#ffffff",

      useCORS: true

    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({

      orientation: "landscape",

      unit: "px",

      format: [canvas.width, canvas.height]

    });

    pdf.addImage(

      imgData,

      "PNG",

      0,

      0,

      canvas.width,

      canvas.height

    );

    pdf.save(`${user.fullname}_Certificate.pdf`);

  };

  const shareCertificate = async () => {

    if (navigator.share) {

      await navigator.share({

        title: "VulnLab Certificate",

        text: `${user.fullname} successfully completed VulnLab Cybersecurity Training.`

      });

    }

    else {

      alert("Sharing is not supported on this browser.");

    }

  };

  if (!user) return null;

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#fef9c3",
        padding: "50px"
      }}
    >

      <div className="max-w-5xl mx-auto">

        <div

          ref={certificateRef}

          style={{

            background: "#ffffff",

            border: "14px solid #eab308",

            borderRadius: "20px",

            padding: "50px"

          }}

        >
                   <div className="text-center">

            <h1
              style={{
                fontSize: "70px"
              }}
            >
              🛡️
            </h1>

            <h2
              style={{
                fontSize: "52px",
                color: "#a16207",
                fontWeight: "bold",
                letterSpacing: "3px"
              }}
            >
              CERTIFICATE
            </h2>

            <h3
              style={{
                fontSize: "34px",
                color: "#444",
                marginTop: "10px"
              }}
            >
              OF COMPLETION
            </h3>

          </div>

          <hr
            style={{
              marginTop: "40px",
              marginBottom: "40px",
              border: "2px solid #eab308"
            }}
          />

          <div className="text-center">

            <p
              style={{
                fontSize: "22px",
                color: "#555"
              }}
            >
              This Certificate is Proudly Presented To
            </p>

            <h1
              style={{
                fontSize: "60px",
                color: "#1d4ed8",
                fontWeight: "bold",
                marginTop: "25px"
              }}
            >
              {user.fullname}
            </h1>

            <p
              style={{
                fontSize: "24px",
                marginTop: "30px",
                color: "#555"
              }}
            >
              for successfully completing the
            </p>

            <h2
              style={{
                fontSize: "38px",
                color: "#ea580c",
                fontWeight: "bold",
                marginTop: "20px"
              }}
            >
              VulnLab Cybersecurity Training Program
            </h2>

            <p
              style={{
                marginTop: "30px",
                fontSize: "22px",
                color: "#555"
              }}
            >
              including practical cybersecurity labs
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px",
                marginTop: "35px",
                fontSize: "22px",
                fontWeight: "bold"
              }}
            >

              <div>✅ SQL Injection</div>

              <div>✅ Cross Site Scripting (XSS)</div>

              <div>✅ JWT Authentication</div>

              <div>✅ CSRF</div>

              <div
                style={{
                  gridColumn: "span 2"
                }}
              >
                ✅ File Upload Vulnerability
              </div>

            </div>

          </div>
                       <hr
            style={{
              marginTop: "45px",
              marginBottom: "40px",
              border: "2px solid #eab308"
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              textAlign: "center",
              gap: "20px"
            }}
          >

            <div>

              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "22px"
                }}
              >
                Completion Date
              </p>

              <p
                style={{
                  marginTop: "10px",
                  fontSize: "20px"
                }}
              >
                {today}
              </p>

            </div>

            <div>

              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "22px"
                }}
              >
                Certificate ID
              </p>

              <p
                style={{
                  marginTop: "10px",
                  fontSize: "20px"
                }}
              >
                {certificateId}
              </p>

            </div>

            <div>

              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "22px"
                }}
              >
                Instructor
              </p>

              <p
                style={{
                  marginTop: "10px",
                  fontSize: "20px"
                }}
              >
                VulnLab Team
              </p>

            </div>

          </div>

        </div>
                <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "40px",
            flexWrap: "wrap"
          }}
        >

          <button
            onClick={downloadCertificate}
            style={{
              background: "#2563eb",
              color: "white",
              padding: "14px 28px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "bold"
            }}
          >
            ⬇ Download PDF
          </button>

          <button
            onClick={shareCertificate}
            style={{
              background: "#16a34a",
              color: "white",
              padding: "14px 28px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "bold"
            }}
          >
            📤 Share
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            style={{
              background: "#374151",
              color: "white",
              padding: "14px 28px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "bold"
            }}
          >
            ⬅ Back to Dashboard
          </button>

        </div>

      </div>

    </div>

  );

}

export default Certificate;