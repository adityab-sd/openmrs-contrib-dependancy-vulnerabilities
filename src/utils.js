
/**
 * Not sure about exact calculation of severity rank, so let's assume
 * the values from 1 to 4. Will modify after having a clear idea about calculation later
 */

const severityRank = {
  CRITICAL: 4,
  HIGH: 3,
  MEDIUM: 2,
  LOW: 1,
};

function normalizeVulnerabilityReport(json, repoName) {
  const map = {};

  (json.vulnerabilities || []).forEach((vulnerability) => {
    const pkg = vulnerability?.location?.dependency?.package?.name || "Unknown Package";
    const version = vulnerability?.location?.dependency?.version || "-";
    const key = `${pkg}@${version}`;

    if (!map[key]) {
      map[key] = {
        name: pkg,
        version,
        cves: [],
      };
    }

    map[key].cves.push({
      id: vulnerability.id || "-",
      severity: (vulnerability.severity || "").toUpperCase(),
      description: vulnerability.description || "-",
      score: vulnerability.score || null, 
      cwe: "-", 
      affectedVersions: "-", 
      fixedIn: "-", 
    });
  });
  // console.log(json.dependencies);

  return {
    name: repoName,
    dependencies: Object.values(map),
  };
}
function getHighestSeverityRank(cves) {
  // Minor error handling if cves is empty
  if (!cves || cves.length === 0) return "LOW";

  return cves.reduce((max, cve) => {
    const current = (cve.severity || "LOW").toUpperCase();

    return severityRank[current] > severityRank[max]
      ? current
      : max;
  }, "LOW");
}

function getHighestSeverityScore(cves) {
  if (!cves || cves.length === 0) return null;

  const scores = cves
    .map((c) => c.score)
    .filter((s) => typeof s === "number");

  return scores.length ? Math.max(...scores) : null;

}
