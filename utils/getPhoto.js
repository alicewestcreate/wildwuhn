export const getPhoto = (ref) => {

    const apiKey = process.env.GoogleAPI
    const urlHead = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${ref}&key=${apiKey}`

    return urlHead
}



