// import React from 'react';
// import Index from './pages/index.jsx';

// function App() {
//   return <Index />;
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/index.jsx';
import DecisionToLeave from './pages/DecisionToLeave.jsx';

function App() {
  return (
    <Router basename="/react-galinala-my-story/">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/decision-to-leave" element={<DecisionToLeave />} />
      </Routes>
    </Router>
  );
}

export default App;
