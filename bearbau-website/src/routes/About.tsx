import placeholder from "../assets/placeholder.jpg";

export default function About() {
  return (
    <div className="container-row">
      <div className="col" style={{ textAlign: "center" }}>
        <img
          src={placeholder}
          style={{
            borderRadius: "100%",
            height: "100px",
            width: "100px",
          }}
        />
      </div>
      <div className="col">
        <h1>about me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo
          arcu id diam accumsan, in posuere eros aliquet. Donec dapibus posuere
          tristique. Morbi iaculis purus a leo blandit pharetra. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Nam tristique lacus sit amet dui vestibulum, eget maximus libero
          posuere.{" "}
        </p>
      </div>
    </div>
  );
}
