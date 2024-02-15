const LearnMoreCTA = ({ label, newWindow = true, url }) => {
  return newWindow ? (
    <a
      className="button button-secondary"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  ) : (
    <a className="button button-secondary" href={url}>
      {label}
    </a>
  );
};

export default LearnMoreCTA;
