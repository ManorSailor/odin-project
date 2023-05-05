import { oneOfType, arrayOf, element } from "prop-types";

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
  children: oneOfType([element, arrayOf(element)]).isRequired,
};

export default AppHeader;
