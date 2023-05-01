import PropType from "prop-types";

function AppHeader({ children }) {
  return (
    <div className="navbar bg-base-100 justify-between">
      <a href="/" className="btn btn-ghost normal-case text-xl">
        Memory Card
      </a>
      {children}
    </div>
  );
}

AppHeader.propTypes = {
  children: PropType.oneOfType([
    PropType.element,
    PropType.arrayOf(PropType.element),
  ]).isRequired,
};

export default AppHeader;
