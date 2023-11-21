"Returns type PlaceByTextSearch[]";

export const GET = async (request, { params }) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API;
  const { searchParams } = new URL(request.url);

  // RETURN A STRING OF VALUES : Create an array from searchParams value, filter out null value and join into a string.
  const query = Array.from(searchParams.values()).filter(Boolean).join("+");

  console.log("QUERY",query);

  const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const results = data.results;
    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};