import React, { useState } from 'react'

function ContactPage() {

    const [formInput, setFormInput] = useState({
        name:"",
        email: "",
        message: "",
    });

    const submitForm = (e) => {
        if (formInput.message.length < 10){
            console.error("Message should be longer than 10 characters.")
        }
        e.preventDefault();
        // console.log(formInput); 
    };

  return (
    <div className="contactFormHolder">
        <form onSubmit={submitForm} className="contactForm">
            <h2 className="contactHeading">Contact Me</h2>
            <input className="contactName" placeholder="Name" value={formInput.name} onChange={e => setFormInput({...formInput, name: e.target.value})}/>
            <input className="contactEmail" placeholder="Email" value={formInput.email} onChange={e => setFormInput({...formInput, email: e.target.value})}/>
            <textarea className="contactMessage" placeholder="Message" value={formInput.message} onChange={e => setFormInput({...formInput, message: e.target.value})}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ContactPage