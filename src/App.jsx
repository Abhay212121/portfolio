import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
import Header from "./components/Header";
import { Experience } from "./components/Experience";

function App() {
  return (
    <div className="bg-gray-900 py-22">
      <Header />
      <Experience />
      <ProjectSection />
      <Footer />
    </div>
  );
}

export default App;
