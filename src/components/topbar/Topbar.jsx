import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Genius .
          </a>
          <div className="itemContainer">
            {/* <Person className="icon" /> */}
            <span>+44 924 12 74</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>safak@genius.com</span>
          </div>
        </div>

        <div className="right">this is right</div>
      </div>
    </div>
  );
};

export default Topbar;
