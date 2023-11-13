"Returns type PlaceByTextSearch[]";
export const GET = async (request, { params }) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API;

  const { searchParams } = new URL(request.url)

  const queryParam = searchParams.get("s")
  
  console.log("queryParam", queryParam);

  console.log(request);
  console.log(params.slug);

  const query = params.slug.map((item, index) => {
    if (index === 0) {
      return `${item}`;
    }
    return `+${item}`;
  });

  const finalQuery = query.join("")

  // const category = params.name;
  // console.log(params);
  // console.log(params.name);
  const category = "waterspots";
  const location = "england";
  const testquery = "watersports+wales";
  const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${finalQuery}&key=${apiKey}`;

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
