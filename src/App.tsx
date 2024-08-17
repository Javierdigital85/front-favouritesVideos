import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideosList from "./components/Videos/VideosList";
import VideoForm from "./components/Videos/VideoForm";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container p-4">
          <Routes>
            <Route path="/" element={<VideosList />} />
            <Route path="/new-video" element={<VideoForm />} />
            <Route path="/update/:id" element={<VideoForm />} />
          </Routes>
          <ToastContainer />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
