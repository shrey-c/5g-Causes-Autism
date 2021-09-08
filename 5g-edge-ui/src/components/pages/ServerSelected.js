import React from "react";
import "../../App.css";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { SwaggerUiSong } from "../../Constants";

export default function ServiceSelected() {
  //  const [swagger, setSwagger] = React.useState(null);

  //  React.useEffect(() => {
  //    axios.get(SwaggerUiSong).then((response) => {
  //      setSwagger(response.data);
  //    });
  //  }, []);

  let location = useLocation();
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form className="auth-inner-form">
          <h2>Region Selected: {location.state}</h2>
          <p>To view the Services in {location.state} server, proceed ahead</p>
          <Link to="/service-endpoint">
            <button
              type="submit"
              className="btn btn-primary btn-block"
              style={{ justifyContent: "center" }}
            >
              View Services
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
