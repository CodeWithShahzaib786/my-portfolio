import React, { useRef } from 'react'
import { Button } from '../ui/button'
import emailjs from '@emailjs/browser'

const MobileContact = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData(e.target as HTMLFormElement);
    const contactType = formData.get('contactType') as string;

    if (contactType === 'email') {
      // Send email using EmailJS
      emailjs.sendForm(
        'service_kjjxd5s', // Apka EmailJS service ID paste karein
        'template_76tfjoi', // Apka EmailJS template ID paste karein
        form.current as HTMLFormElement,
        'ZTyp2FWYWDYH3QBhJ' // Apka EmailJS public key paste karein
      )
        .then(() => {
          console.log('Email sent successfully');
          alert('Message sent successfully!');
          (e.target as HTMLFormElement).reset();
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          alert('Failed to send message. Please try again.');
        });
    } else {
      // Send via WhatsApp
      const name = formData.get('name') as string;
      const contactValue = formData.get('contactValue') as string;
      const message = formData.get('message') as string;
      const whatsappMessage = `Name: ${name}%0APhone: ${contactValue}%0AMessage: ${message}`;
      const whatsappUrl = `https://wa.me/923323819058?text=${whatsappMessage}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <div>
       <h2 className='scroll-m-20 border-b border-blue-500 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
        Contact Us
      </h2>
      <div>
 
  <div className="container px-5 py-4 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.4083451649562!2d67.10755817413934!3d24.815705347049224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c786488c9e3%3A0x1b8b08960b30d560!2sKorangi%20Crossing%20Rd%2C%20Pakistan!5e0!3m2!1sen!2s!4v1743004338765!5m2!1sen!2s"
        style={{ filter: " contrast(1.2) opacity(0.4)" }}
      />
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
             Sector B, Bhittai Colony Korangi Crossing Karachi
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-blue-500 leading-relaxed">shahzaibkaimkhani2003@gmail.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE/ WHATSAPP NO
          </h2>
          <p className="leading-relaxed">+92-3323819058</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <form ref={form} onSubmit={handleSubmit}>
        <div className="relative mb-4">
          <label htmlFor="name" className="scroll-m-20 text-sm font-semibold tracking-tight">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="contactType" className="scroll-m-20 text-sm font-semibold tracking-tight">
            Contact Method
          </label>
          <select
            id="contactType"
            name="contactType"
            required
            className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          >
            <option value="email">Email</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
        </div>
        <div className="relative mb-4">
          <label htmlFor="contactValue" className="scroll-m-20 text-sm font-semibold tracking-tight">
            Email / WhatsApp Number
          </label>
          <input
            type="text"
            id="contactValue"
            name="contactValue"
            required
            className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="scroll-m-20 text-sm font-semibold tracking-tight">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          />
        </div>
        <Button type="submit">
          SEND
        </Button>
      </form>
    </div>
  </div>


      </div>
    </div>
  )
}

export default MobileContact
