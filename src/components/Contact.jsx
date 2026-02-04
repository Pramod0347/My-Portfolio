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

  const inputStyles = "peer block w-full p-3 text-base border border-white/60 dark:border-slate-700/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white/70 dark:bg-slate-900/60 dark:text-white"

  const labelStyles = "absolute text-sm text-slate-600 dark:text-slate-300 left-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 " +
    "peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 " +
    "peer-focus:top-0 peer-focus:text-xs peer-focus:bg-[#F7F3EC] peer-focus:dark:bg-[#0E1116] peer-focus:px-1 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-300 peer-focus:font-semibold " +
    "peer-valid:top-0 peer-valid:text-xs peer-valid:px-1 peer-valid:text-emerald-700 peer-valid:font-semibold"

  return (
    <section 
      id="contact" 
      className="animate-fade-up"
    >
      {/* Section Heading - left aligned */}
      <p className="section-kicker">Get In Touch</p>
      <h2 className="section-title mb-4">
        Contact
      </h2>

      {/* Form */}
      <form 
        className="space-y-6 glass-card p-6 rounded-2xl border border-white/60 dark:border-slate-700/60"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Name & Email side by side on md+ */}
        <div className="md:flex md:gap-6 space-y-6 md:space-y-0">
          {/* Name */}
          <div 
            className="relative md:w-1/2"
          >
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
              <p 
                className="text-rose-500 text-xs mt-1"
              >
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div 
            className="relative md:w-1/2"
          >
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
              <p 
                className="text-rose-500 text-xs mt-1"
              >
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div 
          className="relative"
        >
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
            <p 
              className="text-rose-500 text-xs mt-1"
            >
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-fit py-2.5 px-5 text-base font-semibold text-white rounded-xl transition-all duration-300 ${isSubmitting ? 'bg-emerald-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700'
            }`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  )
}

export default Contact
