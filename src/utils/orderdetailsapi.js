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

export async function postTicketHolderInfo(
  ticket,
  firstname,
  lastname,
  email,
  phone,
  birthday,
  address,
  postal,
  city,
  orderid
) {
  let headersList = {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1aXNvZ2p3dm50Zm94dWRvb2xuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NTE5NDUsImV4cCI6MjAyNjMyNzk0NX0.A4lJrT15zWBvm6Zm7nXbtq01CUOrjNct49-JgtQboeg",
    "Content-Type": "application/json",
    Prefer: "return=representation",
  };

  let bodyContent = JSON.stringify({
    chose_ticket: ticket,
    first_name: firstname,
    last_name: lastname,
    email: email,
    phone_number: phone,
    birthday: birthday,
    address_line: address,
    postal_code: postal,
    city: city,
    order_id: orderid,
  });

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
