import Card from "../UI/Card";
import classes from "./ContactForm.module.css";
import { useState, useEffect, useCallback, useRef } from "react";

const ContactForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageTextRef = useRef();
  const [submitForm, setSubmitForm] = useState(false);
  const [formData, setFormData] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await fetch("http://localhost:5000/users/submit");
    console.log(response);
    if (!response.ok) {
      throw new Error("Could not load data");
    }
    const data = await response.json();
    const loadedData = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    setFormData(loadedData);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log(submitForm);
    setSubmitForm(true);
  };

  return (
    <Card>
      <h1>{formData.message}</h1>
      <form onSubmit={submitFormHandler}>
        <div className={classes.input}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            ref={nameRef}
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            ref={emailRef}
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            placeholder="Enter your name"
            ref={messageTextRef}
          />
        </div>
        <div className={classes.input}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </Card>
  );
};

export default ContactForm;
