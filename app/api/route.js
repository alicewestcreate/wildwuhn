"Returns type PlaceByTextSearch[]"
export const GET = async (request) => {


const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API
const query = "watersports+wales";
const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${apiKey}`;



    try {
        const response = await fetch(apiUrl)
        if(!response.ok) {
            throw new Error("Network response was not ok")
        }
        const data = await response.json()
        const results = data.results
        return new Response(JSON.stringify(results), {status: 200})
        
    } catch (error) {
        
        return new Response("Failed to fetch all prompts", { status: 500})


    }
}
