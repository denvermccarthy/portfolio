import "./App.css";
import Project from "./Components/Project";
import { ReactComponent as DevImg } from "./dev.svg";

function App() {
  return (
    <div className="App">
      <header>
        {" "}
        <nav>
          {" "}
          <ul>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="hero">
        <div className="hero-left">
          <h1>Hello! My name is Denver,</h1>
          <h2>
            {" "}
            I'm a <strong>Full Stack Developer</strong> based in Portland, OR
            🌧️🌲{" "}
          </h2>
        </div>
        <DevImg className="hero-img" />
      </div>
      <section className="about-me">
        <h2>About Me</h2>
        <h3>Summary</h3>
        <p>
          I'm a Full Stack developer coming from a background in the food
          service industry. I have experience working with complex React /
          Express applications in addition to standard HTML, CSS, and vanilla
          JavaScript projects. I'm detail-oriented and passionate about
          programming, so I love finding performance optimizations and fixing
          bugs. When I'm not coding, I love to cook, get outside, or work on a
          puzzle.
        </p>
        <h3>Tech Skills</h3>
        <div className="tech-skills">
          <div>Front:</div>
          <ul>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>MUI</li>
          </ul>
          <div>Back:</div>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>Supabase</li>
          </ul>
          <div>Other tech:</div>
          <ul>
            <li>Git / Github</li>
            <li>Jest, React Testing Library</li>
            <li>Mapbox</li>
          </ul>
        </div>
      </section>
      <section className="my-projects">
        <ul>
          <li>
            <Project />
          </li>
          <li>
            <Project />
          </li>{" "}
          <li>
            <Project />
          </li>
        </ul>
      </section>
      <div className="contact">
        <h2>Interested in working with me?</h2>
        <p>
          You can email me at <a href="">dmichaelspdx@gmail.com</a> or reach out
          to me on <a href="">LinkedIn</a>.
        </p>
      </div>
    </div>
  );
}

export default App;
