import React from "react";

const Conditions = ({ isopen, onclose }) => {

    if(!isopen) return null;

  return (
    <div className="terms flex flex-col justify-center items-center text-xl cursor-default">
      <h1 className="text-3xl font-bold text-zinc-400 m-10 ">Terms and Conditions</h1>

      <h2>1. Use of Portfolio Website</h2>
      <p>
        This website is designed to showcase the work, projects, and
        professional profile of <strong>Pramod Kumar</strong>, a frontend
        developer experienced in building responsive web applications using
        React.js, TailwindCSS, and JavaScript. By accessing or using this
        website, you agree to the following terms and conditions.
      </p>

      <h2>2. Intellectual Property</h2>
      <p>
        All content on this website, including code samples, project
        descriptions, and personal details, is the intellectual property of
        Pramod Kumar unless otherwise stated. You may not copy, reproduce, or
        distribute any part of the website without permission.
      </p>

      <h2>3. External Links</h2>
      <p>
        This site may contain external links, including but not limited to:
        <ul>
          <li>
            <a
              href="https://github.com/pythi1/mern-blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              MERN Blog
            </a>
          </li>
          <li>
            <a
              href="https://github.com/pythi1/ecommerce"
              target="_blank"
              rel="noopener noreferrer"
            >
              E-commerce Site
            </a>
          </li>
          <li>Social media platforms like Instagram</li>
        </ul>
        These links are provided for reference and demonstration purposes only.
        They open in a new tab/window. I do not control the content,
        availability, or practices of these external websites and am not
        responsible for any damages or issues arising from visiting them.
      </p>

      <h2>4. Accuracy of Information</h2>
      <p>
        The resume, projects, certifications, and work experience presented on
        this site are accurate to the best of my knowledge as of the date
        mentioned. They include:
      </p>
      <ul>
        <li>
          Work experience at <strong>CodingGeeks</strong> as a Frontend
          Developer (April 2023 – Sept 2023)
        </li>
        <li>
          Project work on <strong>Blogging Website</strong> and{" "}
          <strong>E-commerce Website</strong> using the MERN stack
        </li>
        <li>
          Educational background:{" "}
          <strong>B.Tech in Computer Science Engineering</strong> from PIET, KUK
          University
        </li>
        <li>Certifications in React.js and MySQL</li>
      </ul>

      <h2>5. Contact and Privacy</h2>
      <p>
        You may contact me at{" "}
        <a href="mailto:pramodjangra144@gmail.com">pramodjangra144@gmail.com</a>{" "}
        for professional inquiries. This website does not collect user data
        directly or through cookies.
      </p>

      <h2>6. Changes to Terms</h2>
      <p>
        These terms and conditions may be updated from time to time. Continued
        use of the site constitutes your acceptance of any changes.
      </p>

      <button onClick={onclose} className="border outline bg-gradient-to-br from-yellow-800 to-red-500 cursor-pointer p-2 m-4 rounded-xl w-32 mt-10" >Close</button>

    </div>
  );
}


export default Conditions;
