import axios from "axios";
import { create } from "zustand";
import toast from "react-hot-toast";

const API_BASE_URL = "https://datacove-backend.onrender.com";

const useAppStore = create((set) => ({
  user: null,

  isSignUpOpen: false,
  isLoginOpen: false,

  isIndiSigningUp: false,
  isOrgSigningUp: false,
  isLoggingIn: false,
  isLoggingOut: false,
  isCheckingAuth: true,

  openSignUp: () => set({ isSignUpOpen: true }),
  closeSignUp: () => set({ isSignUpOpen: false }),
  openLogin: () => set({ isLoginOpen: true }),
  closeLogin: () => set({ isLoginOpen: false }),

  indiSignUp: async (credentials) => {
    set({ isIndiSigningUp: true });
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/v1/auth/individual-signup`,
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Include credentials for cookies
        }
      );
      console.log(response);
      set({ user: response.data.user, isIndiSigningUp: false });
      if (response.status === 201) {
        toast.success("Account created successfully, now you can login.");
      }
    } catch (error) {
      //console.log(error)
      toast.error(error.response.data.message || "Sign Up failed");
      set({ isIndiSigningUp: false, user: null });
    }
  },
  orgSignUp: async (credentials) => {
    set({ isOrgSigningUp: true });
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/v1/auth/organization-signup`,
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Include credentials for cookies
        }
      );
      console.log(response);
      set({ user: response.data.user, isOrgSigningUp: false });
      toast.success("Account created successfully");
    } catch (error) {
      //console.log(error)
      toast.error(error.response.data.message || "Sign Up failed");
      set({ isOrgSigningUp: false, user: null });
    }
  },
  login: async (credentials) => {
    set({ isLoggingIn: true });
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/v1/auth/login`,
        credentials,
        { withCredentials: true }
      );
      if (response.status === 200) {
        toast.success("Login Successfully");
      }
      set({ user: response.data.user, isLoggingIn: false });
    } catch (error) {
      set({ isLoggingIn: false, user: null });
      toast.error(error.response.data.message || "Login Failed");
    }
  },
  logout: async () => {
    set({ isLoggingOut: true });
    try {
      await axios.post(`${API_BASE_URL}/api/v1/auth/logout`, null, {
        withCredentials: true, // Important to include cookies
      });
      set({ user: null, isLoggingOut: false });
      toast.success("Logged out successfully");
    } catch (error) {
      set({ isLoggingOut: false });
      toast.error(error.response.data.message || "An error occurred");
    }
  },
  authCheck: async () => {
    set({ isCheckingAuth: true });
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/v1/auth/authCheck`,
        { withCredentials: true }
      );
      console.log("RESPONSE", response);
      set({ user: response.data.user, isCheckingAuth: false });
    } catch (error) {
      set({ isCheckingAuth: false, user: null });
      // toast.error(error.response.data.message || "An error occurred");
    }
  },
}));

export default useAppStore;
