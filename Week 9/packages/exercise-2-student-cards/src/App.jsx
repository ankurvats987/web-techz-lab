import StudentCard from "./components/StudentCard.jsx";

function App() {
  const students = [
    { name: "Ananya Reddy", department: "ECE", marks: 91 },
    { name: "Nikhil Varma", department: "CSE", marks: 87 },
    { name: "Pooja Nair", department: "ME", marks: 84 },
  ];

  return (
    <main className="page">
      <section className="wrapper">
        <h1>Student Cards</h1>
        <div className="cards-grid">
          {students.map((student) => (
            <StudentCard
              key={student.name}
              name={student.name}
              department={student.department}
              marks={student.marks}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
