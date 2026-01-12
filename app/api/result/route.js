import students from "../../../../data/students.json";

function getGrade(total) {
  if (total >= 75) return "A";
  if (total >= 60) return "B1";
  if (total >= 50) return "C1";
  if (total >= 33) return "D";
  return "E";
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const roll = searchParams.get("roll");
  const reg = searchParams.get("reg");

  if (!roll || !reg) {
    return Response.json(
      { error: "Roll number and Registration number required" },
      { status: 400 }
    );
  }

  const student = students.find(
    (s) => s.roll === roll && s.reg === reg
  );

  if (!student) {
    return Response.json(
      { error: "Record not found (Demo)" },
      { status: 404 }
    );
  }

  let totalMarks = 0;
  const marks = {};

  for (const subject in student.marks) {
    const theory = student.marks[subject].theory;
    const practical = student.marks[subject].practical;
    const total = theory + practical;

    totalMarks += total;

    marks[subject] = {
      theory,
      practical,
      total,
      grade: getGrade(total)
    };
  }

  return Response.json({
    roll: student.roll,
    reg: student.reg,
    name: student.name,
    mother: student.mother,
    father: student.father,
    dob: student.dob,
    schoolCode: student.schoolCode,
    marks,
    totalMarks,
    result:
      totalMarks / Object.keys(marks).length >= 33
        ? "PASS"
        : "FAIL"
  });
}
