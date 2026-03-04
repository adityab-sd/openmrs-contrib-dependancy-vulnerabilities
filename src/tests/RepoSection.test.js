function assert(condition, message) {
  if(!condition) {
    console.error("Method failed", message);
  }
  else console.error("Method executed sucessfully", message);
}
function testRepoSectionRender() {
  const repo = {
    name: "openmrs-core",
    dependencies: []
  };
  const element = React.createElement(RepoSection, { repo });
  const div = document.createElement("div");
  ReactDOM.render(element, div);
  assert(div.innerHTML.includes("openmrs-core"), "Repo name rendered");
}

testRepoSectionRender();