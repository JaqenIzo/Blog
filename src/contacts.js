import React from "react";

import { Button, FloatingLabel, Form, FormControl, FormText } from "react-bootstrap";

export default function ContactUs() {

  setTimeout(function myForm(){
    let frm = document.getElementById("contactForm")
    console.log(frm.elements)
  },6000)


 
 

  return (
    <form className="w-75 m-3 border-3 border-warning p-3 m-lg-auto mt-lg-5 mb-lg-5" id="contactForm">
      <FormText><h3>Contact us</h3></FormText>
      <FloatingLabel
        controlId="floatingInput"
        label="Your Name"
        className="mb-3  "
      >
        <Form.Control type="text" placeholder="Your Name" className="form-control form-control-md" required/>
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Email">
        <Form.Control type="email" placeholder="abc@xyz.com" required />
      </FloatingLabel>

     
      <Form.Control as="textarea" placeholder="Your message" rows={5} required/>

      <Button type="submit"  className="btn btn-warning btn-sm btn-md" onClick={()=>{ setTimeout(function myValidation(){
   let nameInput = document.querySelector("input[type=text]");
   let passWordInput = document.querySelector("input[type=password]");

   nameInput.value===""|| passWordInput.value===""?nameInput.style.borderColor="red": nameInput.style.borderColor="initial"
  },50)}}> Submit </Button>
        
     
      
    </form>
  );
}
