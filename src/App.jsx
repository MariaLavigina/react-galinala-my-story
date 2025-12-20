import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/index.jsx';
import WhyILeft from "./pages/WhyILeft.jsx";
import DecisionToLeave from './pages/DecisionToLeave.jsx';
import OurJourney from './pages/OurJourney.jsx';
import WeArrived from './pages/WeArrived.jsx';
import FirstSteps from './pages/FirstSteps.jsx';
import LifeInIsrael from './pages/LifeInIsrael.jsx';
import GalinaGrew from './pages/GalinaGrew.jsx';
import MashasFirstDays from './pages/MashasFirstDays.jsx';
import MothersStory from './pages/MothersStory.jsx';
import ContactMe from './pages/ContactMe.jsx';
import ThankYou from './pages/ThankYou.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
  // Conditional basename
  const basename = import.meta.env.PROD
    ? "/react-galinala-my-story/" // Only for production builds (e.g., GitHub Pages)
    : "/";                        // Local dev

  return (
    <Router basename={basename}>
      <ScrollToTop />
      <Routes>
    <Route path="/" element={<Index />} /> 
    <Route path="/why-i-left" element={<WhyILeft />} />
    <Route path="/decision-to-leave" element={<DecisionToLeave/>} />
    <Route path="/our-journey" element={<OurJourney />} />
    <Route path="/we-arrived" element={<WeArrived />} />
    <Route path="/first-steps" element={<FirstSteps />} />
    <Route path="/life-in-israel" element={<LifeInIsrael />} />
    <Route path="/galina-grew" element={<GalinaGrew />} />
    <Route path="/mashas-first-days" element={<MashasFirstDays />} />
    <Route path="/mothers-story" element={<MothersStory />} />
    <Route path="/contact-me" element={<ContactMe />} />
    <Route path="/thank-you" element={<ThankYou />} /> 
                          
      </Routes>
    </Router>
  );
}

export default App;
