import "./PowerRankings.css";
import { RANKINGS } from "./Rankings";
const PowerRankings = () => {
  return (
    <div style={{ marginTop: 2 + "em" }}>
      <h2>Power Rankings</h2>
      <div className="products">
        {" "}
        {RANKINGS.map((ranking) => (
          <div>
            <p>{ranking.region}</p>
            <img src={ranking.image} alt={ranking.alt} />
            {/* todo - add startgg links to each player */}
            <div className="description"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PowerRankings;
