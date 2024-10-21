

const Contact = () => {

  
  
  return (
    <section className="text-2xl section pt-[8rem]">
      <div className="container ">
        <form>
        <div className="grid grid-cols-two">
        <div className="text-[#a55eea] contact_us" data-aos="zoom-out-right">
          <h3 className="text-4xl font-bold">Contact US</h3>
          <p className="mb-12">Get in touch with us we are always here to help you</p>
          <label htmlFor="fullName" className="m-0 ">FullName</label>
          <input type="text" name="fullname" id="fullName"  placeholder="Enter full name"  />
         
          
          <label htmlFor="email" className="m-0">Email Address</label>
          <input type="text" name="email" id="email"  placeholder="Enter your Email" className="py-[1.5rem]" />
       
          
          
          <label className="m-0" htmlFor="message">Message</label>
          <textarea type="text" name="message" id="message" rows={5} cols={10}  placeholder="We are always help you" ></textarea>
        
          <div >
          <button type="submit" className="px-4 py-2 rounded-md bg-emerald-400 ">Submit</button>
        </div>
        </div>
        <div className="flex items-center justify-center contact_img px-14">
          <div className="contact_map px-14" data-aos="zoom-out-left">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14774.794717898443!2d88.38105536509983!3d22.2135546759826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a024210a4df2847%3A0x5c7ce899303b4fee!2sTaldi%2C%20West%20Bengal%20743355!5e0!3m2!1sen!2sin!4v1728799027327!5m2!1sen!2sin"
           width="600"
            height="450"
             style={{border:0 }}
             allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
              </iframe>
              

          </div>
        </div>
        </div>
        </form>
      </div>
    </section>
  )
}

export default Contact