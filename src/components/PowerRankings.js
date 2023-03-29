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
            <img src={ranking.image} alt="rankingImages" />
            <p>{ranking.typedOut}</p>
            <div className="description"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PowerRankings;
