import React, { useState } from "react";
import {
  Box,
  Container,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import CustomButton from "../components/CustomButton";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import IconWithName from "../components/IconWithName";
import { contact } from "../data/data";
import { googleScriptUrl, icons } from "../constants/helper";

const ContactUs: React.FC = () => {
  // States for the form fields
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [sending, setSending] = useState<boolean>(false);

  // Error states to handle validation
  const [emailError, setEmailError] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simple validation
    const emailValid = email.trim() !== "";
    const phoneValid = phone.trim() !== "";
    const messageValid = message.trim() !== "";

    setEmailError(!emailValid);
    setPhoneError(!phoneValid);
    setMessageError(!messageValid);

    if (emailValid && phoneValid && messageValid) {
      setSending(true);
      try {
        const response = await fetch(googleScriptUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            email,
            phone,
            message,
          }).toString(),
        });

        if (response.status === 200) {
          setEmail("");
          setPhone("");
          setMessage("");
          Swal.fire({ title: "Message Sent Successfully." });
        } else {
          throw new Error("Failed to send the message");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setSending(false);
      }
    } else {
      console.log("Form contains errors");
    }
  };

  // Reset the error state when user types
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) setEmailError(false);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    if (phoneError) setPhoneError(false);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    if (messageError) setMessageError(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: { sm: 2, xs: 1 },
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
          elevation={3}
        >
          <Box>
            <Typography variant="h5" sx={{ my: 1 }} gutterBottom>
              Send a Message
            </Typography>
          </Box>
          <Divider sx={{ mb: 2 }} />
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

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <IconWithName
              component="a"
              href={`https://api.whatsapp.com/send/?phone=${contact?.phone?.name.slice(
                1
              )}`}
              icon={icons.WhatsApp}
              height={20}
              label="Or send a message on WhatsApp"
            />
          </Box>
        </Container>
      </motion.div>
    </Box>
  );
};

export default ContactUs;
