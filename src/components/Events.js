import { Link } from "react-router-dom";
import "./Events.css";
function Events() {
  return (
    <div style={{ marginTop: 2 + "em" }}>
      <h2 style={{ color: "white" }}>Events</h2>
      {/* <div className="card" style={{ width: 18 + "rem" }}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p> */}
      <div>
        <Link
          to="https://www.start.gg/adam"
          target="_blank"
          className="btn btn-primary"
        >
          ASS Start.gg
        </Link>
      </div>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=d7798b839a87cb86e5704e0cb099b9daa77ffc2bce9abb18fb621b1519c629f2%40group.calendar.google.com&ctz=America%2FLos_Angeles"
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
        title="eventCalendar"
      ></iframe>
      {/* </div>
      </div> */}
    </div>
  );
}

export default Events;
