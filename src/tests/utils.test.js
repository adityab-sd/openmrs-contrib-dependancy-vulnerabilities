/**
 * Added only basic test cases to test default behaviours. Would have to develop
 * further test cases to test different scenarios of different functions.
 */
function assert(condition, message) {
  if(!condition) {
    console.error("Method failed", message);
  }
  else console.error("Method executed sucessfully", message);
}
function testHighestSeverityRank() {
  const cves = [
    { severity: "LOW" },
    { severity: "HIGH" },
    { severity: "MEDIUM" }
  ];
  const result = getHighestSeverityRank(cves);
  assert(result === "HIGH", "getHighestSeverityRank returns highest severity");
}

testHighestSeverityRank();


function testHighestSeverityScore() {
  const cves = [
    { score: 2 },
    { score: 9 },
    { score: 5 }
  ];
  const result = getHighestSeverityScore(cves);
  assert(result === 9, "getHighestSeverityScore returns highest score");
}

testHighestSeverityScore();