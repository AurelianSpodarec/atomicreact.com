// @API Docs: https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-artists-related-artists
//=============================================================
import SpotifyRequest from "services/spotify/requests/request";

async function getArtists() {
    return await SpotifyRequest('search?q=e&type=artist', "GET")
}