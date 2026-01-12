import students from "@/data/students.json";

function grade(total) {
  if (total >= 60) return "B1";
  if (total >= 50) return "C1";
  return "D";
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const roll = searchParams.get("roll");
  const reg = searchParams.get("reg");

  const student = students.find(
    s => s.roll === roll && s.reg === reg
  );

  if (!student) {
    return Response.json({ error: "Record not found" });
  }

  return Response.json(student);
}
