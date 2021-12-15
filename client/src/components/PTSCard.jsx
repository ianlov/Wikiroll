import '../assets/css/ptscard.css';

const PTSCard = (props) => {
  return (
    <div 
      className="pts-card" 
      id={props.focus.what_type}
    >
      <h2>{props.focus.name}</h2>
    </div>
  )
}

export default PTSCard;