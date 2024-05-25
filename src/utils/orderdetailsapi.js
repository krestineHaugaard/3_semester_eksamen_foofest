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

export async function postTicketHolderInfo(form) {
  const headersList = {
    "Content-Type": "application/json",
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1aXNvZ2p3dm50Zm94dWRvb2xuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NTE5NDUsImV4cCI6MjAyNjMyNzk0NX0.A4lJrT15zWBvm6Zm7nXbtq01CUOrjNct49-JgtQboeg",
    Prefer: "return=representation",
  };

  const bodyContent = JSON.stringify(
    form.forEach((singleform) => {
      return {
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        tlf_number: form.tlf_number,
        birthday: form.birthday,
        address_line: form.address_line,
        postal_code: form.postal_code,
        city: form.city,
        chose_vip: form.chose_vip,
        order_id: form.orderid,
      };
    })
  );

  const response = await fetch(
    "https://yuisogjwvntfoxudooln.supabase.co/rest/v1/ticket_holder_information",
    {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    }
  );

  const data = response.json();
}
