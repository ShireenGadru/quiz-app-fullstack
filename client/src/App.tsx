import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { QuizCard } from "./components/QuizCard/QuizCard";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";

function App() {
  return (
    <div className="page-container">
      <Navbar />
      <h2>React Quiz</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/js" element={<QuizCard type={"js"} />} />
        <Route path="/react" element={<QuizCard   type={"react"}/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
