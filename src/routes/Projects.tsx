import Header from "../components/Header";

export default function Projects() {
  return (
    <>
      <div
        className="container"
        style={{ padding: "5vh 10vh", borderRadius: "0px 0px 5rem 5rem" }}
      >
        <Header />
        <div className="container" style={{ alignItems: "center" }}>
          <i
            className="fa-solid fa-road-barrier"
            style={{ fontSize: "5rem", color: "var(--primary)" }}
          ></i>
          <br />
          <p>This part is in construction! Please visit later.</p>
        </div>
      </div>
    </>
  );
}
