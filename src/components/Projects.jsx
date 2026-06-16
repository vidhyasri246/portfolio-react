<section id="projects" className="container py-5"></section>
function Projects() {
  const projects = [
    {
      title: "Gas Leakage Alert System",
      description:
        "Developed a monitoring system that detects gas leakage and provides alerts to improve safety and prevent accidents."
    },
    {
      title: "Travel Buddy Application",
      description:
        "Designed a travel assistance application that helps users plan trips, manage itineraries, and access travel information."
    },
    {
      title: "Cloud-Based Library Access Control",
      description:
        "Built a cloud-enabled library management and access control system for efficient resource management and user authentication."
    }
  ];

  return (
    <section id="projects" className="container py-5">
      <h2 className="text-center mb-4">Projects</h2>

      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">
                  {project.title}
                </h5>

                <p className="card-text">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;