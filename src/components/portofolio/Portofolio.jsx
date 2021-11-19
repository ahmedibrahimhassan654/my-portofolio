import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portofolio.scss";
import { MERNPortfolio, ReactJs, NodeJsBackEnd } from "../../data";
const Portofolio = () => {
  const [selected, setSelected] = useState("Mern App");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "Mern App",
      title: "MERN App",
    },
    {
      id: "React Js App",
      title: "React Js App",
    },
    {
      id: "Node js App",
      title: "Node js App",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "Mern App":
        setData(MERNPortfolio);
        break;
      case "React Js App":
        setData(ReactJs);
        break;
      case "Node js App":
        setData(NodeJsBackEnd);
        break;

      default:
        setData(MERNPortfolio);
    }
  }, [selected]);
  return (
    <div className="Portofolio" id="portofolio">
      <h1>Portofolio</h1>

      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {console.log(data)}
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
            <a
              href={() => window.open(`${d.github}`, "_blank")}
              onClick={() => window.open(`${d.github}`, "_blank")}
            >
              Github
            </a>
            <div className="tec">
              <p>{d.skills}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portofolio;
