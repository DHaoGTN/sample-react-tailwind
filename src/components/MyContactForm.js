import React, { useState } from 'react';

const MyContactForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formValues.firstName.trim()) {
      errors.firstName = 'First name is required';
      isValid = false;
    }

    if (!formValues.lastName.trim()) {
      errors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!formValues.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formValues.phone.trim()) {
      errors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^[0-9\b]+$/.test(formValues.phone)) {
      errors.phone = 'Phone number is invalid';
      isValid = false;
    }

    if (!formValues.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setErrors(errors);

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(formValues);
      // make api call or send email
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName" className="block text-gray-800 font-bold mb-2">
              First Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formValues.firstName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
            {errors.firstName && <p className="text-red-600">{errors.firstName}</p>}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-800 font-bold mb-2">
              Last Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formValues.lastName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
            {errors.lastName && <p className="text-red-600">{errors.lastName}</p>}
          </div>
          <div>
            <label htmlFor="company" className="block text-gray-800 font-bold mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formValues.company}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-800 font-bold mb-2">
              Email<span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
            {errors.email && <p className="text-red-600">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-800 font-bold mb-2">
              Phone Number<span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formValues.phone}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
            {errors.phone && <p className="text-red-600">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-800 font-bold mb-2">
              Message<span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formValues.message}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
            ></textarea>
            {errors.message && <p className="text-red-600">{errors.message}</p>}
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-3xl bg-black px-6 py-2 text-xl font-medium uppercase text-white"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyContactForm;