// Contact component definition
const Contact = () => {
  return (
    <div className='px-4 mx-auto max-w-screen-md'>
      {/* Heading Section */}
      <h2 className='heading text-center'>
        Contact Us
      </h2>

      {/* Subheading Section */}
      <p className='mb-8 lg:mb-16 font-light text-center text_para'>
        Got a question for our team? Let us know.
      </p>

      {/* Form Section */}
      <form action='#' className='space-y-8'>
        {/* ---------------------------------- Your Email ---------------------------------- */}
        <div>
          <label htmlFor='email' className='form_label'>
            Your Email
          </label>

          <input
            type="email"
            id="email"
            placeholder='example@gmail.com'
            className='form_input mt-1'
          />
        </div>
        {/* ---------------------------------- Subject ---------------------------------- */}
        <div>
          <label htmlFor='subject' className='form_label'>
            Subject
          </label>

          <input
            type="text"
            id="subject"
            placeholder='Let us know how we can help you'
            className='form_input mt-1'
          />
        </div>

        {/* ---------------------------------- Description ---------------------------------- */}
        <div className="sm:col-span-2">
          <label htmlFor='message' className='form_label'>
            Description
          </label>
          {/* -------------------------- 6 rows of text area data -------------------------------- */}
          <textarea
            rows='6'
            type="text"
            id="message"
            placeholder='Add Comments'
            className='form_input mt-1'
          />
        </div>
        
        {/* Submit Button */}
        <button type="submit" className="btn rounded sm:w-fit">
          Submit
        </button>
        {/* ---------------------------------- End of this Section ---------------------------------- */}
      </form>
    </div>
  );
}
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
export default Contact; //------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------