const getToken = async () => {
    const token = localStorage.getItem('authToken');
    const tokenExpiry = localStorage.getItem('tokenExpiry');
    if (token && tokenExpiry > Date.now()) return token;

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: "POST",
        credentials: 'include',
        body: 'grant_type=client_credentials',
        headers: {  
            'Authorization': 'Basic ' + btoa(process.env.REACT_APP_CLIENT_ID + ':' + process.env.REACT_APP_CLIENT_SECRET),
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    const content = await response.json()

    if(!content) return console.log("getToken: Data is:", content) 
    const { access_token, expires_in, token_type } = content;

    const expiry = Date.now() + expires_in * 1000 - 100;
    localStorage.setItem('tokenExpiry', expiry);

    const result = `${token_type} ${access_token}`;
    localStorage.setItem('authToken', result);

    return result;
};

export default getToken;