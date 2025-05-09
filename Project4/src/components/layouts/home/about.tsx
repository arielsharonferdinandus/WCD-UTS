export default function About() {
    return (
        <section className="bg-[#FFFFFF] my-[160px] mx-[80px]" id="about">
            <div className="container mx-auto flex flex-col md:flex-row justify-between">
                <div className="mb-8 md:mb-0 md:w-1/3 flex items-start">
                    <h2 className="text-3xl font-semibold text-black" >About</h2>
                </div>

                <div className="md:w-2/3">
                    <p className="text-lg text-gray-700 justify-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>
        </section>
    )
}