import { Box, Container, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { googleScriptUrl } from "../constants/helper";
import Swal from "sweetalert2";
import { contact } from "../data/data.json";
import { motion } from "framer-motion";
import { icons } from "../constants/helper";

function ContactUs() {
  // States for the form fields
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  // Error states to handle validation
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    const emailValid = email !== "";
    const phoneValid = phone !== "";
    const messageValid = message !== "";

    setEmailError(!emailValid);
    setPhoneError(!phoneValid);
    setMessageError(!messageValid);

    if (emailValid && phoneValid && messageValid) {
      setSending(true);
      fetch(googleScriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          email: email,
          phone: phone,
          message: message,
        }),
      })
        .then((res) => {
          setEmail("");
          setPhone("");
          setMessage("");
          if (res.status === 200) {
            Swal.fire({ title: "Message Sent Successfully." });
          }
        })
        .catch((e) => console.error(e))
        .finally(() => {
          setSending(false);
        });
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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ width: "100%" }}
      >
        <Container
          sx={{
            p: 2,
            borderRadius: 2,
          }}
          maxWidth="sm"
          component={Paper}
          elevation={4}
        >
          <Box sx={{ mb: 1 }}>
            <Typography variant="h5" gutterBottom>
              Send a Message
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
            <CustomButton
              loading={sending}
              disabled={sending}
              type="submit"
              label="Submit"
            />
          </Box>

          <Box sx={{ p: 1, display: "flex", justifyContent: "center", mt: 1 }}>
            <Typography
              component="a"
              href={`https://api.whatsapp.com/send/?phone=${contact.phone.slice(
                1
              )}&text=Hi`}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <img src={icons.WhatsApp} height={20} />
              Or send a WhatsApp message
            </Typography>
          </Box>
        </Container>
      </motion.div>
    </Box>
  );
}

export default ContactUs;
