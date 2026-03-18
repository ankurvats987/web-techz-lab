const calculateAverage = (m1, m2, m3) => {
  return (m1 + m2 + m3) / 3;
};

const getStudentMarksReport = (studentName, mark1, mark2, mark3) => {
  const totalMarks = mark1 + mark2 + mark3;
  const average = calculateAverage(mark1, mark2, mark3);

  return {
    studentName,
    totalMarks,
    average,
    formattedAverage: average.toFixed(2),
  };
};
