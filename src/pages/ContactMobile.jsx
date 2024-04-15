import { useState} from 'react'
import NavBar from '../components/NavBar';
import Footer from "../components/Footer";

const ContactMobile = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formValues.name) {
      errors.name = 'Name is required';
    }
    if (!formValues.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formValues.phone) {
      errors.phone = 'Phone number is required';
    }
    if (!formValues.message) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form is valid, submit the form');
      
    } else {
      setErrors(formErrors);
    }
  };

  return (
    
    <div className="w-screen">
      <NavBar />
      <div className="  flex flex-col items-center justify-center min-h-screen">
      <h4 className="font-catamaran mt-14 text-[21px] text-center text-[#0E2744] font-bold">Contact Us</h4>
      <div className="w-[312px] h-[138px] gap-2 bg-[#F6F6F6] flex flex-col items-center justify-center">
      <div className="bg-[#BC2B2A] rounded-full w-[30px] h-[30px] flex  text-center justify-center items-center">
      <img src="Vector.png" alt="Write to us" className="h-1/2 "></img>
      </div>
      
        <h6 className="font-poppins font-bold text-[#6c7275] text-[16px]">ADDRESS</h6>
        <p className="font-poppins text-center font-semibold  text-[#141718] text-[16px]">314 Lekki Phase 1. Lagos, Nigeria</p>
        
      </div>
      <div className="w-[312px] h-[138px] gap-2 bg-[#F6F6F6] flex flex-col items-center justify-center">
      <div className="bg-[#BC2B2A] rounded-full w-[30px] h-[30px] flex  text-center justify-center items-center">
      <img src="phone.png" alt="Write to us" className="h-1/2 "></img>
      </div>
      
      <h6 className="font-poppins font-bold text-[#6c7275] text-[16px]">CONTACT US</h6>
        <p className="font-poppins text-center font-semibold  text-[#141718] text-[16px]">(234)800-3444-0003</p>
        
      </div>
      <div className="w-[312px] h-[138px] gap-2 bg-[#F6F6F6] flex flex-col items-center justify-center">
      <div className="bg-[#BC2B2A] rounded-full w-[30px] h-[30px] flex  text-center justify-center items-center">
      <img src="envelope.png" alt="Write to us" className="w-3/6 "></img>
      </div>
      
      <h6 className="font-poppins font-bold text-[#6c7275] text-[16px]">EMAILS</h6>
        <p className="font-poppins text-center font-semibold  text-[#141718] text-[16px]">Email: customer@marketmate.com</p>
                
      </div>
      <div className="flex space-x-2 ml-8 ">
      <div className="bg-[#BC2B2A] rounded-full w-[30px] h-[30px] flex justify-center items-center ml-4">
        <img src="envelope.png" alt="Write to us" className="w-3/6 "></img>
      </div>
      <div className="flex flex-col">
        <h4 className="font-bold font-catamaran text-[18px] text-[#0E2744] ml-8">Write To Us</h4>
        <p className="mr-3 text-[14px] font-poppins text-[#00000]">Fill out our form and we will contact you within 24 hours.</p>
             
      </div>
    </div>
    <div className="flex justify-center items-center ">
    <div className="mt-2 flex flex-col  w-[311px] gap-2">
    <form className="space-y-4 "
     onSubmit={handleSubmit}>
      <div className="flex flex-col justify-between gap-2">
        <div>
          <label htmlFor="name"
          className="font-poppins font-bold text-[#6c7275] text-[12px]"
          >FULL NAME
          <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formValues.name} onChange={handleChange} 
          className="w-[311px] h-[40px] bg-[#F0F0F0] p-2 text-gray-700 focus:outline-none " />
          {errors.name && 
          <p className="text-red-500 text-xs">{errors.name}</p>}
        </label>
        </div>
        <div>
          <label htmlFor="email"
          className="font-poppins font-bold text-[#6c7275] text-[12px]">EMAIL ADDRESS
          <input 
          type="email"
           name="email" 
           placeholder="Your Email"
            value={formValues.email}
             onChange={handleChange} 
             className="w-[311px] h-[50px] bg-[#F0F0F0] p-2 text-gray-700 focus:outline-none focus:ring-gray-300" />
          {errors.email && 
          <p className="text-red-500 text-xs">{errors.email}</p>}
        </label>
        </div>
      </div>
      <div>
        <label className="font-poppins font-bold text-[#6c7275] text-[12px]">
          YOUR MESSAGE
        <textarea 
        name="message" 
        placeholder="Your Message"
         value={formValues.message} 
         onChange={handleChange} 
         className="w-[311px] h-[140px] bg-[#F0F0F0] items-center p-2 text-gray-700  focus:outline-none"></textarea>
        {errors.message && 
      
       <p className="text-red-500 text-xs">{errors.message}</p>}
       </label>
      </div>
      
      <div className="flex items-center">
      <button type="submit" className="bg-[#BC2B2A] text-white  p-2 rounded w-[194px] h-[40px] mb-6">Send Message</button>
      </div>
    </form>
    </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default ContactMobile
