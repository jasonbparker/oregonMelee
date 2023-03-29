import { Link } from "react-router-dom";
import "./Events.css";
function Events() {
  return (
    <div style={{marginTop:2+'em'}}>
      <h2 style={{color:'white'}}>Events</h2>
      <div className="card" style={{width: 18+'rem'}}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="https://www.start.gg/adam" target="_blank" className="btn btn-primary">ASS</Link>
        </div>
      </div>
    </div>
  );
}

export default Events;
