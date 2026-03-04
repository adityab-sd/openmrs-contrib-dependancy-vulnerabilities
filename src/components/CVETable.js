function CVETable({ cves }) {
  return (
    <div className="dep-expanded">
      <table className="cve-table">
        <thead>
          <tr>
            <th>CVE ID</th>
            <th>Severity</th>
            <th>Score</th>
            <th>Description</th>
            <th>Affected Versions</th>
            <th>Fixed In</th>
            <th>CWE</th>
          </tr>
        </thead>
        <tbody>
          {cves.map((cve, i) => (
            <tr key={cve.id + i}>
              <td>
                <a
                  href={`https://nvd.nist.gov/vuln/detail/${cve.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cve.id}
                </a>
              </td>
              <td>
                <span className={`pill ${cve.severity}`}>
                  {cve.severity}
                </span>
              </td>
              <td>
                {typeof cve.score === "number"
                  ? `${cve.score}/10`
                  : "-"}
              </td>
              <td>{cve.description}</td>
              <td>{cve.affectedVersions || "-"}</td>
              <td>{cve.fixedIn || "-"}</td>
              <td>{cve.cwe || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}