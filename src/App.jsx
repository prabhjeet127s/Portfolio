import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Skill from "./components/Skill"
import Project from "./components/Project"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Applayout from "./components/Applayout"


function App() {


  return (
    <>

      <Routes>

        <Route path="/" element={<Applayout />}   >
          <Route path="/" element={<Home />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/project" element={<Project />} />

        </Route>
                  <Route path="/contact" element={<Contact />} />




      </Routes>
    </>


















  )
}

export default App
