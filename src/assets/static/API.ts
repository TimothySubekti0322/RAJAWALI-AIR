type ENV = "development" | "production";

const API_DEVELOPMENT = "";
const API_PRODUCTION = "";

const ENVIRONMENT: ENV = "development";

const API_URL =
  ENVIRONMENT === "development" ? API_DEVELOPMENT : API_PRODUCTION;

export default API_URL;
