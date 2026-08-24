import Header from "../components/Header";
import placeholder from "../assets/placeholder.jpg";

export default function Breadcrumber(){
    return(
    <>
        <Header />
        <div className="stack-row">
            <button className="tag">react</button>
            <button className="tag">css</button>
            <button className="tag">html</button>
            <button className="tag">typescript</button>
        </div>
        <h1>Breadcrumber<h1>
            <img src={placeholder}>
        <p>Lorem ipsum dolor sit amet...</p>
    </>
    );
}