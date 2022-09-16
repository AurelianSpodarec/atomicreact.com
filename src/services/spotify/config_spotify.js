// @API Docs: https://developer.spotify.com/documentation/web-api/

const API_URL = "https://api.spotify.com";
const API_VERSION = "v1"
const API_ACCOUNT_ID = process.env.REACT_APP_CLIENT_ID
const API_TOKEN = process.env.REACT_APP_CLIENT_SECRET

export default {
    API_URL,
    API_VERSION,
    API_ACCOUNT_ID,
    API_TOKEN
}