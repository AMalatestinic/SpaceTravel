import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import SpacecraftBuilder from "./Pages/SpacecraftBuilder";
import Planets from "./Pages/Planets";
import HomePage from "./Pages/HomePage";
import Spacecrafts from "./Pages/Spacecrafts";
import ShipProvider from "./Components/ShipProvider";
import Spacecraft from "./Pages/Spacecraft";
import NotFound from "./Pages/NotFound";

function App() {
  //Main app page, contains navbar, ship context and routes
  return (
    <div>
      <h1 className="title">Space Travel</h1>
      <BrowserRouter>
        <NavBar />
        <ShipProvider>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="spacecrafts" element={<Spacecrafts />} />
            <Route path="spacecrafts/builder" element={<SpacecraftBuilder />} />
            <Route path="/spacecrafts/:id" element={<Spacecraft />} />
            <Route path="planets" element={<Planets />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ShipProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

//space-travel-14629be34dd54a049338dc4a8b6906a8
