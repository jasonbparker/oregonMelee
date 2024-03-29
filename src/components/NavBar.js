import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <svg
          id="svg2"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          height="256"
          width="256"
          viewBox="0 0 256 256"
        >
          <metadata id="metadata7"></metadata>
          <path
            id="mainsymbolpath"
            style={{ opacity: 0.5 }}
            d="m 128,38.17189 c -3.96774,0 -7.88276,0.26235 -11.71455,0.76112 l 0,107.94597 99.54061,0 c 1.29999,-6.08286 1.98552,-12.39119 1.98552,-18.86242 0,-49.6066 -40.20496,-89.84467 -89.81158,-89.84467 z m -57.282183,20.61629 c -19.888889,16.47529 -32.529397,41.38427 -32.529397,69.22838 0,6.46737 0.689185,12.78339 1.985518,18.86242 l 30.543879,0 0,-88.0908 z M 45.865755,164.45081 c 5.665734,12.76396 14.229794,23.96191 24.852062,32.76104 l 0,-32.76104 -24.852062,0 z m 70.419695,0 0,52.61621 c 3.83198,0.4988 7.7466,0.7611 11.71455,0.7611 36.63278,0 68.12716,-21.93201 82.10115,-53.37731 l -93.8157,0 z"
          />
        </svg>
      </Link>
      <h1>Oregon Melee</h1>
      <div>
        <ul id="navbar">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li>
            <NavLink to="/power-rankings">Power Rankings</NavLink>
          </li>
          <li>
            <NavLink to="https://docs.google.com/spreadsheets/d/17kKq9bWqRY7Lxryjsxv2utC4bsonoRViDs_s5_1-R28/edit?usp=sharing" target="_blank">Slippi Rankings</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
