export const urlTSS =
  process.env.NODE_ENV == "development"
    ? "http://127.0.0.1:5000"
    : "https://converte-textoparaaudio-1.onrender.com";

export const logIn = () => {
  const user = {
    name: "Kleber",
  };

  localStorage.setItem("user", JSON.stringify(user));
};

export const logOut = () => {
  localStorage.setItem("user", JSON.stringify(null));
};
