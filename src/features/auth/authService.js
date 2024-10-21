const API_URL = "/api/users/";

// Register user
const register = async (userData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (response.ok) {
    const user = await response.json();
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  } else {
    const message = (await response.json()).message;
    throw new Error(message || "Failed to register");
  }
};

// Login user
const login = async (userData) => {
  const response = await fetch(API_URL + "login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (response.ok) {
    const user = await response.json();
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  } else {
    const message = (await response.json()).message;
    throw new Error(message || "Failed to login");
  }
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
