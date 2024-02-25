import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerPage from "./pages/CustomerPage";
import AccountPage from "./pages/AccountPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/customer"} element={<CustomerPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
