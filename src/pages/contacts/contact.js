import {
  StyleContact,
  ContactLanding,
  ContactForm,
  ContactOffices,
} from "./contact.style";
function Contact() {
  return (
    <StyleContact>
      <ContactLanding>
        <h1>Interested In our Services?</h1>
        <h1>Submit a Form to serve you. Or Contact us in our socials</h1>
      </ContactLanding>
      <ContactForm></ContactForm>
      <ContactOffices></ContactOffices>
    </StyleContact>
  );
}

export default Contact;
