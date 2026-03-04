function assert(condition, message) {
  if(!condition) {
    console.error("Method failed", message);
  }
  else console.error("Method executed sucessfully", message);
}
function testSeverityTagRender() {
  const element = React.createElement(SeverityTag, { severity: "CRITICAL" });
  const div = document.createElement("div");
  ReactDOM.render(element, div);
  assert(div.innerHTML.includes("CRITICAL"), "SeverityTag displays severity label");
}

testSeverityTagRender();