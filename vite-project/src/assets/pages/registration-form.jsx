import { useState } from 'react';
import './registration-form.css';

function Registrationform() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState({});
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const validateForm = () => {
    let errors = {};

    if (!firstName.trim()) {
      errors.firstName = 'First name is required';
    }

    if (!lastName.trim()) {
      errors.lastName = 'Last name is required';
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }

    if (!phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      errors.phoneNumber = 'Phone number must be 10 digits';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted successfully!');
      setRegistrationSuccess(true);
    } else {
      console.log('Form has errors. Please check.');
      setRegistrationSuccess(false);
    }
  };

  return (
    <>
      {registrationSuccess && <div className='registration-success'>Registration complete</div>}

      <form className='form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            id='first-name'
            className='inputs'
            type='text'
            placeholder='Enter your first name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && <p className='error'>{errors.firstName}</p>}
        </div>

        <div className='form-group'>
          <input
            id='last-name'
            className='inputs'
            type='text'
            placeholder='Enter your last name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && <p className='error'>{errors.lastName}</p>}
        </div>

        <div className='form-group'>
          <input
            id='email'
            className='inputs'
            type='text'
            placeholder='Enter your email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className='error'>{errors.email}</p>}
        </div>

        <div className='form-group'>
          <input
            id='phone-number'
            className='inputs'
            type='text'
            placeholder='Enter your phone number'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {errors.phoneNumber && <p className='error'>{errors.phoneNumber}</p>}
        </div>

        <button id='reg-button' type='submit'>
          Register
        </button>
      </form>
    </>
  );
}

export default Registrationform;
