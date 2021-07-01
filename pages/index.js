import { useState, useRef } from "react";
import axios from "axios";
import { storage } from "@/firebase/clientApp";

const SampleForm = () => (
  <>
    <div className="m-1 p-1 grid place-items-center">
      <h1 className="my-10 p-1 text-5xl">CV Form App</h1>
      <form
        onSubmit={handleSubmit}
        className="m-1 p-1 w-2/5 flex flex-col justify-around place-items-center"
      >
        <input
          className="m-2 p-2 text-lg w-1/2 outline-none border"
          type="text"
          value={name}
          autoComplete="false"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="m-2 p-2 text-lg w-1/2 outline-none border"
          type="text"
          value={mobile}
          autoComplete="false"
          placeholder="Mobile"
          onChange={(e) => setMobile(e.target.value)}
        />
        <input
          className="m-2 p-2 text-lg w-1/2 outline-none border"
          type="email"
          value={email}
          autoComplete="false"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <select
          className="m-2 p-2 text-lg w-1/2 outline-none border"
          value={course}
          autoComplete="false"
          onChange={(e) => setCourse(e.target.value)}
        >
          <option className="m-1 p-1 text-md outline-none" value="Btech">
            Btech
          </option>
          <option className="m-1 p-1 text-md outline-none" value="MBATech">
            MBATech
          </option>
        </select>
        <div className="m-1 p-1 flex flex-row justify-center place-items-center">
          <span className="m-1 p-1 text-sm">Profile picture:</span>
          <input
            className="m-1 p-1 text-sm w-1/2 outline-none"
            ref={imageRef}
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <input
          className="m-2 p-2 text-lg text-white bg-blue-700 hover:bg-blue-800 cursor-pointer w-1/2 outline-none border"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  </>
);

const NavBar = () => (
  <>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <a href="#" className="navbar-brand">
        NMIMS - School of Technology Management &amp; Engineering
      </a>
    </nav>
    <br />
  </>
);

const InputGroup = ({ field }) => {
  // console.log(field);
  return (
    <div className="form-group">
      <label htmlFor={field.name}>{field.text}</label>
      <input
        type={field.name}
        name={field.name}
        id={field.name}
        className="form-control"
        placeholder={field.placeholder}
        required
      />
    </div>
  );
};

const PersonalDetails = () => {
  const nameField = {
    firstName: {
      text: "First Name:",
      name: "firstName",
      placeholder: "Joseph",
    },
    lastName: {
      text: "Last Name:",
      name: "lastName",
      placeholder: "Smith",
    },
  };
  const personalField = [
    {
      text: "Age:",
      name: "age",
      placeholder: "19",
    },
    {
      text: "Mobile Number:",
      name: "mobNo",
      placeholder: "10 digit number",
    },
    {
      text: "LinkedIn Profile Link:",
      name: "linkedIn",
      placeholder: "https://www.linkedin.com/in/joseph-smith-213dn123",
    },
    {
      text: "GitHub Profile Link:",
      name: "gitHubLink",
      placeholder: "https://github.com/JosephSmith",
    },
    {
      text: "NMIMS Email ID:",
      name: "email",
      placeholder: "joseph.smith26@nmims.edu.in",
    },
    {
      text: "Permanent Address:",
      name: "address",
      placeholder:
        "Flat 1302, Amrit Apartments, Sector 12, Kharghar, Maharashtra",
    },
    {
      text: "Spoken Languages:",
      name: "spokenLang",
      placeholder: "English, Hindi, Gujarati etc.",
    },
    // {
    //   text: "",
    //   name: "",
    //   placeholder: "",
    // },
  ];

  return (
    <>
      <h2> PERSONAL DETAILS </h2>
      <br />
      <div className="row">
        <div className="col">
          <InputGroup field={nameField.firstName} />
        </div>
        <div className="col">
          <InputGroup field={nameField.lastName} />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender" className="form-control" required>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      {personalField.map((dataField, index) => (
        <InputGroup key={index} field={dataField} />
      ))}

      <div className="form-group">
        <label htmlFor="fileToUpload">Upload Your Profile Picture</label>
        <input
          type="file"
          name="fileToUpload"
          id="fileToUpload"
          className="form-control"
          required
        />
      </div>
      <br />
    </>
  );
};

