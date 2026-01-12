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
    <div style={{ background: "#f4f4f4", minHeight: "100vh" }}>
      {/* Banner */}
      <div style={{ textAlign: "center", background: "#fff" }}>
        <img
          src="/banner.png"
          alt="JKBOSE Banner"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderBottom: "1px solid #ddd"
          }}
        />
      </div>

      {isStaging && (
        <div
          style={{
            maxWidth: 600,
            margin: "10px auto",
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
          maxWidth: 600,
          margin: "10px auto",
          background: "#ffffff",
          border: "1px solid #dcdcdc",
          padding: 20
        }}
      >
        <div
          style={{
            background: "#f5d6d6",
            padding: "8px 10px",
            fontSize: 14,
            marginBottom: 15,
            border: "1px solid #e1bcbc"
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

          {/* Captcha Placeholder (UI Match) */}
          <div
            style={{
              border: "1px solid #ccc",
              padding: 10,
              marginBottom: 15,
              background: "#fafafa"
            }}
          >
            <div style={{ fontSize: 13, marginBottom: 6 }}>
              Enter Characters As Shown In Image
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10
              }}
            >
              <div
                style={{
                  flex: 1,
                  padding: "6px 10px",
                  border: "1px solid #aaa",
                  fontSize: 18,
                  letterSpacing: 3,
                  background: "#fff"
                }}
              >
                5A9KQ
              </div>
              <input
                type="text"
                placeholder="Enter captcha"
                style={{
                  flex: 1,
                  padding: 8,
                  border: "1px solid #ccc"
                }}
              />
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              style={{
                padding: "6px 20px",
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
                padding: "6px 20px",
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
      <div
        style={{
          textAlign: "center",
          marginTop: 15,
          paddingBottom: 20,
          fontSize: 12,
          color: "#333"
        }}
      >
        © Jammu & Kashmir Board of School Education
      </div>
    </div>
  );
            }
