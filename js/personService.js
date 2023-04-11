const baseUrl = "https://6435539d83a30bc9ad5db1c9.mockapi.io/persons";
const getAllMembers = async () => {
  const rawData = await fetch(baseUrl);
  const response = await rawData.json();
  return response;
};

const getMemberById = async (id) => {
  const rawData = await fetch(`${baseUrl}/${id.toString()}`);
  const response = await rawData.json();
  return response;
};
const addMember = async (data) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const deleteMember = async (id) => {
  const response = await fetch(`${baseUrl}/${id.toString()}`, {
    method: "DELETE",
  });
  console.log("deletemember calisti");
  if (response.status === 200) document.getElementById(id).remove();
  //   window.location.href="index.html"
};

const updateMember = async (data) => {
  const response = await fetch(`${baseUrl}/${data.id.toString()}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
export { getAllMembers, getMemberById, addMember, updateMember, deleteMember };
