import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import ladyPhoto from "../../assets/ladyphoto.png";
import { MdMessage, MdCall, MdMail } from "react-icons/md";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("ranu");
  const [email, setEmail] = useState("ranusoni2345@gmail.com");
  const [text, setText] = useState("ranusoni2345@gmail.com");

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button 
            text="VIA CALL" 
            icon={<MdCall fontSize="24px" />} 
          />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdMail fontSize="24px" />}
        />

        {/* TOP BUTTONS END */}

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div className={styles.button_container}>
            <Button text="SUBMIT BUTTON" />
          </div>

          <div>
            {name + " " + email + " " + text}
          </div>
        </form>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className={styles.contact_image}>
        <img src={ladyPhoto} alt="contact" />
      </div>
    </section>
  );
};

export default ContactForm;