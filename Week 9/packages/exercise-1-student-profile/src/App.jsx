function StudentProfile() {
  const name = "Rahul Kumar";
  const department = "Computer Science and Engineering";
  const year = "3rd Year";
  const section = "B";

  return (
    <main className="page">
      <section className="profile-card">
        <h1>Student Profile</h1>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Department:</strong> {department}
        </p>
        <p>
          <strong>Year:</strong> {year}
        </p>
        <p>
          <strong>Section:</strong> {section}
        </p>
      </section>
    </main>
  );
}

export default StudentProfile;
