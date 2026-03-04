function assert(condition, message) {
  if(!condition) {
    console.error("Method failed", message);
  }
  else console.error("Method executed sucessfully", message);
}
function testDependencyRendering() {
  const dependencies = [
    {
      name: "jquery",
      version: "1.7.1",
      severity: "LOW",
      highestScore: 4,
      cves: []
    }
  ];
  const element = React.createElement(DependencyTable, { dependencies });
  const div = document.createElement("div");
  ReactDOM.render(element, div);
  assert(div.innerHTML.includes("jquery"), "Dependency name rendered");
}

testDependencyRendering();