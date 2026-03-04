
function DependencyTable({ dependencies }) {
  const [expanded, setExpanded] = React.useState(null);

  return (
    <div className="bx--data-table w-full mt-4">

      <div className="dep-header dep-grid">
        <div>Dependency</div>
        <div>Version</div>
        <div>Severity</div>
        <div>CVEs</div>
        <div>Exploit?</div>
        <div>Fix Version</div>
      </div>

      {dependencies.map((dep, index) => {
        const severity = getHighestSeverityRank(dep.cves);
        // console.log('CVE data: ', dep.cves);
        return (
          <React.Fragment key={dep.name + index}>
            <div
              className="dep-row dep-grid"
              onClick={() =>
                setExpanded(expanded === index ? null : index)
              }
            >
              
              <div className="dep-name">
                <span className="arrow">
                  {expanded === index ? "▾" : "▸"}
                </span>
                {dep.name}
              </div>
              <div>{dep.version}</div>
              <div>
                <span className={`pill ${severity}`}>
                  {severity}
                </span>
              </div>
              <div>{dep.cves.length}</div>
              <div>-</div>
              <div>-</div>
            </div>
            {expanded === index && (
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
                  {dep.cves.map((cve, i) => (
                    <tr key={cve.id + i}>
                      <td className="cve-link">
                        <a
                          href={`https://nvd.nist.gov/vuln/detail/${cve.id}`}
                          target="_blank"
                          rel="no opener no referrer"
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

                      <td className="cve-desc">
                        {cve.description}
                      </td>

                      <td>{cve.affectedVersions || "-"}</td>
                      <td>{cve.fixedIn || "-"}</td>
                      <td>{cve.cwe || "-"}</td>
                    </tr>
                    ))}
                </tbody>
              </table>
            </div>
            )}
          </React.Fragment>
          );
      })}
    </div>
  );
}