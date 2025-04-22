import React from 'react'
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz5KbBt8mzxnlP427am5Ft626wXkoGvL0XueD85P5JXZBycFqrI7bzrxOA2SVgnIZ8O/exec';
  
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('message', data.message);
  
    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });
  
      if (response.ok) {
        // alert('Message sent successfully!');
        reset();
      } else {
        // alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  }
  
  const onError = (errors) => {
    console.log(errors);
  }

  return (
    <div>
      <form className='space-y-4' onSubmit={handleSubmit(onSubmit, onError)}>
        <div className='flex flex-col'>
          <label htmlFor="name" className='text-sm font-semibold'>Name</label>
          <input type="text" id='name' {...register('name', {required: 'Name is required'})} className='border-2 border-gray-300 rounded p-2'/>
          {errors.name && <p className='text-red-500 text-xs'>{errors.name.message}</p>}
        </div>

        <div className='flex flex-col'>
          <label htmlFor="email" className='text-sm font-semibold'>Email</label>
          <input type="email" id='email' {...register('email', {required: 'Email is required'})} className='border-2 border-gray-300 rounded p-2'/>
          {errors.email && <p className='text-red-500 text-xs'>{errors.email.message}</p>}
        </div>

        <div className='flex flex-col'>
          <label htmlFor="message" className='text-sm font-semibold'>Message</label>
          <textarea id='message' {...register('message', {required: 'Message is required'})} className='border-2 border-gray-300 rounded p-2'></textarea>
          {errors.message && <p className='text-red-500 text-xs'>{errors.message.message}</p>}
        </div>

        <button type="submit" disabled={isSubmitting} className={`bg-blue-500 text-white rounded p-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}

export default Contact
