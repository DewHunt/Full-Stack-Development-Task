export default async function saveEmployee(formData) {
  const name = formData.name;
  const userName = formData.userName;
  const email = formData.email;
  const password = formData.password;
  console.log("`${process.env.API}user/save`: ", `${process.env.API}user/save`);
  const response = await fetch(`${process.env.API}user/save`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, userName, email, password }),
  });
  return response;
}
