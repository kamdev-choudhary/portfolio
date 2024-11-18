import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";

function ContactUs() {
  // States for the form fields
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Error states to handle validation
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const emailValid = email !== "";
    const phoneValid = phone !== "";
    const messageValid = message !== "";

    setEmailError(!emailValid);
    setPhoneError(!phoneValid);
    setMessageError(!messageValid);

    if (emailValid && phoneValid && messageValid) {
      // Here you can submit the data to the backend
      console.log("Form submitted successfully!", { email, phone, message });
    } else {
      console.log("Form contains errors");
    }
  };

  // Reset the error state when user types
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) setEmailError(false); // Reset error when typing
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    if (phoneError) setPhoneError(false); // Reset error when typing
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    if (messageError) setMessageError(false); // Reset error when typing
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container component={Paper} maxWidth="sm" sx={{ p: 3 }}>
        <Box sx={{ mb: 1 }}>
          <Typography variant="h4" gutterBottom>
            Contact Me
          </Typography>
        </Box>
        <Box
          component="form"
          sx={{ display: "grid", gap: 2 }}
          onSubmit={handleSubmit}
        >
          <TextField
            label="Email"
            type="email"
            size="small"
            fullWidth
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            helperText={emailError && "Email is required"}
          />
          <TextField
            label="Phone"
            type="tel"
            size="small"
            fullWidth
            value={phone}
            onChange={handlePhoneChange}
            error={phoneError}
            helperText={phoneError && "Phone number is required"}
          />
          <TextField
            label="Message"
            multiline
            rows={4}
            size="small"
            fullWidth
            value={message}
            onChange={handleMessageChange}
            error={messageError}
            helperText={messageError && "Message is required"}
          />
          <CustomButton type="submit" label="Submit" />
        </Box>
      </Container>
    </Box>
  );
}

export default ContactUs;
