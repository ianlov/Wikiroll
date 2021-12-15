import '../assets/css/splash.css';

import Layout from "../layouts/Layout.jsx";
import PTSCard from "../components/PTSCard.jsx";

import { Link } from "react-router-dom";

const Splash = (props) => {
  return (
    <>
      <div className="splash__splash-image" >
        <div className="splash__splash-image__text-container">
          <h1>"If you do <span className="red-text" >this</span>, I do <span className="blue-text" >that</span>,<br />and if you do <span className="blue-text" >that</span>, I do <span className="red-text" >this</span>... <br />forever" <br /><br />-Relson Gracie</h1>
        </div>
      </div>
      <Layout
        setSearchResults={props.setSearchResults}
        positions={props.positions}
      >
        <div className="splash" >
          <div className="splash__welcome" >
            <h1>Welcome to Wikiroll</h1>
            <div className="splash__welcome__description-container">
              <p>Wikiroll is an interactive library of Brazilian jiu-jitsu positions, transitions, and submissions. Begin your journey by selecting or searching a position. From there you will find the transitions and submissions that correspond to that position.</p>
              <p>Brazilian jiu-jitsu is a sport of limitless possibility, so if you can't find the submission or transition you are looking for, create one!</p>
            </div>
          </div>
          <div className="splash__positions" >
            <h2>Start with a position</h2>
            <div className="splash__positions__container">
              {props.positions.map(position => (
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/position/${position.id}`}
                  key={position.id}
                >
                  <PTSCard focus={position} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Splash;