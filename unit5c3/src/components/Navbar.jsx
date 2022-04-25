import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="nav-home" style={{margin:"10px"}} to="/">
        Home
      </Link>
      <Link className="nav-list" style={{margin:"10px"}} to="/employees">
        Employee List
      </Link>
      <Link className="nav-admin" style={{margin:"10px"}} to="/admin">
        Admin
      </Link>
      {/* Show Either logout or login based on auth context. DO NOT show both */}
      <Link className="nav-logout" style={{margin:"10px"}} to="/logout">
        Logout
      </Link>

      <Link className="nav-login" style={{margin:"10px"}} to="/login">
        Login
      </Link>
    </div>
  );
};
