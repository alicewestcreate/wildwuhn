export const GET = async (request, { params }) => {

    console.log(params.id)
    console.log("inside request")

    const apiKey = process.env.GoogleAPI
    // const query = "lakes+wales";
    // const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${apiKey}`;
    const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${params.id}&key=${apiKey}`
    
        try {
            const response = await fetch(apiUrl)
            if(!response.ok) {
                throw new Error("Network response was not ok")
            }
            const data = await response.json()
            const result = data.result
            return new Response(JSON.stringify(result), {status: 200})
            
        } catch (error) {
            
            return new Response("Failed to fetch all prompts", { status: 500})
    
    
        }
    }
    // https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AcJnMuElP75L0j7ZuKQG97AGGPDHevPgtxqrhPdJJ2EEj-bzCA-T8dvv2xE8dGIjBFVFsju97dYd1eY3XRHCyNGMxZOcwNXu7WHOvKTMKRuztQ17KpHm6VCU_ewxYmGdD4uiNeXgpq7Ap9PgDA5swHdUvalhFdK0UknZcHz-BdrS7eL_wOLi&key=AIzaSyDXki3QBRM9cnzJ7fxL3VDEY9xbLsalYfc


    
    // https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AcJnMuHJHl51TY9NrhUqNRWg7jIoLAI1n-qh63bL_mbNMbEMxUSHaz6kkLAIKCuE-uqdF6CZIP6INDaJ1xgIHxHyAURPlIM6Yoy-KAClg1442viR6bX9eDYxUT5sYVv7X2HmYWczTLwl8ot2LcLVvg36DFlYDziAnFcJeoL6wL5kxHC5z-MD&key=AIzaSyDXki3QBRM9cnzJ7fxL3VDEY9xbLsalYfc
