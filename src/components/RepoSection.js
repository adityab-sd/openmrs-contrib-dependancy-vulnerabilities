import React from 'react';
import { getHighestSeverityRank, getHighestSeverityScore } from '../utils.js';

const severityRank = {
  CRITICAL: 4,
  HIGH: 3,
  MEDIUM: 2,
  LOW: 1,
};

function RepoSection ({ repo }) {
    const [open, setOpen] = React.useState(true);
    const [sortBy, setSortBy] = React.useState("severity");
    const allCves = repo.dependencies.flatMap((d) => d.cves);
    const repoSeverity = getHighestSeverityRank(allCves);
    // console.log("Repo severity:", repoSeverity);
    const sortedDeps = [...repo.dependencies].sort((a, b) => {

      if (sortBy === "severity") {
        // console.log('Severity rank: ', sortBy);
        return (
          severityRank[getHighestSeverityRank(b.cves)] -
          severityRank[getHighestSeverityRank(a.cves)]
        );
      }

      if (sortBy === "score") {
        // console.log('Severity score: ', sortBy);
        return b.cves.length - a.cves.length;
      }

    return a.name.localeCompare(b.name);

    });
    return (
      <div className="repo-card">
        <div
          className="p-6 flex justify-between items-center cursor-pointer border-b"
          onClick={() => setOpen(!open)}
        >
          <h2 className="text-2xl font-bold">{repo.name}</h2>
          <SeverityTag severity={repoSeverity} />
        </div>

        {open && (
          <div className="p-6">
            <div className="sort-container">
              <label className="sort-label">Sort Dependencies</label>
              <div className="select-wrapper">
                <select
                  className="custom-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="severity">Severity</option>
                  <option value="score">Highest CVE Score</option>
                  <option value="name">Name (A–Z)</option>
                </select>
              </div>
            </div>

            <DependencyTable dependencies={sortedDeps} />
          </div>
        )}
      </div>
    );
}