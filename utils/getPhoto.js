export const getPhoto = (ref) => {

    const apiKey = `AIzaSyDXki3QBRM9cnzJ7fxL3VDEY9xbLsalYfc`
    const urlHead = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${ref}&key=${apiKey}`

    return urlHead
}



