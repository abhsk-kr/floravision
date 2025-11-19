const ClippedCard = ({ children, className }) => (
  <div className={("rounded-3xl border border-white bg-white/5 " + className).trim()}>
    <div className="rounded-xl">{children}</div>
  </div>
);

export default ClippedCard;
