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

const InputComponent = ({ field }) => {
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

const SelectorComponent = () => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender" className="form-control" required>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </>
  );
};
const section = {
  title: "Personal Details",
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
          <InputComponent field={nameField.firstName} />
        </div>
        <div className="col">
          <InputComponent field={nameField.lastName} />
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
        <InputComponent key={index} field={dataField} />
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
      text: "10th Percentage",
      name: "percent10",
      placeholder: "95.6",
    },
    {
      text: "12th Percentage",
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
        <InputComponent key={index} field={dataField} />
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
        <InputComponent key={index} field={dataField} />
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
        <InputComponent key={index} field={dataField} />
      ))}
      <br />
    </>
  );
};

const Internship = () => (
  <>
    <h2>INTERNSHIPS</h2>
    <div className="form-group internship-section" id="we">
      <div className="intern_data"></div>
      <div className="container text-centre" id="weaddbutton">
        <br /> <br />
        <button
          // onClick="addNewIntern()"
          className="btn btn-dark btn-sm"
        >
          Add Internship
        </button>
      </div>
    </div>
    <br />
  </>
);

const Project = () => (
  <>
    <div>
      <h2>PROJECTS</h2>
      <div className="form-group project-section" id="pr">
        <div className="project_data"></div>
        <div className="container text-centre" id="prbutton">
          <br /> <br />
          <button
            // onClick="addNewProject()"
            className="btn btn-dark btn-sm"
          >
            Add Project
          </button>
        </div>
      </div>
      <br />
    </div>
  </>
);

const Leadership = () => (
  <>
    <div>
      <h2>LEADERSHIP</h2>
      <div className="form-group project-section" id="le">
        <div className="leadership_data"></div>
        <div className="container text-centre" id="lebutton">
          <br /> <br />
          <button
            // onClick="addNewLeadership()"
            className="btn btn-dark btn-sm"
          >
            Add New Leadership Role
          </button>
        </div>
      </div>
    </div>
  </>
);

const Footer = () => (
  <footer>
    <p>
      Made by
      <b>
        Shivanshu Singh, Darrsheni Sapovadia, Rupali Vastani, Rushali Vastani ,
        Manthan Tripathi and Milind Sathe
      </b>
      .
    </p>
  </footer>
);

export default function Form() {
  // Form states
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("Btech");
  const [image, setImage] = useState(null);

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
      setName("");
      setMobile("");
      setEmail("");
      setCourse("Btech");
      imageRef.current.value = null;
    }
  };

  return (
    <>
      <NavBar />
      <div className="main-form needs-validation" noValidate>
        <PersonalDetails />
        <Academics />
        <Skills />
        <Extracurricular />
        <Internship />
        <Project />
        <button type="submit" className="btn btn-dark ">
          Submit
        </button>
        <br />
      </div>
      <Footer />
    </>
  );
}
