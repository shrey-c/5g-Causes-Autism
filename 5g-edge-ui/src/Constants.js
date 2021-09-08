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

export const LogInGET = "http://localhost:3030/login";
export const LogInPOST = "http://localhost:3030/process_login";
export const UseGET = "http://localhost:3030/use";
export const SignUpGET = "http://localhost:3030/register";
export const SignUpPOST = "http://localhost:3030/process_register";

//----------------------------Swagger UI URIs----------------------------------------------//

export const SwaggerUiSong = "http://localhost:8083/v2/api-docs";
export const SwaggerUiWeather = "http://localhost:8082/v2/api-docs";
export const SwaggerUiService = "http://localhost:8084/v2/api-docs";

//----------------------------Other----------------------------------------------//

export const CityOptions = [
  { key: "af", value: "Afghanistan", flag: "af", text: "Afghanistan" },
  { key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
  { key: "al", value: "al", flag: "al", text: "Albania" },
  { key: "dz", value: "dz", flag: "dz", text: "Algeria" },
  { key: "as", value: "as", flag: "as", text: "American Samoa" },
  { key: "ad", value: "Andorra", flag: "ad", text: "Andorra" },
  { key: "ao", value: "ao", flag: "ao", text: "Angola" },
  { key: "ai", value: "ai", flag: "ai", text: "Anguilla" },
  { key: "ag", value: "ag", flag: "ag", text: "Antigua" },
  { key: "ar", value: "ar", flag: "ar", text: "Argentina" },
  { key: "am", value: "am", flag: "am", text: "Armenia" },
  { key: "aw", value: "aw", flag: "aw", text: "Aruba" },
  { key: "au", value: "au", flag: "au", text: "Australia" },
  { key: "at", value: "at", flag: "at", text: "Austria" },
  { key: "az", value: "az", flag: "az", text: "Azerbaijan" },
  { key: "bs", value: "bs", flag: "bs", text: "Bahamas" },
  { key: "bh", value: "bh", flag: "bh", text: "Bahrain" },
  { key: "bd", value: "bd", flag: "bd", text: "Bangladesh" },
  { key: "bb", value: "bb", flag: "bb", text: "Barbados" },
  { key: "by", value: "by", flag: "by", text: "Belarus" },
  { key: "be", value: "be", flag: "be", text: "Belgium" },
  { key: "bz", value: "bz", flag: "bz", text: "Belize" },
  { key: "bj", value: "bj", flag: "bj", text: "Benin" },
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
