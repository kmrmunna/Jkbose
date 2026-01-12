"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [roll, setRoll] = useState("");
  const [reg, setReg] = useState("");
  const router = useRouter();

  function submit(e) {
    e.preventDefault();
    router.push(`/result?roll=${roll}&reg=${reg}`);
  }

  return (
    <div style={{ maxWidth: 500, margin: "50px auto", background: "#fff", padding: 20 }}>
      <h2 style={{ textAlign: "center" }}>
        High School (10th) Examination – 2024
      </h2>
      <p style={{ textAlign: "center" }}>
        Jammu and Kashmir Board Of School Education 
      </p>

      <form onSubmit={submit}>
        <input
          placeholder="Roll Number"
          value={roll}
          onChange={e => setRoll(e.target.value)}
          required
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />
        <input
          placeholder="Registration Number"
          value={reg}
          onChange={e => setReg(e.target.value)}
          required
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />
        <button style={{ width: "100%", padding: 10 }}>
          Submit
        </button>
      </form>

      <p style={{ fontSize: 12, marginTop: 15 }}>
        JkBose Offical Website.
      </p>
    </div>
  );
}
