import "./intro.css";
export default function Intro() {
  return (
    <>
      <div className="intro">
        <img src="/banner1.jpg" alt="" />
        {/* <img src="../../public/banner2.jpg" alt="" /> */}
        <div className="intro-content">
          <h1
            style={{
              color: "blueviolet",
            }}
          >
            BUILD YOUR <br />
            <span style={{ color: "white" }}>RESUME</span>
          </h1>
          <p>
            Build a professional CV in minutes with our easy-to-use CV Builder.
            Choose a template, add your details, and download your resume—no
            design skills needed.
          </p>
          <div className="seeMoreButton">
            <p style={{ textAlign: "center" }}>SEE MORE</p>
            <div style={{ textAlign: "center" }}>
              <div className="first-arrow">
                <span className="arrow-left"></span>
                <span className="arrow-right"></span>
              </div>
              <div className="second-arrow">
                <span className="arrow-left"></span>
                <span className="arrow-right"></span>
              </div>
              <div className="third-arrow">
                <span className="arrow-left"></span>
                <span className="arrow-right"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
