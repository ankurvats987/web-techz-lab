const calculateGrade = (marks) => {
  return marks >= 90 ? "A" : marks >= 75 ? "B" : marks >= 60 ? "C" : "D";
};

const createStudentObject = (id, name, department, marks) => {
  return { id, name, department, marks };
};

const destructureStudent = (student) => {
  const { id, name, department, marks } = student;
  return { id, name, department, marks };
};

const createUpdatedStudent = (student) => {
  return {
    ...student,
    grade: calculateGrade(student.marks),
  };
};
