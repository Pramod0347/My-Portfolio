import React from 'react'
import { useForm } from 'react-hook-form'

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = async (data) => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz5KbBt8mzxnlP427am5Ft626wXkoGvL0XueD85P5JXZBycFqrI7bzrxOA2SVgnIZ8O/exec'

    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('message', data.message)

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      })

      if (response.ok) {
        reset();
      }
      else {
        alert('Your Message has been sent.')
        reset();
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again later.')
    }
  }

  const inputStyles = "peer block w-full p-2 text-base border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent dark:bg-transparent dark:text-white dark:border-gray-600"

  const labelStyles = "absolute text-sm text-gray-600 dark:text-gray-300 left-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 " +
    "peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 " +
    "peer-focus:top-0 peer-focus:text-xs peer-focus:bg-stone-100 peer-focus:dark:bg-gray-700 peer-focus:px-1 peer-focus:text-blue-500 peer-focus:dark:text-blue-400 peer-focus:font-semibold " +
    "peer-valid:top-0 peer-valid:text-xs peer-valid:px-1 peer-valid:text-blue-600 peer-valid:font-semibold"

  return (
    <section id="contact" className="animate__animated animate__fadeIn">
      {/* Section Heading - left aligned */}
      <h2 className="mb-4 relative w-fit text-xl lg:text-2xl font-medium after:content-[''] after:block after:w-2/3 after:border-b-2 after:border-yellow-500 after:rounded-full">
        Contact
      </h2>

      {/* Form */}
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {/* Name & Email side by side on md+ */}
        <div className="md:flex md:gap-6 space-y-6 md:space-y-0">
          {/* Name */}
          <div className="relative md:w-1/2">
            <input
              type="text"
              id="name"
              required
              defaultValue=""
              {...register('name', { required: 'Name is required' })}
              className={inputStyles}
              placeholder=" "
            />
            <label htmlFor="name" className={labelStyles}>
              Name
            </label>
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="relative md:w-1/2">
            <input
              type="email"
              id="email"
              required
              defaultValue=""
              {...register('email', { required: 'Email is required' })}
              className={inputStyles}
              placeholder=" "
            />
            <label htmlFor="email" className={labelStyles}>
              Email
            </label>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="relative">
          <textarea
            id="message"
            rows="4"
            required
            defaultValue=""
            {...register('message', { required: 'Message is required' })}
            className={inputStyles}
            placeholder=" "
          />
          <label htmlFor="message" className={labelStyles}>
            Message
          </label>
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-fit py-2 px-4 text-lg font-semibold text-white rounded-md transition-all duration-300 ${isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 animate__animated animate__pulse animate__delay-1s'
            }`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  )
}

export default Contact
