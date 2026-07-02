import Skillset from "./Skillset";
import Header from "./Header";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <Header />
        <div className="hero-top">
          <div className="hero-spacer"></div>
          <div className="hero-content">
            <p>hi there.</p>
            <span className="hero-title">
              I'm Beatriz Bautista.&nbsp;
              <i className="fa-solid fa-fish-fins"></i>
            </span>

            <p>front-end dev & UI/UX designer.</p>
            <div className="btn-row">
              <button className="hero-btn">
                <i className="fa-regular fa-file">&nbsp;</i>resume
              </button>
              <button className="hero-btn-circle">
                <i className="fa-brands fa-github"></i>
              </button>
              <button className="hero-btn-circle">
                <i className="fa-brands fa-telegram"></i>
              </button>
              <button className="hero-btn-circle">
                <i className="fa-solid fa-keyboard"></i>
              </button>
              <button className="hero-btn-circle">
                <i className="fa-solid fa-flag"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Skillset />

      <div
        className="container"
        style={{
          padding: "2rem",
          borderRadius: "0",
        }}
      >
        <h1 style={{ textAlign: "center" }}>What I do</h1>
        <div className="cntr-row" style={{ padding: "0rem 5rem" }}>
          <div
            style={{
              border: "2px solid var(--dark)",
              borderRadius: "20px",
              margin: "3rem",
              padding: "5rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
            dictum justo, vel lobortis sem. Mauris sagittis commodo auctor.
            Curabitur a lectus massa.
          </div>
          <div
            style={{
              border: "2px solid var(--dark)",
              borderRadius: "20px",
              margin: "3rem",
              padding: "5rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
            dictum justo, vel lobortis sem. Mauris sagittis commodo auctor.
            Curabitur a lectus massa.
          </div>
          <div
            style={{
              border: "2px solid var(--dark)",
              borderRadius: "20px",
              margin: "3rem",
              padding: "5rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
            dictum justo, vel lobortis sem. Mauris sagittis commodo auctor.
            Curabitur a lectus massa.
          </div>
        </div>
      </div>
    </>
  );
}
