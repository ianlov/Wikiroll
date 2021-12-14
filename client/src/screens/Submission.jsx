import '../assets/css/detail.css';

import Layout from "../layouts/Layout.jsx";
import PTSCard from "../components/PTSCard.jsx";
import { findPositionWithId } from "../utilities/find.js";
import { getTransitions } from "../services/transitions.js";
import { getSubmissions } from "../services/submissions.js";

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = (props) => {
  const { id } = useParams();
  const position = findPositionWithId(Number(id), props.positions)[0];

  const [transitions, setTransitions] = useState([]);
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const transitionFetch = async () => {
      const allTransitions = await getTransitions(position.id);
      setTransitions(allTransitions);
    }
    transitionFetch()
    const submissionFetch = async () => {
      const allSubmissions = await getSubmissions(position.id);
      setSubmissions(allSubmissions);
    }
    submissionFetch()
  }, [])

  return (
    <Layout 
      setSearchResults={props.setSearchResults} 
      positions={props.positions}
    >
      <div className="detail-container">
        <img src={position.img_url} alt={position.name}/>
        <div className="detail-container__main-card">
          <PTSCard focus={position} />
        </div>
        <div className="detail-container__description">
          <p>{position.description}</p>
        </div>
        <div className="detail-container__trans-sub-card-container">
          {transitions.length ? <div className="detail-container__trans-sub-card-container__trans">
            <h2>Transitions from {position.name}</h2>
            {transitions.map(transition => (
              <Link
                to={`/transition/${transition.id}`}
                key={transition.id}
              >
                <PTSCard focus={transition} />
              </Link>
            ))}
          </div> : null}
          {submissions.length ? <div className="detail-container__trans-sub-card-container__sub">
            <h2>Submissions from {position.name}</h2>
            {submissions.map(submission => (
              <Link 
                to={`/submission/${submission.id}`}
                key={submission.id}
              >
                <PTSCard focus={submission} />
              </Link>
            ))}
          </div> : null}
        </div>
      </div>
    </Layout>
  )
}

export default Detail;