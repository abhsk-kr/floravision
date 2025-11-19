import { FullStarIcon } from "@/assets";

const Stars = ({ star, size = 4, className }) => (
  <div className={("flex " + className).trim()}>
    {Array.from({ length: star }).map((_) => (
      <img src={FullStarIcon} alt="star" className={`size-${size}`} />
    ))}
  </div>
);

export default Stars;
