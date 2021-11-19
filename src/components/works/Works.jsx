import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "React Js Developer",
      desc: "build buitiful and responsive user interface using React Js with Next js ",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      github: "https://github.com/ahmedibrahimhassan654/netflix-mern-app",
      skills: [
        "node js-",
        " react -",
        "bootstrab - ",
        "Next Js ",
        "ant design ",
      ],
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "MERN Stack Developer",
      desc: "building full stack application using MERN stack Technologies which user React Js in front end and node js +express js +Mongo Db",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
      skills: [
        "node js-",
        " react -",
        "bootstrab - ",
        "Next Js -",
        "ant design -",
        "mongo db -",
        "express js",
      ],
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Node js Back End developer ",
      desc: "building server side for business logic and implement it's API using express js web frame work and mongo db ",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      skills: ["node js-", "mongo db -", "express js -", "post man"],
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>

                  <a
                    href={() => window.open(`${d.github}`, "_blank")}
                    onClick={() => window.open(`${d.github}`, "_blank")}
                  >
                    Github
                  </a>
                </div>
              </div>

              <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
              <div className="tech">
                <h2>Technologies used</h2>
                <ol>
                  <li>{d.skills}</li>
                </ol>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
