import { oneOfType, arrayOf, element } from "prop-types";

function MainWrapper({ children }) {
  return <main className="max-w-7xl my-0 mx-auto p-4">{children}</main>;
}

MainWrapper.propTypes = {
  children: oneOfType([element, arrayOf(element)]).isRequired,
};

export default MainWrapper;
