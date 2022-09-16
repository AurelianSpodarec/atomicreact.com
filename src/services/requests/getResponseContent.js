const getResponseContent = async function (response) {
    if (!response) return;
    const contentType = response.headers.get('Content-Type')

    if (contentType) {
        if (contentType.match('image')) {
            return await response.blob()
        }

        if (contentType.match('application/json')) {
            return await response.json()
        }

        if (contentType.match('application/zip')) {
            return await response.blob()
        }
    }
}

export default getResponseContent;