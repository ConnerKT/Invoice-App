import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header.js'
import Invoices from './Invoices.js';
import InvoicePage from "./InvoicePage.js";
import LandingPage from "./LandingPage.js";
import NotFound from "./NotFound.js";
import Settings from "./Settings.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <LandingPage />
              </>
            }
          />
          <Route
            path='/panel'
            element={
              <>
                <Header />
                <InvoicePage />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
