import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoverPage from "./Components/Cover_Page/coverPage";
import ResumePage from "./Components/ResumePage/resumePage";
import TemplatePage from "./Components/TemplatePage/templatePage";
import "./index.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/template" element={<TemplatePage />} />
        <Route path="/template/build_resume" element={<ResumePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
