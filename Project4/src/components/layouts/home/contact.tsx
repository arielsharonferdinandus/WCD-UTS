import {Link} from "react-router-dom"
import ProfileImage from "../../../assets/images/profile.png"

export default function Contact() {
    return (
        <section className="flex flex-col py-20 px-20 justify-between bg-black text-white " id="contact">
            <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col items-start gap-3">
                <p className="text-6xl">Have something in mind?</p>
                <div className="flex items-center gap-3">
                <span>
                    <img src={ProfileImage} alt="MyPhoto" />
                </span>
                <p className="text-6xl">let’s build it together.</p>
                </div>
            </div>
            <Link to="/contact">
            <button className="py-6 px-8 gap-2.5 cursor-pointer bg-white text-black rounded-full">
                Get in touch
            </button>
            </Link>
            </div>
        </section>
    )
}