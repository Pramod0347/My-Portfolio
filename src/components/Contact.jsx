import React from 'react'
import { useForm } from 'react-hook-form'
import { Github, Linkedin, Mail } from 'lucide-react'
 

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

  const inputStyles = "peer block w-full rounded-xl border border-slate-300 bg-white p-3 text-base text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200 dark:border-slate-600 dark:bg-slate-900/60 dark:text-white dark:focus:border-sky-400 dark:focus:ring-sky-900/40"

  const labelStyles = "absolute text-sm text-slate-600 dark:text-slate-300 left-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 " +
    "peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 " +
    "peer-focus:top-0 peer-focus:text-xs peer-focus:bg-white peer-focus:dark:bg-[#0E1116] peer-focus:px-1 peer-focus:text-sky-600 peer-focus:dark:text-sky-300 peer-focus:font-semibold " +
    "peer-valid:top-0 peer-valid:text-xs peer-valid:bg-white peer-valid:px-1 peer-valid:text-sky-700 peer-valid:dark:bg-[#0E1116] peer-valid:font-semibold"

  return (
    <section 
      id="contact" 
      className="animate-fade-up"
    >
      <p className="section-kicker">Get In Touch</p>
      <h2 className="section-title mb-4">
        Open to <span className="keyword">Backend Engineering</span> Roles
      </h2>
      <p className="mb-6 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 lg:text-base">
        Open to <span className="keyword-accent">backend engineering roles</span> · <span className="keyword">pramodgoudardev2@gmail.com</span>
      </p>

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <a
          href="mailto:pramodgoudardev2@gmail.com"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:border-sky-400 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        >
          <Mail className="h-4 w-4" />
          Email
        </a>
        <a
          href="http://github.com/Pramod0347"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:border-sky-400 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>
        <a
          href="http://linkedin.com/in/pramod-goudar-a35605169"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:border-sky-400 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </a>
      </div>

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
