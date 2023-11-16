export async function getOpenGraphData(url: string) {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/open-graph`, {
      method: 'POST',
      body: JSON.stringify({ url }),
      headers: { 'Content-Type': 'application/json' },
    });

    return await data.json();
  } catch (e) {
    console.log(e);
  }
}
