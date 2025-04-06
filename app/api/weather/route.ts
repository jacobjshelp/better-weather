const url =
  "https://api.open-meteo.com/v1/forecast?latitude=56.1518&longitude=10.2064&hourly=precipitation_probability,precipitation&timezone=Europe%2FBerlin";

export async function GET() {
  const response = await fetch(url);
  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
