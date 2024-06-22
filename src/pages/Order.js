import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

const Order = ({ isOpen, onClose, onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isHuman, setIsHuman] = useState(false); 

  const handleFormSubmit = (data) => {
    if (isHuman) {
      onSubmit(data);
      onClose();
    } else {
      alert('Please verify that you are human.');
    }
  };

  const verifyHumanity = () => {


    setIsHuman(true);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <motion.div className="modal" initial={{ opacity: 0 }} animate={{ opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.3 }}>
      <div className="modal-content">
        <h2>Order Details</h2>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              {...register('lastName', { required: 'Last Name is required' })}
            />
            {errors.lastName && <p>{errors.lastName.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              {...register('firstName', { required: 'First Name is required' })}
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="middleName">Middle Name:</label>
            <input
              type="text"
              id="middleName"
              {...register('middleName', { required: 'Middle Name is required' })}
            />
            {errors.middleName && <p>{errors.middleName.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              {...register('address', { required: 'Address is required' })}
            />
            {errors.address && <p>{errors.address.message}</p>}
          </div>
          <div className="form-group">
            <div>
              <p>Please verify that you are human:</p>
              <button type="button" onClick={verifyHumanity}>Verify</button>
              {isHuman && <p style={{ color: 'green' }}>Verified!</p>}
            </div>
          </div>
          <button type="submit" disabled={!isHuman}>Submit Order</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </motion.div>
  );
};

export default Order;