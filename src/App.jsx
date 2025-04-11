import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Friends from "./components/Friends";
import Groups from "./components/Groups";

const App = () => (
  <Router>
    <div className="bg-gray-200 min-h-screen">
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div className="w-full md:w-3/4 p-4">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/groups" element={<Groups />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
);

export default App;
