import { Link } from "react-router-dom";
import classes from "../styles/Account.module.css";

const Account = () => {
  return (
    <div className={classes.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <Link to="/singup">Signup</Link> |<Link to="/login">Login</Link>
    </div>
  );
};

export default Account;
