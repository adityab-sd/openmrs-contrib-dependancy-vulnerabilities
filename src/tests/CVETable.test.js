function assert(condition, message) {
  if(!condition) {
    console.error("Method failed", message);
  }
  else console.error("Method executed sucessfully", message);
}
function testCVETableRender() {
  const cves = [
    {
      id: "CVE-TEST-1",
      severity: "HIGH",
      score: 8.2,
      description: "Test vulnerability"
    }
  ];
  const element = React.createElement(CVETable, { cves });
  const div = document.createElement("div");

  ReactDOM.render(element, div);

  assert(div.innerHTML.includes("CVE-TEST-1"), "CVE ID rendered");
  assert(div.innerHTML.includes("Test vulnerability"), "CVE description rendered");
}

testCVETableRender();