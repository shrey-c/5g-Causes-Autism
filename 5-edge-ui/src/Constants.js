//-------------------------Service Registry URIs-----------------------------------------//

export const ServiceRegistryGET =
  "http://localhost:8084/ser/serviceendpoints/{Id}";
export const ServiceRegistryGETAll =
  "http://localhost:8084/ser/serviceendpoints";
export const ServiceRegistryGETbyDirection =
  "http://localhost:8084/ser/serviceendpoint/{direction}";
export const ServiceRegistryPOST = "http://localhost:8084/ser/serviceendpoints";
export const ServiceRegistryPUT =
  "http://localhost:8084/ser/serviceendpoints/{id}";
export const ServiceRegistryDELETE =
  "http://localhost:8084/ser/serviceendpoints/{id}";

//----------------------------Weather API URIs-------------------------------------------//

export const WeatherApiGET = "http://localhost:8082/wea/weather/{id}";
export const WeatherApiGETAll = "http://localhost:8082/wea/weather";
export const WeatherApiPOST = "http://localhost:8082/wea/weather";
export const WeatherApiPUT = "http://localhost:8082/wea/weather/{id}";
export const WeatherApiDELETE = "http://localhost:8082/wea/weather/{id}";

//----------------------------Song API URIs----------------------------------------------//

export const SongApiGET = "http://localhost:8083/son/song/{id}";
export const SongApiGETAll = "http://localhost:8083/son/songs";
export const SongApiGETbyWeather = "http://localhost:8083/son/song/{id}";
export const SongApiPOST = "http://localhost:8083/son/song";
export const SongApiPUT = "http://localhost:8083/son/song/{id}";
export const SongApiDELETE = "http://localhost:8083/son/song/{id}";

//----------------------------LogIn and SignUp URIs----------------------------------------------//

export const LogInGET = "http://localhost:3030/login";
export const LogInPOST = "http://localhost:3030/process_login";
export const UseGET = "http://localhost:3030/use";
export const SignUpGET = "http://localhost:3030/register";
export const SignUpPOST = "http://localhost:3030/process_register";
