import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts";
import Library from "../components/Library/Library";
import NotFound from "./components/NotFound/";
import Profile from "./components/Profile/";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Library />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
