"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ResultPage() {
  const search = useSearchParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`/api/result?roll=${search.get("roll")}&reg=${search.get("reg")}`)
      .then(r => r.json())
      .then(setData);
  }, []);

  if (!data) return <p style={{ textAlign: "center" }}>Loading...</p>;
  if (data.error) return <p style={{ textAlign: "center" }}>{data.error}</p>;

  return (
    <div style={{ maxWidth: 700, margin: "20px auto", background: "#fff", padding: 20 }}>
      <h2 style={{ textAlign: "center" }}>
        High School (10th) Examination – 2024
      </h2>

      <h3>CANDIDATE DETAILS</h3>
      <p><b>Name:</b> {data.name}</p>
      <p><b>Mother:</b> {data.mother}</p>
      <p><b>Father:</b> {data.father}</p>
      <p><b>DOB:</b> {data.dob}</p>
      <p><b>School Code:</b> {data.schoolCode}</p>

      <h3>MARKS DETAILS</h3>
      <table border="1" width="100%" cellPadding="5">
        <tr>
          <th>Subject</th><th>Theory</th><th>Practical</th><th>Total</th>
        </tr>
        {Object.entries(data.marks).map(([sub, m]) => (
          <tr key={sub}>
            <td>{sub}</td>
            <td>{m.theory}</td>
            <td>{m.practical}</td>
            <td>{m.theory + m.practical}</td>
          </tr>
        ))}
      </table>

      <p style={{ fontSize: 12, marginTop: 15 }}>
        ⚠️ This is an official JkBose board website.
      </p>
    </div>
  );
}
