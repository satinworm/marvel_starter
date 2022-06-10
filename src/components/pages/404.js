import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";
import "./404.scss";

const Page404 = () => {
   return (
      <div>
         <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "24px" }}>Page doesn't exist</p>
         <ErrorMessage />
         <Link
            className="backtomain"
            style={{
               display: "block",
               textAlign: "center",
               fontWeight: "bold",
               fontSize: "24px",
               marginTop: "30px",
            }}
            to="/"
         >
            Back to main page
         </Link>
      </div>
   );
};

export default Page404;
