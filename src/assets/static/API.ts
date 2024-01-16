const API_DEVELOPMENT = "";
const API_PRODUCTION = "https://rajawali-production.up.railway.app/api";

const ENVIRONMENT: string = "production"; // Change the value to either "development" or "production"

const API_URL =
  ENVIRONMENT === "development" ? API_DEVELOPMENT : API_PRODUCTION;

export default API_URL;
