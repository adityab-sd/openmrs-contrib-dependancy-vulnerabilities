export default function App() {
  const [repos, setRepos] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      fetch("data/openmrs-core.json").then((r) => r.json()),
      fetch("data/openmrs-module-billing.json").then((r) => r.json()),
      fetch("data/openmrs-module-idgen.json").then((r) => r.json()),
    ]).then(([core, billing, idgen]) => {
      setRepos([
        normalizeVulnerabilityReport(core, "openmrs-core"),
        normalizeVulnerabilityReport(billing, "openmrs-module-billing"),
        normalizeVulnerabilityReport(idgen, "openmrs-module-idgen"),
      ]);
    });
  }, []);

  return (
    <div className="page-header">
      <h1 className="main-title">
        OpenMRS Dependency Vulnerability Report
      </h1>
      <div className="title-underline"></div>

      <span className="main-description">
        A summary of known security vulnerabilities detected across OpenMRS modules by automated dependency scanning. Each module lists its vulnerable dependencies, severity levels, and recommended fix versions to help maintainers prioritize upgrades.
      </span>
      <div className='modules-container'>
        {repos.map((repo, index) => (
          <RepoSection key={index} repo={repo} />
        ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);