import Skillset from "./Skillset";

export default function Hero() {
  return (
    <>
      <div className="hero-top">
        <div className="hero-spacer"></div>
        <div className="hero-content">
          <span className="hero-title">
            I'm Beatriz Bautista.&nbsp;
            <i className="fa-solid fa-fish-fins"></i>
          </span>

          <p>front-end dev & UI/UX designer.</p>
          <div className="btn-row">
            <button className="link">
              <i className="fa-regular fa-file">&nbsp;</i>resume
            </button>
            <button className="link-circle">
              <i className="fa-brands fa-github"></i>
            </button>
            <button className="link-circle">
              <i className="fa-brands fa-telegram"></i>
            </button>
            <button className="link-circle">
              <i className="fa-solid fa-keyboard"></i>
            </button>
            <button className="link-circle">
              <i className="fa-solid fa-flag"></i>
            </button>
          </div>
        </div>
      </div>
      <Skillset />
    </>
  );
}
