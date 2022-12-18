const showEmail = () => {
  const userEmail = localStorage.getItem("email");
  document.getElementById("showEmail").textContent = userEmail;
};

showEmail();
