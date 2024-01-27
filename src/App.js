import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import Benefits from './components/Benefits';
import Challenge from './components/Challenge';
import Customers from './components/Customers';
import Footer from './components/Footer';
import Header from './components/Header';
import Heading from './components/Heading';
import KeyFeatures from './components/KeyFeatures';
import Status from './components/Status';
import Student from './components/Student';
import { Technology } from './components/Technology';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/Main';
import PrivacyPolicy from './components/PrivacyPolicy';
import Layout from './components/Layout';
import TermsCondition from './components/TermsCondition';
import Contactus from './components/Contactus';

function App() {
  return (
    <BrowserRouter>
      <Layout > 
        <Routes >
          {/* <Route exact path="/" render={(props) => <Main {...props} />} />
          <Route path="/privacyPolicy" render={(props) => <PrivacyPolicy {...props} />} /> */}
          <Route path='/' element={<Main />} />
          <Route path='/privacyPolicy' exact element={<PrivacyPolicy />} />
          <Route path='/terms-condition' exact element={<TermsCondition />} />
          <Route path='/contectus' exact element={<Contactus />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
