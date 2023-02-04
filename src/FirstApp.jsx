import PropTypes from "prop-types";

export const FirstApp = ({ title, subtitle, name }) => {
  return (
    <>
      <h1>{title}</h1>
      {/* <code>{ JSON.stringify(newMessage) }</code> */}

      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};
FirstApp.defaultProps = {
  title: "No hay titulo",
  subtitle: "No hay subtitulo",
  name: "Jorge Romero",
};
