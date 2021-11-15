import "./menue.scss";
const Menue = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menue " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro"> Home </a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a href="#portofolio"> Portofolio </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works"> Works </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonial"> Testimonials </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact"> Contact </a>
        </li>
      </ul>
    </div>
  );
};

export default Menue;
