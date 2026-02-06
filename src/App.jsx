import React from "react";
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Computer from './pages/Computer';
import Navbar from './pages/Navbar';
import ThankYouIGSB from './components/ThankYou';
import Footer from './pages/Footer';
import ApplyNowButton from './components/ApplyNowButton';


function App() {
  return (
    <Router basename="/">
      <div className="relative">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<PageWithDynamicTitle title="igsb" />} />
          <Route path="/thank-you" element={<ThankYouIGSB />} />
        </Routes>
        <Footer />
        <ApplyNowButton />
      </div>
    </Router>
  );
}

// Component to handle dynamic title
function PageWithDynamicTitle({ title }) {
  const dynamicTitle = `IGSB | ${title}`;

  return (
    <>
      <Helmet>
        <title>{dynamicTitle}</title>
      </Helmet>

      {title === "igsb" && <Computer />}
       
    </>
  );
}

export default App;
