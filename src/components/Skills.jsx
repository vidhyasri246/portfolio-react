function Skills() {
  const skills = [
    "C",
    "C++",
    "JAVA",
    "HTML"
  ];

  return (
    <section id="skills" className="container py-5">
      <h2 className="text-center mb-4">Skills</h2>

      <div className="row g-3">
        {skills.map((skill, index) => (
          <div className="col-md-3" key={index}>
            <div className="card text-center shadow h-100">
              <div className="card-body">
                <h5>{skill}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;