import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Index";
import Create from "./pages/Create/index.jsx";
import Login from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/Create"
          element={
            <Sidebar>
              <Create />
            </Sidebar>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
