import students from "../../../data/students.json";

/**
 * Calculate grade based on total marks
 */
function getGrade(total) {
  if (total >= 75) return "A";
  if (total >= 60) return "B1";
  if (total >= 50) return "C1";
  if (total >= 33) return "D";
  return "E";
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const roll = searchParams.get("roll");
    const reg = searchParams.get("reg");

    if (!roll || !reg) {
      return new Response(
        JSON.stringify({ error: "Roll number and Registration number required" }),
        { status: 400 }
      );
    }

    const student = students.find(
      (s) => s.roll === roll && s.reg === reg
    );

    if (!student) {
      return new Response(
        JSON.stringify({ error: "Record not found (Demo)" }),
        { status: 404 }
      );
    }

    // Calculate totals + grades
    const marksWithTotal = {};
    let grandTotal = 0;

    for (const subject in student.marks) {
      const theory = student.marks[subject].theory;
      const practical = student.marks[subject].practical;
      const total = theory + practical;

      grandTotal += total;

      marksWithTotal[subject] = {
        theory,
        practical,
        total,
        grade: getGrade(total)
      };
    }

    return new Response(
      JSON.stringify({
        roll: student.roll,
        reg: student.reg,
        name: student.name,
        mother: student.mother,
        father: student.father,
        dob: student.dob,
        schoolCode: student.schoolCode,
        marks: marksWithTotal,
        grandTotal,
        result: grandTotal / Object.keys(marksWithTotal).length >= 33
          ? "PASS"
          : "FAIL"
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500 }
    );
  }
}
