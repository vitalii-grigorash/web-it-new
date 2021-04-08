export const BASE_URL = 'https://api.178spb.com';

export const sendForm = (name, number, method) => fetch(`${BASE_URL}/feedbackform`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name, number, method }),
})
  .then((res) => {
    if (!res.ok) {
      return res.json()
      .then((err) => {
        if (err.error) {
          throw new Error(err.error);
        } else {
          throw new Error(err.message);
        }
      });
    }
    return res.json();
  })
  .catch((err) => { 
    throw new Error(err.message);
});

export const sendFormCatalog = (name, number, method) => fetch(`${BASE_URL}/feedbackformcatalog`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, number, method }),
  })
    .then((res) => {
      if (!res.ok) {
        return res.json()
        .then((err) => {
          if (err.error) {
            throw new Error(err.error);
          } else {
            throw new Error(err.message);
          }
        });
      }
      return res.json();
    })
    .catch((err) => { 
      throw new Error(err.message);
  });