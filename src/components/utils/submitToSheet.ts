export const submitToSheet = async (data: any) => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyaQorNWq8qhXARfngjWYJfRPbF7H_CNoOsotUmyKF2M9WV4fkpHzU266sYxdToL68/exec";

  const formBody = new FormData();

  // ✅ Form Name
  formBody.append("formName", data.formName);

  // ✅ Auto Page URL
  formBody.append("pageURL", window.location.href);

  // ✅ Fields
  if (data.name) formBody.append("name", data.name);
  if (data.email) formBody.append("email", data.email);
  if (data.phone) formBody.append("phone", data.phone);
  if (data.subject) formBody.append("subject", data.subject);
  if (data.message) formBody.append("message", data.message);
  if (data.location) formBody.append("location", data.location);

  await fetch(scriptURL, {
    method: "POST",
    mode: "no-cors",
    body: formBody,
  });
};
