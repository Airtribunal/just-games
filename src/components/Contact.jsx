import React from "react";

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h1 className="section-title contact-title">Отправляйте нам интересные идеи</h1>
        <div className="contact-inner">
          <form className="contact-form">
            <input type="text" name="" placeholder="ФИО"/>
            <input type="text" name="" placeholder="ПОЧТА"/>
            <input type="text" name="" placeholder="НОМЕР"/>
            <textarea name="" placeholder="СООбЩЕНИЕ"></textarea>
            <button onClick={(e) => e.preventDefault()} className="submit-button">отправить</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
