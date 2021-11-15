import "./menue.scss";
const Menue = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menue " + (menuOpen && "active")}>
      <ul>
        <li>
          <a href="#intro"> Home </a>
        </li>

        <li>
          <a href="#portofolio"> Portofolio </a>
        </li>
        <li>
          <a href="#works"> Works </a>
        </li>
        <li>
          <a href="#testimonial"> Testimonials </a>
        </li>
        <li>
          <a href="#contact"> Contact </a>
        </li>
      </ul>
    </div>
  );
};

export default Menue;
