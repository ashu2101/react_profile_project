import React from "react";
import "../css/Home.css";
import react from "../Images/ract.png";
import html from "../Images/html5.png";
import css from "../Images/css.png";
import bootStrap from "../Images/bootStrap.png";

function Home() {
  return (
    <div className="home-bg">
      <div className="container justify-content-center text-center p-4 home-bg-color">
        <div className="row my-3">
          <div className="col">
            <h1 className="heading">Web Development</h1>
            <p className="detail">
              This website is created as an learning opportunity and to showcase
              my learning. Different technologies have been implemented in
              creating this site.
            </p>
          </div>
        </div>
        <div className="row mt-3 ">
          <div className="col-md-6">
            <div className="tech react">
              <img src={react} alt="react" style={{ width: 45, height: 45 }} />
              <strong>React</strong>
            </div>
          </div>
          <div className="col-md-6">
            <div className="tech html">
              <img src={html} alt="html" style={{ width: 45, height: 45 }} />
              <strong>Html 5</strong>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="tech css">
              <img src={css} alt="css" style={{ width: 45, height: 45 }} />
              <strong>CSS 3</strong>
            </div>
          </div>
          <div className="col-md-6">
            <div className="tech bootstrap">
              <img
                src={bootStrap}
                alt="bootStrap"
                style={{ width: 45, height: 45 }}
              />
              <strong>Boot Strap</strong>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
