import { Route, Switch, useRouteMatch } from "react-router-dom";
import OtherNavbar from "../../components/headers/OtherNavbar";
import About from "./About";
import "../../../css/about.css";

export default function AboutPage() {
  const about = useRouteMatch();

  return (
    <div className={"about-page"}>
      <Switch>
        <Route path={`${about.path}`}>
          <OtherNavbar />
          <About />
        </Route>
      </Switch>
    </div>
  );
}
