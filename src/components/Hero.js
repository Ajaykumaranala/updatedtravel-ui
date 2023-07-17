import "./Herostyles.css";
function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImg} alt="img" />
      </div>
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p> {props.text}</p>
        <a href={props.url} className={props.btnclass}>
          {props.butntext}
        </a>
      </div>
    </>
  );
}
export default Hero;
