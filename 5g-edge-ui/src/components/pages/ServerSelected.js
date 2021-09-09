import React from "react";
import "../../App.css";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { Button } from "semantic-ui-react";
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
          <div>
            <Link to="/service-endpoint-weather">
              <Button
                type="submit"
                color="teal"
                className="btn btn-primary btn-block"
              >
                Weather API
              </Button>
            </Link>
            <Link to="/service-endpoint-song">
              <Button
                type="submit"
                color="black"
                className="btn btn-primary btn-block"
              >
                Song API
              </Button>
            </Link>
            <Link to="/service-endpoint-service">
              <Button
                type="submit"
                color="teal"
                className="btn btn-primary btn-block"
              >
                Service API
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
