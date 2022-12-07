import React from "react";

export default function Forms() {
   const [formData, setFormData] = React.useState({
      email: "",
      password: "",
      conformPassword: "",
      newsletter: true,
   });

   function handleChange(event) {
      const { name, value, type, checked } = event.target;
      setFormData((prevFormData) => ({
         ...prevFormData,
         [name]: type === "checkbox" ? checked : value,
      }));
   }
   const [display, setDisplay] = React.useState(<h4>Fill the from</h4>);
   const [displayNewsletter, setDisplayNewsletter] = React.useState(<h4>Please subscribe</h4>);

   function handleSubmit(event) {
      event.preventDefault();
      if(formData.password ==="" || formData.conformPassword==="" || formData.email===""){
         setDisplay((prev) => <h4>Fill the from</h4>);
      }else{
         if (formData.password === formData.conformPassword) {
            setDisplay((prev) => <h4>Successful</h4>);
         } else {
            setDisplay((prev) => <h4 className="error-text">Password not match</h4>);
         }
      }
      if (formData.newsletter === true) {
         setDisplayNewsletter((prev) => (
            <h4 className="newsletter-text">Thank you for subscribe</h4>
         ));
      }else{
         setDisplayNewsletter((prev) => (
            <h4>Please subscribe</h4>
         ));
      }
   }

   return (
      <section className="form-container">
         <h2 className="heading">Sign Up Form</h2>
         <form className="form-body" onSubmit={handleSubmit}>
            <input
               className="input"
               type="email"
               placeholder="example@email.com"
               name="email"
               onChange={handleChange}
               value={formData.email}
            />
            <input
               className="input"
               //  type="new-password"  //for avid DOM error
               type="password"
               placeholder="Password"
               name="password"
               onChange={handleChange}
               value={formData.password}
            />
            <input
               className="input"
               //  type="current-password" //for avid Dom error
               type="password"
               placeholder="Conform Password"
               name="conformPassword"
               onChange={handleChange}
               value={formData.conformPassword}
            />
            <div className="checkbox-container">
               <input
                  id="newsletter"
                  className="checkbox-input"
                  type="checkbox"
                  name="newsletter"
                  onChange={handleChange}
                  checked={formData.newsletter}
               />
               <label htmlFor="newsletter" className="label-text">
                  I want to join the newsletter
               </label>
            </div>
            <div className="notification-show">
               <div className="notification-text">{display}</div>
               <div className="notification-text">{displayNewsletter}</div>
            </div>
            <button className="btn">Sign Up</button>
         </form>
      </section>
   );
}
