// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home"; // Use named import for Home component
import { Store } from "./pages/Store"; // Assuming Store component also uses named export
import { About } from "./pages/About"; // Assuming About component also uses named export
import { Navbar } from "./components/Navbar"
function App() {
  return (
    <>
    <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
