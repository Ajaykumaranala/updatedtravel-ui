import "./Footerstyles.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Trippy</h1>
          <p>Choose your Favourite destination</p>
          <div>
            <a href="/">
              <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-instagram-square"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-behance-square"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-twitter-square"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Change log</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All versions</a>
        </div>
        <div>
          <h4>community</h4>
          <a href="/">Github</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Techincal</a>
          <a href="/">Help</a>
          <a href="/">Support</a>
          <a href="/">License</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of service</a>
          <a href="/">Privacy</a>
          <a href="/">Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
