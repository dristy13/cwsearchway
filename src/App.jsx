import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import RegistrationPage from "./RegistrationPage";
import CoursesPage from "./CoursesPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen antialiased text-secondary bg-background">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
