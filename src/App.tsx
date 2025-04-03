import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

// Components
const Home = () => {
  return (
    <div className="home-container">
      <h1>PROMPTR</h1>
      <p className="description">A minimalist tool for storing and managing your AI prompts</p>
      <div className="links">
        <Link to="/privacy">Policy</Link>
        <a href="#">Coming Soon</a>
      </div>
    </div>
  )
}

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p>Last updated: April 3, 2025</p>

      <section>
        <h2>Introduction</h2>
        <p>
          Welcome to Promptr ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data.
          This privacy policy explains how we collect, use, and safeguard your information when you use our service.
        </p>
      </section>

      <section>
        <h2>Information We Collect</h2>
        <p>
          We may collect personal identification information, including but not limited to:
        </p>
        <ul>
          <li>Name and email address</li>
          <li>Usage data and interaction with our service</li>
          <li>Prompt history and templates</li>
        </ul>
      </section>

      <section>
        <h2>How We Use Your Information</h2>
        <ul>
          <li>To provide and maintain our service</li>
          <li>To notify you about changes to our service</li>
          <li>To provide customer support</li>
          <li>To improve our service and user experience</li>
        </ul>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
          <a href="mailto:joey@pyras.ai"> joey@pyras.ai</a>
        </p>
      </section>

      <div className="back-button">
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
