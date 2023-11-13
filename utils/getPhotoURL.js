export const getPhotoURL = (ref) => {

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API
    const urlHead = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${ref}&key=${apiKey}`
    return urlHead
}



