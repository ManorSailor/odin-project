/* eslint-disable react/prop-types */
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

export default AppHeader;
