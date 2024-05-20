export async function orderRes(area, amount, resevationid) {
  let headersList = {
    "Content-Type": "application/json",
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1aXNvZ2p3dm50Zm94dWRvb2xuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NTE5NDUsImV4cCI6MjAyNjMyNzk0NX0.A4lJrT15zWBvm6Zm7nXbtq01CUOrjNct49-JgtQboeg",
    Prefer: "return=representation",
  };

  let bodyContent = JSON.stringify({
    area: area,
    amount: amount,
    resevationid: resevationid,
    orderconfirmed: false,
  });

  let response = await fetch(
    "https://yuisogjwvntfoxudooln.supabase.co/rest/v1/order_details",
    {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    }
  );

  const data = await response.json();

  console.log(data);
}
