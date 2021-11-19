import "./testimonial.scss";

const Testimonials = () => {
  return (
    <div className="testimonial" id="testimonial">
      <h1>Testimonials</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            <img src="assets/right-arrow.png" className="left" alt="" />
            <img
              className="user"
              src="https://w7.pngwing.com/pngs/27/972/png-transparent-pedagogy-massive-open-online-course-education-university-student-student.png"
              alt=""
            />
            <img className="right" src="assets/youtube.png" alt="" />
          </div>
          <div className="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            minima accusamus nisi molestias culpa sapiente, vel vitae sunt
            eligendi ullam eaque eius nulla blanditiis eveniet ratione similique
            perferendis consequuntur voluptas?
          </div>
          <div className="bottom">
            <h3>Mohamed </h3>
            <h4>Engineer</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
