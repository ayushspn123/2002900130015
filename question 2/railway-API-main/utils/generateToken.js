
const generate = async () => {
  const res = await fetch("http://20.244.56.144/train/auth", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      companyName: "Train Central",
      clientId: "b46128a0-fbde-4c16-a4b1-6ae6ad718e27",
      ownerName: "Ayush Kumar",
      ownerEmail: "ayushvermaspn@gmail.com",
      rollNo: "2002900130015",
      clientSecret: "XOyolORPayKBOdAN",
    }),
  });
  const json = await res.json();
  return json
};

module.exports = generate;
