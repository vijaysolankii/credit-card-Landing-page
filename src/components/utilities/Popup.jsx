import React, { useState } from 'react';

const Popup = ({ isOpen, closePopup }) => {
  
  const [isClosing, setIsClosing] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', contact: '', recommendation: '' });
  const [error, setError] = useState('');
  const [errorFields, setErrorFields] = useState({ name: false, email: false, contact: false, recommendation: false });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorFields({ ...errorFields, [e.target.name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Handle form submission logic (e.g., API call or data processing)
    console.log('Form submitted:', formData);

    // Form field validation
    let isError = false;
    let errorObj = {};

    for (const field in formData) {
      if (!formData[field]) {
        isError = true;
        errorObj[field] = true;
      }
    }

    if (isError) {
      setError('All fields are required');
      setErrorFields(errorObj);
      return;
    } else {
      setError('');
    }
    
    setIsClosing(true);
    setTimeout(() => {
      closePopup();
      setIsClosing(false);
    }, 300);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const handleClick = (e) => {
    setIsClosing(true); 

    setTimeout(() => {
      closePopup(); 
      setIsClosing(false); 
    }, 300);
  };

  

  

  return isOpen ? (
    <div className={`popup fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${isClosing ? 'opacity-0' : 'opacity-100'}`} onClick={handleClick}>
      <div className="bg-white p-8 rounded-lg" onClick={stopPropagation}>
        <h2 className="text-lg font-bold mb-4">Provide Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">Name</label>
            <input type="text" id="name" name="name" onChange={handleInputChange} value={formData.name} className={`w-full border ${errorFields.name ? 'border-red-500' : 'border-gray-300'} rounded-md py-2 px-3`} onClick={stopPropagation} />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email</label>
            <input type="email" id="email" name="email" onChange={handleInputChange} value={formData.email} className={`w-full border ${errorFields.email ? 'border-red-500' : 'border-gray-300'} rounded-md py-2 px-3`} onClick={stopPropagation} />
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block mb-1">Contact</label>
            <input type="text" id="contact" name="contact" onChange={handleInputChange} value={formData.contact} className={`w-full border ${errorFields.contact ? 'border-red-500' : 'border-gray-300'} rounded-md py-2 px-3`} onClick={stopPropagation} />
          </div>
          <div className="mb-4">
            <label htmlFor="recommendation" className="block mb-1">Recommendation</label>
            <textarea id="recommendation" name="recommendation" onChange={handleInputChange} value={formData.recommendation} className={`w-full border ${errorFields.recommendation ? 'border-red-500' : 'border-gray-300'} rounded-md py-2 px-3`} onClick={stopPropagation} />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        </form>
      </div>
    </div>
  ) : null;
};

export default Popup;