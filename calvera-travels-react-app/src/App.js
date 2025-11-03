// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';
import Destination from './components/Destination';
import DestinationDetail from './components/DestinationDetail';
import AboutUs from './components/AboutUs';
import Tours from './components/Tours';
import Contact from './components/Contact';
import PlanYourTrip from './components/PlanYourTrip';
import Blog from './components/Blog';
import PrivacyPolicy from './components/PrivacyPolicy';

// ✅ Import each page from its own file
// import RulesAndRegulation from './components/RulesAndRegulation';
import TermsAndConditions from './components/TermsAndConditions';

import QA from './components/QA';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          {/* Keep this wrapper for your on-page search */}
          <main id="app-content" data-searchable="true" role="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Destination" element={<Destination />} />
              <Route path="/Destination/:slug" element={<DestinationDetail />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/Tours" element={<Tours />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Planyourtrip" element={<PlanYourTrip />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />

              {/* ✅ Both pages exist as separate components */}
              {/* <Route path="/rules-and-regulation" element={<RulesAndRegulation />} /> */}
              <Route path="/terms-and-condition" element={<TermsAndConditions />} />

              <Route path="/qa" element={<QA />} />
            </Routes>
          </main>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
