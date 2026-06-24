import notebook from "../assets/notebook.mp4";
export default function Blog() {
  return (
    <>
      <div className="container-row">
        <div
          className="col"
          style={{ flex: "75%", padding: "0vh 15vh 0vh 15vh" }}
        >
          <span className="title">notebook: stats for nerds</span>
          <span className="subtitle">
            a mini-blog for CTF solutions, bash scripting, automation, cybersec
            resources, etc.
          </span>
          <div>
            <button className="link">
              <i className="fa-brands fa-telegram"></i>&nbsp;telegram channel
            </button>
          </div>
        </div>
        <div className="col" style={{ flex: "25%", padding: "0px" }}>
          <video
            src={notebook}
            style={{ height: "50vh", borderRadius: "20px" }}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </>
  );
}
