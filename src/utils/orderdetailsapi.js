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
  });

  let response = await fetch(
    "https://yuisogjwvntfoxudooln.supabase.co/rest/v1/order_details",
    {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    }
  );

  const data = response.json();

  return data;
}

export async function getOrder(param) {
  const headersList = {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1aXNvZ2p3dm50Zm94dWRvb2xuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NTE5NDUsImV4cCI6MjAyNjMyNzk0NX0.A4lJrT15zWBvm6Zm7nXbtq01CUOrjNct49-JgtQboeg",
  };
  const response = await fetch(
    "https://yuisogjwvntfoxudooln.supabase.co/rest/v1/order_details?resevationid=eq." +
      param,
    {
      headers: headersList,
    }
  );

  return response.json();
}

export async function postTicketHolderInfo(props) {
  let headersList = {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1aXNvZ2p3dm50Zm94dWRvb2xuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NTE5NDUsImV4cCI6MjAyNjMyNzk0NX0.A4lJrT15zWBvm6Zm7nXbtq01CUOrjNct49-JgtQboeg",
    "Content-Type": "application/json",
    Prefer: "return=representation",
  };

  let bodyContent = JSON.stringify(props);

  let response = await fetch(
    "https://yuisogjwvntfoxudooln.supabase.co/rest/v1/ticket_holders",
    {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    }
  );

  const data = response.json();

  return data;
}

export async function updateOrder(twopers, threepers, shelter, orderid) {
  let headersList = {
    "Content-Type": "application/json",
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1aXNvZ2p3dm50Zm94dWRvb2xuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NTE5NDUsImV4cCI6MjAyNjMyNzk0NX0.A4lJrT15zWBvm6Zm7nXbtq01CUOrjNct49-JgtQboeg",
    Prefer: "return=representation",
  };

  let bodyContent = JSON.stringify({
    choose_preassembled_two_tent: twopers,
    choose_preassembled_three_tent: threepers,
    choose_shelter: shelter,
  });

  let response = await fetch(
    "https://yuisogjwvntfoxudooln.supabase.co/rest/v1/order_details?resevationid=eq." +
      orderid,
    {
      method: "PATCH",
      body: bodyContent,
      headers: headersList,
    }
  );

  console.log(bodyContent);

  let data = await response.text();
  console.log(data);
}
