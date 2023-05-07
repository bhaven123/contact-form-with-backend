import axios from "axios";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { Avatar, Grid, TextField, Typography, Modal } from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box } from "@mui/system";
import * as yup from "yup";
import { useState } from "react";

// Creating yup schema for parsing and validation
const validationSchema = yup.object({
  name: yup
    .string("Enter your full name")
    .required("Name is required")
    .min(6, "Your first name and last name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  message: yup.string("Enter your message").required("Message is required"),
});

const ContactForm = () => {
  // State Management for Modal when submitting
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleOpen = () => setIsSubmitting(true);
  const handleClose = () => setIsSubmitting(false);

  // Using Formik to handle form submission, validation and error messages in and out of form state
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (data) => {
      setIsSubmitting(true);
      // Using axios to send a post request to the backend server on form submission
      const response = await axios({
        url: "http://localhost:4000/submit",
        method: "post",
        data: data,
      });
      console.log(response);
      setIsSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} id="contact-form">
      {/* Using Material UI to design the Form */}
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <ContactMailIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Contact Form
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Full Name"
                autoFocus
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="message"
                label="Your Message"
                name="message"
                multiline
                rows={5}
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleOpen}
          >
            Submit
          </Button>
          <Modal
            open={isSubmitting}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            closeAfterTransition
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                pt: 2,
                px: 4,
                pb: 3,
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <CheckCircleIcon />
              </Avatar>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Thank You!
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                The form was submitted successfully.
              </Typography>
            </Box>
          </Modal>
        </Box>
      </Box>
    </form>
  );
};

export default ContactForm;
