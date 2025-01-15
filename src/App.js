import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import FinancingFlow from './components/FinancingFlow';
import Industries from './components/Industries';
import MarketPlace from './components/MarketPlace';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import GetStartedPage from './pages/GetStartedPage';
import SignInPage from './pages/SignInPage';
import BusinessRegistrationPage from './pages/BusinessRegistrationPage';
import InvestorRegistrationPage from './pages/InvestorRegistrationPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import SecurityPage from './pages/SecurityPage';

function App() {
  return (
    <Router>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <HowItWorks />
              <MarketPlace />
              <FinancingFlow />
              <Industries />
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/register/business" element={<BusinessRegistrationPage />} />
          <Route path="/register/investor" element={<InvestorRegistrationPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/security" element={<SecurityPage />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
