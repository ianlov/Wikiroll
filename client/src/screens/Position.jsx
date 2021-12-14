import '../assets/css/position.css';

import Layout from "../layouts/Layout.jsx";
import PTSCard from "../components/PTSCard.jsx";
import DetailCard from "../components/DetailCard.jsx";
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
  const [show, setShow] = useState(false)

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
    setShow(false)
  }, [position.id])

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
          <Link 
            to="/edit"
            className="link-to-edit" 
          ><p>Edit</p></Link>
        </div>
        <div className="detail-container__trans-sub-card-container">
          {transitions.length ? <div className="detail-container__trans-sub-card-container__trans">
            <h2>Transitions from {position.name}</h2>
            {transitions.map(transition => (
              <DetailCard 
                focus={transition}
                show={show} 
                setShow={setShow}
              />
            ))}
          </div> : null}
          {submissions.length ? <div className="detail-container__trans-sub-card-container__sub">
            <h2>Submissions from {position.name}</h2>
            {submissions.map(submission => (
              <DetailCard 
                focus={submission} 
                show={show} 
                setShow={setShow}
              />
            ))}
          </div> : null}
        </div>
      </div>
    </Layout>
  )
}

export default Detail;