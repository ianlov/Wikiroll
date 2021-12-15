import '../assets/css/position.css';

import Layout from "../layouts/Layout.jsx";
import PTSCard from "../components/PTSCard.jsx";
import DetailCard from "../components/DetailCard.jsx";
import EditModal from "../components/EditModal.jsx";
import { findPositionWithId } from "../utilities/find.js";
import { getTransitions } from "../services/transitions.js";
import { getSubmissions } from "../services/submissions.js";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = (props) => {
  const { id } = useParams();
  const position = findPositionWithId(Number(id), props.positions)[0];

  const [transitions, setTransitions] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [editFocus, setEditFocus] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // get one position
  }, [])

  useEffect(() => {
    const transitionFetch = async () => {
      const allTransitions = await getTransitions(position.id);
      setTransitions(allTransitions);
    }
    const submissionFetch = async () => {
      const allSubmissions = await getSubmissions(position.id);
      setSubmissions(allSubmissions);
    }
    transitionFetch()
    submissionFetch()
  }, [position.id])

  return (
    <Layout 
      setSearchResults={props.setSearchResults} 
      positions={props.positions}
    >
      <EditModal 
        setIsVisible={setIsVisible}
        isVisible={isVisible}
        editFocus={editFocus}
      />
      <div className="detail-container">
        <img src={position.img_url} alt={position.name}/>
        <div className="detail-container__main-card">
          <PTSCard focus={position} />
        </div>
        <div className="detail-container__description">
          <p>{position.description}</p>
          <p 
            className="link-to-edit"
            onClick={() => {setEditFocus(position); setIsVisible(true)}}
          >Edit</p>
        </div>
        <div className="detail-container__trans-sub-card-container">
          {transitions.length ? <div className="detail-container__trans-sub-card-container__trans">
            <h2>Transitions from {position.name}</h2>
            {transitions.map(transition => (
              <DetailCard 
                focus={transition} 
                setIsVisible={setIsVisible}
                setEditFocus={setEditFocus}
              />
            ))}
          </div> : null}
          {submissions.length ? <div className="detail-container__trans-sub-card-container__sub">
            <h2>Submissions from {position.name}</h2>
            {submissions.map(submission => (
              <DetailCard 
                focus={submission} 
                setIsVisible={setIsVisible} 
                setEditFocus={setEditFocus}
              />
            ))}
          </div> : null}
        </div>
      </div>
    </Layout>
  )
}

export default Detail;