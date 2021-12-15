import '../assets/css/detailcard.css';

import { useState } from "react";
import { Link } from "react-router-dom";

const DetailCard = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div 
      className={show ? "detail-card-open" : "detail-card"} 
      id={props.focus.what_type}
      onClick={() => setShow(!show)}
    >
      <h2>{props.focus.name}</h2>
      {show ? 
        <div className="detail-card__description-container">
          <img src={props.focus.img_url} alt={props.focus.name} />
          <p>{props.focus.description}</p>
          {props.focus.what_type === 'transition' ? 
            <Link 
              to={`/position/${props.focus.finish_id}`}
              className="detail-card__description-container__link" 
            >
              <p>Next Position</p>
            </Link>
          : null}
          <p 
            className="link-to-edit"
            onClick={() => {props.setIsVisible(true); props.setEditFocus(props.focus)}}
          >Edit</p>
        </div>
      : null }
    </div>
  )
}

export default DetailCard;