import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Carousel from "./Carousel";
import Ranking from "./Ranking";
import Student from "./routes/Student";
import Faculty from "./routes/Faculty";
import StudentLogin from "./routes/Student-login";

function App() {
  return (
      <Router>
         <Header/>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Carousel />
                <Ranking />
              </>
            }
          />
          <Route path="/student" element={<Student />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/student/student-login" element={<StudentLogin />} />
        </Routes>
        <Footer />
      </Router>
  );
}
export default App;