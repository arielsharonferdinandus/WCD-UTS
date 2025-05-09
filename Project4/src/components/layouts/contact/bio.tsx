import { Link } from "react-router-dom";

import ContactProfile from "../../../assets/images/contactProfile.png"

function Bio() {
  return (
    <section className="flex flex-col w-1/2 ml-20 my-4" id="bio">
      <div className="w-[200px]">
        <img src={ContactProfile} alt="myself" className="w-full" />
      </div>
      <div className="mt-10">
        <p className="text-sm">Contact Details</p>
        <div className="text-lg">
          <Link to={"mailto:ariel.ferdinandus@cakrawala.ac.id"}>
            ariel.ferdinandus@cakrawala.ac.id
          </Link>
          <br />
          <Link to={"tel:+6283870815986"}>+62 83870815986</Link>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-sm">Social</p>
        <ul className="text-lg flex flex-col gap-2">
          <li>
            <Link to={"https://www.linkedin.com/in/ariel-sharon-ferdinandus-b8a641355/"}>Linkedin</Link>
          </li>
          <li>
            <Link to={"https://github.com/arielsharonferdinandus"}>Github</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Bio;