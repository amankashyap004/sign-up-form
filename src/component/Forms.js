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

   function handleSubmit(event) {
      event.preventDefault();
      if (formData.password === formData.conformPassword) {
         console.log("Match");
      } else {
         console.log("not match");
      }
      if (formData.newsletter === true) {
         console.log("News Letter");
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
            <button className="btn">Sign Up</button>
         </form>
      </section>
   );
}
