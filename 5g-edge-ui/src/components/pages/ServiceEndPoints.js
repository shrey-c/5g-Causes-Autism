import React, { Component } from "react";
import "../../App.css";
import SwaggerUi, { presets } from "swagger-ui";
import "swagger-ui/dist/swagger-ui.css";
import { SwaggerUiSong } from "../../Constants";

//export default function ServiceEndPoints() {
//  React.useEffect(() => {
//    axios.get(WeatherApiGETAll).then((response) => {
//      console.log(response.data);
//    });
//  }, []);

//  return (
//    <div className="auth-wrapper">
//      <div className="auth-inner">
//        <form>
//          <h3>Service End Points</h3>

//          <div className="form-group">
//            <label>Weather Api End Points</label>
//          </div>

//          <div className="form-group">
//            <label>Song Api End Points</label>
//          </div>
//        </form>
//      </div>
//    </div>
//  );
//}

class SwaggerTest extends Component {
  componentDidMount() {
    SwaggerUi({
      dom_id: "#swaggerContainer",
      url: SwaggerUiSong,
      presets: [presets.apis],
    });
  }

  render() {
    return <div id="swaggerContainer" />;
  }
}

export default SwaggerTest;
