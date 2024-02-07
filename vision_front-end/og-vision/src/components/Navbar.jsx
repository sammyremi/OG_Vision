import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar shadow-md">
        <div className="navbar-start">
          <h1>Logo</h1>
        </div>
        <div className="navbar-center">
          <div role="tablist" className="tabs tabs-lg">
            <ul>
              <Link to={"/"}>
                <input
                  type="radio"
                  name="my_tabs_1"
                  role="tab"
                  className="tab"
                  aria-label="Dashboard"
                />
              </Link>
              <Link to={"/screenshots"}>
                <input
                  type="radio"
                  name="my_tabs_1"
                  role="tab"
                  className="tab"
                  aria-label="Screenshots"
                  checked
                />
              </Link>
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="avatar online placeholder">
                  <div className="bg-neutral text-neutral-content rounded-full w-10">
                    <span className="text-xl">AI</span>
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
