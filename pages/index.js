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

const PersonalDetails = () => (
  <>
    <div>
      <h2> PERSONAL DETAILS </h2>
      <br />
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="form-control"
              placeholder="Joseph"
              required
            />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="form-control"
              placeholder="Morgan"
              required
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender" className="form-control" required>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input
          type="age"
          name="age"
          id="age"
          className="form-control"
          placeholder={19}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="mobileno">Mobile Number</label>
        <input
          type="mobileno"
          name="mobileno"
          id="mobileno"
          className="form-control"
          placeholder={9998887770}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="linkedin">LinkedIn</label>
        <input
          type="text"
          name="linkedin"
          id="linkedin"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="github">Github Link</label>
        <input type="text" name="github" id="github" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Student's Email Id</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          placeholder="joseph.morgan26@nmims.edu.in"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="add">Permanent Address</label>
        <input
          type="add"
          name="add"
          id="add"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="slang">Spoken Languages</label>
        <input
          type="slang"
          name="slang"
          id="slang"
          className="form-control"
          placeholder="English,Hindi,Gujarati etc."
          required
        />
      </div>
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
    </div>
    <br />
  </>
);

const Academics = () => (
  <>
    <div>
      <h2>ACADEMICS</h2>
      <br />
      <div className="form-group">
        <label htmlFor="course_dur">Course - Duration </label>
        <input
          type="course_dur"
          name="course_dur"
          id="course_dur"
          className="form-control"
          placeholder="Eg. May 2019 - May 2024"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="course">Course</label>
        <select name="course" id="course" className="form-control" required>
          <option value="mbatech">MBA Tech (CS) </option>
          <option value="btech">BTech (CSBS) </option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="course">Course </label>
        <input
          type="course"
          name="course"
          id="course"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="branch">Branch </label>
        <input
          type="branch"
          name="branch"
          id="branch"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="gpa">GPA</label>
        <input
          type="gpa"
          name="gpa"
          id="gpa"
          className="form-control"
          placeholder="Out of 4"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="per10">10th Percentage</label>
        <input
          type="per10"
          name="per10"
          id="per10"
          className="form-control"
          placeholder="95.6"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="per12">12th Percentage</label>
        <input
          type="per12"
          name="per12"
          id="per12"
          className="form-control"
          placeholder={94}
          required
        />
      </div>
    </div>

    <br />
  </>
);

const Extracurricular = () => (
  <>
    <div>
      <h2>EXTRACURRICULAR</h2>
      <br />
      <div className="form-group">
        <label htmlFor="hobbies">Hobbies:</label>
        <input
          type="hobbies"
          name="hobbies"
          id="hobbies"
          placeholder="Cycling,Dancing etc"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="cc">
          Certificates &amp; Courses (Kindly add complete name of your
          certifications.):
        </label>
        <input
          type="cc"
          name="cc"
          id="cc"
          placeholder="Flutter Development (Coursera) , Data Science (Kaggle) "
          className="form-control"
        />
      </div>
    </div>

    <br />
  </>
);

const Internship = () => (
  <>
    <div>
      <h2>INTERNSHIPS</h2>
      <div className="form-group internship-section" id="we">
        <div className="intern_data"></div>
        <div className="container text-centre" id="weaddbutton">
          <br /> <br />
          <button onclick="addNewIntern()" className="btn btn-dark btn-sm">
            Add Internship
          </button>
        </div>
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
          <button onclick="addNewProject()" className="btn btn-dark btn-sm">
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
          <button onclick="addNewLeadership()" className="btn btn-dark btn-sm">
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
