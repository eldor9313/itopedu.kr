import { Route, Switch } from "react-router-dom";
import HomePage from "./screens/homePage";
import Footer from "./components/footer";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/about.css";
import "../css/bmodal.css";
import AboutPage from "./screens/productsPage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
