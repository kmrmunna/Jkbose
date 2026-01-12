"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [roll, setRoll] = useState("");
  const [reg, setReg] = useState("");
  const router = useRouter();

  const isStaging = process.env.NEXT_PUBLIC_STAGE === "staging";

  function submit(e) {
    e.preventDefault();
    if (!roll || !reg) return;
    router.push(`/result?roll=${roll}&reg=${reg}`);
  }

  return (
    <div style={{ background: "#f2f2f2", minHeight: "100vh", padding: "20px 0" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 10 }}>
        <img
          src="/logo.png"
          alt="Board Logo"
          style={{ width: 70, marginBottom: 6 }}
        />
        <h3 style={{ margin: 0 }}>
          Jammu & Kashmir Board of School Education
        </h3>
      </div>

      {isStaging && (
        <div
          style={{
            maxWidth: 520,
            margin: "0 auto 10px",
            background: "#fff3cd",
            border: "1px solid #ffeeba",
            color: "#856404",
            padding: 8,
            fontSize: 13,
            textAlign: "center"
          }}
        >
          ⚠️ Internal / Temporary Deployment (Staging)
        </div>
      )}

      {/* Main Card */}
      <div
        style={{
          maxWidth: 520,
          margin: "0 auto",
          background: "#ffffff",
          border: "1px solid #dcdcdc",
          padding: 20
        }}
      >
        <div
          style={{
            background: "#f5d6d6",
            color: "#000",
            padding: "8px 10px",
            fontSize: 14,
            marginBottom: 15
          }}
        >
          Result of Secondary School Examination (Class 10th)
        </div>

        <form onSubmit={submit}>
          <div style={{ marginBottom: 12 }}>
            <label style={{ fontSize: 14 }}>Search by Roll No</label>
            <input
              type="text"
              value={roll}
              onChange={(e) => setRoll(e.target.value)}
              style={{
                width: "100%",
                padding: 8,
                border: "1px solid #ccc",
                marginTop: 4
              }}
              required
            />
          </div>

          <div style={{ marginBottom: 12 }}>
            <label style={{ fontSize: 14 }}>Registration No</label>
            <input
              type="text"
              value={reg}
              onChange={(e) => setReg(e.target.value)}
              style={{
                width: "100%",
                padding: 8,
                border: "1px solid #ccc",
                marginTop: 4
              }}
              required
            />
          </div>

          {/* Demo captcha placeholder */}
          <div
            style={{
              border: "1px solid #ccc",
              padding: 10,
              marginBottom: 15,
              textAlign: "center",
              fontSize: 13,
              color: "#555"
            }}
          >
            Enter Characters As Shown In Image  
            <br />
            <span style={{ fontSize: 18, letterSpacing: 3 }}>A9K3D</span>
          </div>

          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              style={{
                padding: "6px 18px",
                marginRight: 10,
                background: "#0d6efd",
                color: "#fff",
                border: "none",
                cursor: "pointer"
              }}
            >
              Submit
            </button>

            <button
              type="reset"
              onClick={() => {
                setRoll("");
                setReg("");
              }}
              style={{
                padding: "6px 18px",
                background: "#6c757d",
                color: "#fff",
                border: "none",
                cursor: "pointer"
              }}
            >
              Back
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", marginTop: 15, fontSize: 12 }}>
        © Jammu & Kashmir Board of School Education
      </div>
    </div>
  );
}
