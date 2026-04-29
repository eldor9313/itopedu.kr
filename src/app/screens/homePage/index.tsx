import HomeNavbar from "../../components/headers/HomeNavbar";
import Statistics from "./Statistics";
import Visas from "./Visas";
import License from "./License";
import VisaStatistic from "./VisaStatistic";
import Branches from "./Branches";
import Partners from "./Partners";
import "../../../css/home.css";
import FAQ from "./Faq";

export default function HomePage() {
  console.log(process.env.REACT_APP_API_URL);

  return (
    <div className={"homepage"}>
      <HomeNavbar />
      <Statistics />
      <Branches />
      <VisaStatistic />
      <Partners />
      <License />
      <Visas />
      <FAQ />
    </div>
  );
}