const Academics = () => {
  const acadField = [
    {
      text: "Course - Duration:",
      name: "courseDur",
      placeholder: "May 2019 - May 2024",
    },
    {
      text: "CGPA:",
      name: "cgpa",
      placeholder: "3.11",
    },
    {
      text: "10th Percentage:",
      name: "percent10",
      placeholder: "95.6",
    },
    {
      text: "12th Percentage:",
      name: "percent12",
      placeholder: "85.2",
    },
  ];
  return (
    <>
      <h2>ACADEMICS</h2>
      <br />
      <div className="form-group">
        <label htmlFor="course">Course</label>
        <select name="course" id="course" className="form-control" required>
          <option value="mbatech">MBA Tech (CS) </option>
          <option value="btech">BTech (CSBS) </option>
        </select>
      </div>
      {acadField.map((dataField, index) => (
        <InputGroup key={index} field={dataField} />
      ))}
      <br />
    </>
  );
};

const Skills = () => {
  const skillField = [
    {
      text: "Programming Languages:",
      name: "lang",
      placeholder: "C++, Python, Java, JavaScript, PHP etc.",
    },
    {
      text: "Tools & Technologies: ",
      name: "tools",
      placeholder: "MERN, MongoDB, Web Development etc.",
    },
    {
      text: "Core Skills:",
      name: "core",
      placeholder: "Communication, Leadership, Conflict Resolution etc.",
    },
  ];
  return (
    <>
      <h2>SKILLS</h2>
      <br />
      {skillField.map((dataField, index) => (
        <InputGroup key={index} field={dataField} />
      ))}
    </>
  );
};

const Extracurricular = () => {
  const extraField = [
    {
      text: "Hobbies:",
      name: "hobbies",
      placeholder: "Cycling, Dancing etc.",
    },
    {
      text: "Certificates & Courses (Kindly add complete name of your certifications):",
      name: "certiCourse",
      placeholder:
        "Flutter Development (Coursera), Data Science (Kaggle), etc.",
    },
  ];
  return (
    <>
      <h2>EXTRACURRICULAR</h2>
      <br />
      {extraField.map((dataField, index) => (
        <InputGroup key={index} field={dataField} />
      ))}
      <br />
    </>
  );
};

const DetailGroup = ({ detailField }) => {
  return (
    <>
      {detailField.map((dataField, index) => (
        <input
          key={index}
          className="form-control"
          name={dataField.name}
          placeholder={dataField.placeholder}
          style={{ marginTop: "8px" }}
        />
      ))}
    </>
  );
};

const DescGroup = () => {
  const [descCounter, setDescCounter] = useState([0]);
  const addDescription = () =>
    setDescCounter([...descCounter, descCounter.length]);
  return (
    <>
      {descCounter.map((desc, index) => (
        <input
          key={index}
          className="form-control"
          name="desc_0"
          placeholder="Description: Ex. Developed a responsive web-app "
          style={{ marginTop: "8px" }}
        />
      ))}
      <button
        style={{ marginTop: "8px", marginBottom: "8px" }}
        onClick={addDescription}
        className="btn btn-dark btn-sm"
      >
        Add Description
      </button>
    </>
  );
};

