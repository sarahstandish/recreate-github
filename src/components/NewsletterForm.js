import React from "react";
import "./NewsletterForm.css";

const NewsletterForm = () => {
  return (
    <form>
      <input type="email" value="Email address"></input>
      <button className="email-sign-up" type="submit">
        Sign up for Github
      </button>
    </form>
  );
};

export default NewsletterForm;
