import {
  ContactLanding,
  ContactForm,
  ContactOffices,
  ContactBox,
} from "./contact.style";
import { ButtonSubmit } from "components/button/button.style";
function Contact() {
  return (
    <>
      <ContactLanding>
        <h1>Interested In our Services?</h1>
        <h1>Submit a Form to serve you. Or Contact us in our socials</h1>
      </ContactLanding>
      <ContactForm>
        <form>
          <label>
            <input
              type="text"
              className="txtBox"
              placeholder="Fullname"
            ></input>
          </label>

          <label>
            <input
              type="text"
              className="txtBox"
              placeholder="Phone Number"
            ></input>
          </label>

          <label>
            <input
              type="text"
              className="txtBox"
              placeholder="Email Number"
            ></input>
          </label>

          <label>
            <textarea className="txtArea" placeholder="Message"></textarea>
          </label>
          <label>
            <ButtonSubmit>Submit</ButtonSubmit>
          </label>
        </form>
      </ContactForm>
      <ContactOffices>
        <div className="reg">
          <ContactBox>
            <h1>Main Office</h1>
            <p>
              <i className="fas fa-map-marker"></i>022 Sitio Kanluran, Brgy.
              Palaypalay 1990 Jalajala, Philippines
            </p>
            <p>
              <i className="fas fa-phone-alt"></i>0926 503 6640
            </p>
          </ContactBox>

          <ContactBox>
            <h1>Socials</h1>
            <p>
              <i class="fas fa-envelope"></i> jemmanuel077@gmail.com
            </p>
            <p>
              <i class="fas fa-building"></i> Emman Computer and CCTV
              Installation Services
            </p>
          </ContactBox>
        </div>
      </ContactOffices>
    </>
  );
}

export default Contact;
