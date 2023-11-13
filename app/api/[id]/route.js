"Returns type PlaceByIdSearch[]"

export const GET = async (request, { params }) => {

    // console.log(params.id)
    // console.log("inside request")

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API

    // console.log(apiKey)
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
