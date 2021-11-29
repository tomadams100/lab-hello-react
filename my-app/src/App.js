import "./App.css";
import ironhackLogo from "./images/ironhack-logo-xs.png";
import menuImage from "./images/menu-top-xs.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <img src={ironhackLogo} alt="Logo" />
        <img src={menuImage} alt="Menu" />
      </div>
      <div className="header">
        <h1>Say hello<br />to ReactJS</h1>
        <p>
          You will learn how to use <br /> the most popular frontend library,<br /> and
          become a super Ninja developer.
        </p>
        <p>
          <a href="#" className="button">
            Awesome!
          </a>
        </p>
      </div>
      <div className="features">
        <div>
          <img src={icon1} alt="Declarative" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div>
          <img src={icon2} alt="Components" />
          <h3>Components</h3>
          <p>Build encapsulated Components that manage their state</p>
        </div>
        <div>
          <img src={icon3} alt="Single-Way" />
          <h3>Single Way</h3>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div>
          <img src={icon4} alt="JSX" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
