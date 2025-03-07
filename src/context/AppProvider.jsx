import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import useAppStore from "../store/useAppStore";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";

// const API_PRODUCTION_URL = "https://datacove-backend.onrender.com";
const API_BASE_URL = "http://localhost:5000";

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const { closeSignUp, indiSignUp, orgSignUp, login, user } = useAppStore();
  const [notes, setNotes] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    userType: "individual",
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    companyName: "",
    isVerified: false,
    otp: "",
  });
  const [invitations, setInvitations] = useState([]);
  const [clients, setClients] = useState([]);
  const [userDocs, setUserDocs] = useState();
  const [clientDocs, setClientDocs] = useState([]);
  const [signupMessage, setSignupMessage] = useState();
  const [singleProject, setSingleProject] = useState();

  // useEffect(() => {
  //   const fetchInvitationsAndClients = async () => {
  //     if (!user?._id) return; // Ensure userId exists before making request

  //     try {
  //       const { data } = await axios.get(
  //         `http://localhost:5000/api/v1/dashboard/invitation-clients?userId=${user._id}`
  //       );

  //       // console.log(data);

  //       setInvitations(data.invitations);
  //       setClients(data.clients);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchInvitationsAndClients();
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUserType = (type) => {
    setFormData((prevData) => ({
      ...prevData,
      userType: type,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (formData.userType === "individual") {
        const message = await indiSignUp({
          name: formData.name,
          email: formData.email,
          phone: formData.phoneNumber,
          password: formData.password,
        });
        setSignupMessage(message);
      } else if (formData.userType === "company") {
        const message = await orgSignUp({
          name: formData.name,
          email: formData.email,
          phone: formData.phoneNumber,
          organizationName: formData.companyName,
          password: formData.password,
        });
        setSignupMessage(message);
      } else {
        const message = await login(
          {
            email: formData.email,
            password: formData.password,
          },
          navigate
        );
        closeSignUp();
        // setSignupMessage(message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }

    setFormData({
      userType: "individual",
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      companyName: "",
      isVerified: false,
      otp: "",
    });
    // closeSignUp();
  };

  // useEffect(() => {
  //   const fetchNotes = async () => {
  //     if (!user || !user._id) return;

  //     try {
  //       const response = await axios.get(
  //         `http://localhost:5000/api/v1/dashboard/getNotes`,
  //         {
  //           params: { userId: user._id },
  //           withCredentials: true,
  //         }
  //       );

  //       // console.log("Fetched Notes:", response.data.notes);
  //       setNotes(response.data.notes);
  //     } catch (error) {
  //       console.error("Error fetching notes:", error);
  //     }
  //   };

  //   fetchNotes();
  // }, [notes]);

  useEffect(() => {
    // Check if user exists
    const fetchUserDocs = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/v1/dashboard/get-userDocs`,

          { withCredentials: true }
        );

        // console.log("Response from client docs:", response.data.documents);
        setUserDocs(response.data.documents);
      } catch (error) {
        console.error("Error fetching client documents:", error);
      }
    };

    fetchUserDocs();
  }, []); // Depend on `user`, not `user.userType` or `user.inviterId`
  // Added necessary dependencies

  useEffect(() => {
    const fetchClientDocs = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/v1/dashboard/get-clientDocs`,
          { withCredentials: true }
        );

        setClientDocs(response.data);
      } catch (error) {
        console.error("Error fetching client documents:", error);
      }
    };

    if (clientDocs.length === 0) {
      // Fetch only if clientDocs is empty
      fetchClientDocs();
    }
  }, [clientDocs]);

  return (
    <AppContext.Provider
      value={{
        formData,
        setFormData,
        handleChange,
        handleUserType,
        handleSubmit,
        notes,
        invitations,
        clients,
        singleProject,
        setSingleProject,
        userDocs,
        clientDocs,
        signupMessage,
        isLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
