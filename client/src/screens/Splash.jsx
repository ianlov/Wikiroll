import '../assets/css/splash.css';

import Layout from "../layouts/Layout.jsx";
import PTSCard from "../components/PTSCard.jsx";

import { Link } from "react-router-dom";

const positions = [
  "Open Guard",
  "Closed Guard",
  "Half Guard",
  "Butterfly Guard",
  "Side Control",
  "Turtle",
  "Mount",
  "Knee On Belly",
  "Back Control"
]

const Splash = () => {
  return (
    <>
    <div className="splash__splash-image" >
      <h1>"If you do this, I do that, and if you do that, I do this, <br/>forever" <br/>-Relson Gracie</h1>
    </div>
    <Layout>
      <div className="splash__welcome" >
        <h1>Welcome to Wikiroll</h1>
        <div className="splash__welcome__description-container">
         <p>t was a warm night at Castle Caladan, and the ancient pile of stone that had served the Atreides family as home for twenty-six generations bore that cooled-sweat feeling it acquired before a change in the weather. The old woman was let in by the side door down the vaulted passage by Paul's room and she was allowed a moment to peer in at him where he lay in his bed. By the half-light of a suspensor lamp, dimmed and hanging near the floor, the awakened boy could see a bulky female shape at his door, standing one step ahead of his mother. The old woman was a witch shadow - hair like matted spiderwebs, hooded 'round darkness of features, eyes like glittering jewels.</p>
        </div>
      </div>
      <div className="splash__positions" >
        <h2>Start with a position</h2>
        {positions.map(position => (
          <Link to="/">
            <PTSCard position={position} />
          </Link>
        ))}
      </div>
    </Layout>
    </>
  )
}

export default Splash;