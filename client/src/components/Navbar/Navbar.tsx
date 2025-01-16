import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div>
        <Link to="/js"> Javascript Quiz</Link>
      </div>

      <div>
        <Link to="/react"> React Quiz</Link>
      </div>

      <div>
        <Link to="/login"> Login</Link>
      </div>
    </div>
  );
};
