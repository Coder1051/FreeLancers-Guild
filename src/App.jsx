// App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SiteLayout from './pages/sitelayout';
import Home from './pages/home';
import About from './pages/about-us';
import Course from './pages/courses';
import Blog from './pages/blogs';
import Contact from './pages/contact-us';
import Error from './pages/error';
import "./app.css"
import Loader from "./loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  return (
    <Router>
      <Routes>
        {/* Routes with SiteLayout */}
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="courses" element={<Course />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />

          {/* Error page without layout */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;