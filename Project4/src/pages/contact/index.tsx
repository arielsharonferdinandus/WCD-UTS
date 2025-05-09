import Bio from "../../components/layouts/contact/bio" 
import NavBar from "../../components/navbar/navbar"
import Form from "../../components/layouts/contact/form"
import Footer from "../../components/footer/footer"

export default function Contactpage() {
  return (
    <>
      <main className="flex flex-col max-h-screen max-w-screen">
        <NavBar/>
        <div className="flex flex-row my-20">
          <Bio />
          <Form />
        </div>
        <Footer/>
      </main>
    </>
  )
}