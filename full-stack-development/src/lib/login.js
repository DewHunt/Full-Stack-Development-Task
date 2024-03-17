export default async function login(formData) {
  const emailOrUserName = formData.emailOrUserName;
  const password = formData.password;
  const response = await fetch(`${process.env.API}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ emailOrUserName, password }),
  });
  return response;
}
