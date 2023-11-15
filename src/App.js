import { ChakraProvider } from "@chakra-ui/react";


import Alert from "./Components/Alert";
import Footer from "./Components/Footer";
import ProjectsSection from "./Components/ProjectsSection";
import LandingSection from "./Components/LandingSection";
import ContactMeSection from "./Components/ContactMeSection.js";
import Header from "./Components/Header";
import { AlertProvider } from "./Context/alertContext.js";


function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;