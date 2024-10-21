import axios from "axios";
import { loginRequest, loginSuccess, loginFailure, logout } from "./authSlice";

// Action for user login
export const userLogin = (credentials) => async (dispatch) => {
  try {
    dispatch(loginRequest());

    // Make API call to login
    const response = await axios.post("/api/login", credentials);

    const token = response.data.token;
    localStorage.setItem("token", token); // Store JWT in localStorage

    dispatch(loginSuccess(response.data.user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

// Action for user logout
export const userLogout = () => (dispatch) => {
  localStorage.removeItem("token"); // Clear token from storage
  dispatch(logout());
};