const Internship = () => {
  const internField = [
    {
      placeholder: "Organization Name: TCS",
      name: "internName",
    },
    {
      placeholder: "Intern Role: FullStack Developer",
      name: "internRole",
    },
    {
      placeholder: "Work Duration: May 2021 - July 2021",
      name: "internDur",
    },
  ];
  const [internCounter, setInternCounter] = useState([0]);

  const addInternship = () =>
    setInternCounter([...internCounter, internCounter.length]);

  return (
    <>
      <h2>INTERNSHIPS</h2>
      <div className="form-group">
        <h1>Internship Details:</h1>
        <div className="intern_data">
          {internCounter.map((internship, index) => (
            <div key={index}>
              <DetailGroup detailField={internField} />
              <DescGroup />
              <br />
            </div>
          ))}
        </div>
        <button onClick={addInternship} className="btn btn-dark btn-sm">
          Add Internship
        </button>
      </div>
      <br />
    </>
  );
};

const Project = () => {
  const projectField = [
    {
      placeholder: "Project Name: Gesture Controlled Robot",
      name: "projName",
    },
    {
      placeholder: "Tools & Tech used: Arduino, Raspberry Pi",
      name: "projTool",
    },
    {
      placeholder: "Project Duration: May 2021 - July 2021",
      name: "projDur",
    },
  ];
  const [projectCount, setProjectCount] = useState([0]);
  const addProject = () =>
    setProjectCount([...projectCount, projectCount.length]);

  return (
    <>
      <h2>PROJECTS</h2>
      <div className="form-group">
        <h1>Project Details:</h1>
        <div className="intern_data">
          {projectCount.map((project, index) => (
            <div key={index}>
              <DetailGroup detailField={projectField} />
              <DescGroup />
              <br />
            </div>
          ))}
        </div>
        <button onClick={addProject} className="btn btn-dark btn-sm">
          Add New Project
        </button>
      </div>
      <br />
    </>
  );
};

const Leadership = () => {
  const leadField = [
    {
      placeholder: "Organization Name: Student Council",
      name: "leadName",
    },
    {
      placeholder: "Role: President",
      name: "leadRole",
    },
    {
      placeholder: "Leadership Duration: May 2021 - July 2021",
      name: "leadDur",
    },
  ];
  const [leadCount, setLeadCount] = useState([0]);
  const addLead = () => setLeadCount([...leadCount, leadCount.length]);

  return (
    <>
      <h2>LEADERSHIP</h2>
      <div className="form-group">
        <h1>Leadership Details:</h1>
        <div className="intern_data">
          {leadCount.map((lead, index) => (
            <div key={index}>
              <DetailGroup detailField={leadField} />
              <DescGroup />
              <br />
            </div>
          ))}
        </div>
        <button onClick={addLead} className="btn btn-dark btn-sm">
          Add New Leadership Role
        </button>
      </div>
    </>
  );
};

const Footer = () => (
  <footer>
    <p>
      Made by
      <b>
        &nbsp;Milind Sathe, Shivanshu Singh, Darrsheni Sapovadia, Rupali
        Vastani, Rushali Vastani and Manthan Tripathi
      </b>
      .
    </p>
  </footer>
);

export default function Form() {
  // Image upload ref
  const imageRef = useRef(null);

  // Sending data to backend for upload (except image for now)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgUpload = storage
      .ref(`images/${image.name}`)
      .put(image)
      .on("state_changed", null, (err) => console.log(err)); // upload to storage bucket using client SDK

    const res = await axios({
      method: "POST",
      url: "/api/firestore",
      data: { name, mobile, email, course }, // need to upload image to storage bucket from backend, use admin SDK for that.
    });

    if (res.status == 201) {
      imageRef.current.value = null;
    }
  };

  return (
    <>
      <NavBar />
      {/* <h1>CV Information</h1> */}
      <div className="main-form needs-validation" noValidate>
        <PersonalDetails />
        <Academics />
        <Skills />
        <Extracurricular />
        <Internship />
        <Project />
        <Leadership />
        <button type="submit" className="text-center btn btn-dark ">
          Submit
        </button>
        <br />
      </div>
      <Footer />
    </>
  );
}
