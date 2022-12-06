import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/hero/Hero";
import Page from "./components/pages/Page";
import Account from "./components/account/Account";
import UiKit from "./components/ui-kit/UiKit";
import Doc from "./components/doc/Doc";
import SignIN from "./components/sigin/SignIn";
import Error from "./components/err/Error";
import NavBar from "./components/navbar/NavBar";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="page" element={<Page />} />
          <Route path="account" element={<Account />} />
          <Route path="ui-kit" element={<UiKit />} />
          <Route path="doc" element={<Doc />} />
          <Route path="sign-in" element={<SignIN />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
