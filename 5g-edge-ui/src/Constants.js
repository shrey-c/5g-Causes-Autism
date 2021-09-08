//-------------------------Service Registry URIs-----------------------------------------//

export const ServiceRegistryGET =
  "http://localhost:8084/service-api/serviceendpoints-id/{Id}";
export const ServiceRegistryGETAll =
  "http://localhost:8084/service-api/serviceendpoints";
export const ServiceRegistryGETbyDirection =
  "http://localhost:8084/service-api/serviceendpoints-direction/{direction}";
export const ServiceRegistryPOST =
  "http://localhost:8084/service-api/serviceendpoints";
export const ServiceRegistryPUT =
  "http://localhost:8084/service-api/serviceendpoints-id/{id}";
export const ServiceRegistryDELETE =
  "http://localhost:8084/service-api/serviceendpoints-id/{id}";

//----------------------------Weather API URIs-------------------------------------------//

export const WeatherApiGET = "http://localhost:8082/weather-api/weather/{id}";
export const WeatherApiGETAll = "http://localhost:8082/weather-api/weather";
export const WeatherApiPOST = "http://localhost:8082/weather-api/weather";
export const WeatherApiPUT = "http://localhost:8082/weather-api/weather/{id}";
export const WeatherApiDELETE =
  "http://localhost:8082/weather-api/weather/{id}";

//----------------------------Song API URIs----------------------------------------------//

export const SongApiGET = "http://localhost:8083/song-api/song-id/{id}";
export const SongApiGETAll = "http://localhost:8083/song-api/song";
export const SongApiGETbyWeather =
  "http://localhost:8083/song-api/songweather/{weather}";
export const SongApiPOST = "http://localhost:8083/song-api/song";
export const SongApiPUT = "http://localhost:8083/song-api/song-id/{id}";
export const SongApiDELETE = "http://localhost:8083/song-api/song-id/{id}";

//----------------------------LogIn and SignUp URIs----------------------------------------------//

export const API_BASE_URL = "http://localhost:8089";
export const ACCESS_TOKEN = "accessToken";

export const OAUTH2_REDIRECT_URI = "http://localhost:3000/oauth2/redirect";

export const GOOGLE_AUTH_URL =
  API_BASE_URL + "/oauth2/authorize/google?redirect_uri=" + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL =
  API_BASE_URL +
  "/oauth2/authorize/facebook?redirect_uri=" +
  OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL =
  API_BASE_URL + "/oauth2/authorize/github?redirect_uri=" + OAUTH2_REDIRECT_URI;

//----------------------------Swagger UI URIs----------------------------------------------//

export const SwaggerUiSong = "http://localhost:8083/v2/api-docs";
export const SwaggerUiWeather = "http://localhost:8082/v2/api-docs";
export const SwaggerUiService = "http://localhost:8084/v2/api-docs";

//----------------------------Other----------------------------------------------//

export const CityOptions = [
  { key: "af", value: "Port Blair", text: "Port Blair" },
  { key: "ax", value: "Amaravati", text: "Amaravati" },
  { key: "al", value: "Kolkata", text: "Kolkata" },
  { key: "dz", value: "Lucknow", text: "Lucknow" },
  { key: "as", value: "Patna", text: "Patna" },
  { key: "ad", value: "Daman", text: "Daman" },
  { key: "ao", value: "Chandigarh", text: "Chandigarh" },
  { key: "ai", value: "New Delhi", text: "New Delhi" },
  { key: "ag", value: "Gandhinagar", text: "Gandhinagar" },
  { key: "ar", value: "Shimla", text: "Shimla" },
  { key: "am", value: "Bangalore", text: "Bangalore" },
  {
    key: "aw",
    value: "Thiruvananthapuram",
    text: "Thiruvananthapuram",
  },
  { key: "au", value: "Leh", text: "Leh" },
  { key: "at", value: "Kavaratti", text: "Kavaratti" },
  { key: "az", value: "Mumbai", text: "Mumbai" },
  { key: "bs", value: "Shillong", text: "Shillong" },
  { key: "bh", value: "Puducherry", text: "Puducherry" },
  { key: "bd", value: "Jaipur", text: "Jaipur" },
  { key: "bb", value: "Gangtok", text: "Gangtok" },
  { key: "by", value: "Hyderabad", text: "Hyderabad" },
  { key: "be", value: "Chennai", text: "Chennai" },
  { key: "bz", value: "Agartala", text: "Agartala" },
  { key: "bj", value: "Kohima", text: "Kohima" },
];

export const ServerOptions = [
  {
    key: "North",
    text: "North",
    value: "North",
  },
  {
    key: "East",
    text: "East",
    value: "East",
  },
  {
    key: "South",
    text: "South",
    value: "South",
  },
  {
    key: "West",
    text: "West",
    value: "West",
  },
];
