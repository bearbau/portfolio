import Header from "../components/Header";
import placeholder from "../assets/placeholder.jpg";

export default function Breadcrumber(){
  return (
    <div
      className="container"
      style={{ padding: "5vh 10vh", borderRadius: "0px 0px 5rem 5rem" }}
    >
      <Header />
      <div className="container">
        <h1>Breadcrumber</h1>
        <p>This part is in construction! Please visit later.</p>
      </div>
    </div>
  );
}