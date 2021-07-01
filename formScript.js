//--------- INTERNSHIP --------------- //

const addNewIntern = () => {
  const internData = document.querySelector(".intern_data");

  let label = document.createElement("label");
  label.innerText = "Internship Details:";

  // Give proper names, placeholder and types to elements
  let input = document.createElement("input");

  input.name = "Organization_name";
  input.placeholder = "Organization Name";
  input.setAttribute("size", "82");

  let input1 = document.createElement("input");
  input1.placeholder = "Role";
  input1.setAttribute("size", "82");

  let input2 = document.createElement("input");
  input2.placeholder = "Work Duration: Eg:- May 2021 - July 2021 ";
  input2.setAttribute("size", "82");

  // Description list node creation
  let description = document.createElement("div");
  description.classList.add("internship_desc");

  let internShipDesc = document.createElement("textarea");
  internShipDesc.placeholder = "Role Description";
  internShipDesc.name = "internship_desc_0";
  internShipDesc.rows = "3";
  internShipDesc.cols = "85";
  description.appendChild(internShipDesc);

  /* let addDescButton = document.createElement("button");
  addDescButton.innerText = "New Description Line";
  addDescButton.onclick = addNewDescription;
  addDescButton.classList.add("btn", "btn-primary", "btn-sm");

  description.appendChild(addDescButton); */

  // Appending all nodes to intern_data class/node
  internData.appendChild(document.createElement("br"));
  internData.appendChild(label);
  internData.appendChild(document.createElement("br"));
  internData.appendChild(input);
  internData.appendChild(document.createElement("br"));
  internData.appendChild(document.createElement("br"));
  internData.appendChild(input1);
  internData.appendChild(document.createElement("br"));
  internData.appendChild(document.createElement("br"));
  internData.appendChild(input2);
  internData.appendChild(document.createElement("br"));
  internData.appendChild(document.createElement("br"));
  internData.appendChild(description);
};

const addNewDescription = (event) => {
  let button = event.target;
  let parentElement = event.target.parentElement;
  console.log(button);
  console.log(parentElement);
  let internDesc = document.querySelector(".internship_desc");
  // Insert new description before "button" variable.
  // set textarea.name = `internship_desc_${inputFieldNo}`
};

// window.onload = addNewIntern;

//--------- PROJECT --------------- //

const addNewProject = () => {
  const projectData = document.querySelector(".project_data");

  let label = document.createElement("label");
  label.innerText = "Project Details:";

  // Give proper names, placeholder and types to elements
  let input = document.createElement("input");

  input.name = "Organization_name";
  input.placeholder = "Project Name";
  input.setAttribute("size", "82");

  let input1 = document.createElement("input");
  input1.placeholder = "Tools & Technologies";
  input1.setAttribute("size", "82");

  let input2 = document.createElement("input");
  input2.placeholder = "Date of Completion: Eg:- May 2021 - July 2021";
  input2.setAttribute("size", "82");

  // Description list node creation
  let description = document.createElement("div");
  description.classList.add("project_desc");

  let projectDesc = document.createElement("textarea");
  projectDesc.placeholder = "  Project Description";
  projectDesc.name = "project_desc_0";
  projectDesc.rows = "3";
  projectDesc.cols = "85";
  description.appendChild(projectDesc);

  /* let addDescButton = document.createElement("button");
  addDescButton.innerText = "New Description Line";
  addDescButton.onclick = addNewDescription;
  addDescButton.classList.add("btn", "btn-primary", "btn-sm");

  description.appendChild(addDescButton); */

  // Appending all nodes to intern_data class/node
  projectData.appendChild(document.createElement("br"));
  projectData.appendChild(label);
  projectData.appendChild(document.createElement("br"));
  projectData.appendChild(input);
  projectData.appendChild(document.createElement("br"));
  projectData.appendChild(document.createElement("br"));
  projectData.appendChild(input1);
  projectData.appendChild(document.createElement("br"));
  projectData.appendChild(document.createElement("br"));
  projectData.appendChild(input2);
  projectData.appendChild(document.createElement("br"));
  projectData.appendChild(document.createElement("br"));
  projectData.appendChild(description);
};

const addNewDescription2 = (event) => {
  let button = event.target;
  let parentElement = event.target.parentElement;
  console.log(button);
  console.log(parentElement);
  let projectDesc = document.querySelector(".project_desc");
  // Insert new description before "button" variable.
  // set textarea.name = `internship_desc_${inputFieldNo}`
};

// window.onload = addNewProject;

//--------- LEADERSHIP --------------- //

const addNewLeadership = () => {
  const leadershipData = document.querySelector(".leadership_data");

  let label = document.createElement("label");
  label.innerText = "Leadership Details:";

  // Give proper names, placeholder and types to elements
  let input = document.createElement("input");

  input.name = "Organization_name";
  input.placeholder = "Organization Name";
  input.setAttribute("size", "82");

  let input1 = document.createElement("input");
  input1.placeholder = "Role";
  input1.setAttribute("size", "82");

  let input2 = document.createElement("input");
  input2.placeholder = "Duration: Eg:- May 2021 - July 2021";
  input2.setAttribute("size", "82");

  // Description list node creation
  let description = document.createElement("div");
  description.classList.add("leadership_desc");

  let leadershipDesc = document.createElement("textarea");
  leadershipDesc.placeholder = "  Leadership Description";
  leadershipDesc.name = "leadership_desc_0";
  leadershipDesc.rows = "3";
  leadershipDesc.cols = "85";
  description.appendChild(leadershipDesc);

  /* let addDescButton = document.createElement("button");
  addDescButton.innerText = "New Description Line";
  addDescButton.onclick = addNewDescription;
  addDescButton.classList.add("btn", "btn-primary", "btn-sm");

  description.appendChild(addDescButton); */

  // Appending all nodes to intern_data class/node
  leadershipData.appendChild(document.createElement("br"));
  leadershipData.appendChild(label);
  leadershipData.appendChild(document.createElement("br"));
  leadershipData.appendChild(input);
  leadershipData.appendChild(document.createElement("br"));
  leadershipData.appendChild(document.createElement("br"));
  leadershipData.appendChild(input1);
  leadershipData.appendChild(document.createElement("br"));
  leadershipData.appendChild(document.createElement("br"));
  leadershipData.appendChild(input2);
  leadershipData.appendChild(document.createElement("br"));
  leadershipData.appendChild(document.createElement("br"));
  leadershipData.appendChild(description);
};

const addNewDescription3 = (event) => {
  let button = event.target;
  let parentElement = event.target.parentElement;
  console.log(button);
  console.log(parentElement);
  let leadershipDesc = document.querySelector(".leadership_desc");
  // Insert new description before "button" variable.
  // set textarea.name = `internship_desc_${inputFieldNo}`
};

window.onload = function () {
  addNewIntern();
  addNewProject();
  addNewLeadership();
};
