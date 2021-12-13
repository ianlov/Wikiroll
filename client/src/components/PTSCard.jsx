import '../assets/css/ptscard.css';

const PTSCard = (props) => {
  return (
    <div className="pts-card" >
      <h2>{props.position}</h2>
    </div>
  )
}

export default PTSCard;