import profileImg from "../../../assets/person.svg";
import NavBar from "../../navbar/navbar"

export default function Hero() {
  return (
    <section id="home" className="bg-[#C7D0D9] h-screen w-screen overflow-hidden">
      <NavBar/>
      <div className="relative h-full w-full text-center">
          <div className="absolute inset-0 flex justify-center items-end-safe">
            <h2 className="text-[8vw] font-semibold text-white mb-48 opacity-70 z-10 select-none leading-none whitespace-nowrap animate-move-right-to-left">
            Data Scientist - Tech Enthusiast - Design Enthusiast
            </h2>
          </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0">
                <img
                    src={profileImg}
                    alt="Profile"
                    className="h-[calc(100vh-40px)] max-h-screen w-auto object-contain"
                />
            </div>

            <div className="absolute right-2 top-1/4 z-20">
                <button className="group relative bg-black text-white px-8 py-3 rounded-full text-4xl flex items-center gap-4 transition-all duration-500 transform translate-x-[75%] hover:translate-x-7">
                👋 <span className="whitespace-nowrap">Hi I’m Taufiq</span>
                </button>
            </div>
        </div>
    </section>
  );
}