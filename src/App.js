import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header.js'
import Invoices from './Invoices.js';
import InvoicePage from "./InvoicePage.js";
import LandingPage from "./LandingPage.js";
import NotFound from "./NotFound.js";

function App() {
  return (
    <>
    <div>
    <Header/>
     <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage/>}></Route>
          <Route path='/panel' element={<InvoicePage/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
     </BrowserRouter>
    </div>
    </>
  );
}

export default App;
