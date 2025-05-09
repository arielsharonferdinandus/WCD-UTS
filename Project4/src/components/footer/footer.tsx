import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <section className="flex flex-col py-5 px-20 justify-between bg-black text-white">
            <div className="bg-black text-off-white flex justify-between">
                <p>Build with 💖 by Ariel Sharon Ferdiandnus </p>
                <ul className="flex justify-end gap-10">
                    <li>
                    <Link to="https://www.linkedin.com/in/ariel-sharon-ferdinandus-b8a641355/">
                        <p>Linkedin</p>
                    </Link>
                    </li>
                    <li>
                    <Link to="https://github.com/arielsharonferdinandus">
                        <p>Github</p>
                    </Link>
                    </li>
                    <li>
                    {/* <Link to="www.webflow.com"> */}
                        <p>Webflow</p>
                    {/* </Link> */}
                    </li>
                </ul>
            </div>
        </section>
      );
    }