function StudentCard({ name, department, marks }) {
  return (
    <article className="student-card">
      <h2>{name}</h2>
      <p>
        <strong>Department:</strong> {department}
      </p>
      <p>
        <strong>Marks:</strong> {marks}
      </p>
    </article>
  );
}

export default StudentCard;
