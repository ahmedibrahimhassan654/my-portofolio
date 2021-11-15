import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import HomeIcon from "@mui/icons-material/Home";
const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Genius .
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>002 01065619208 </span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span className="data">ahmedibrahimhassan654@gmail.com</span>
          </div>
          <div className="itemContainer">
            <HomeIcon className="icon" />
            <span className="data">Egypt </span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
