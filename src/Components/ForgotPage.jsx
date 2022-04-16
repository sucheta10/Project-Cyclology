import React, { useState } from 'react'
import '../CSS_Style/LoginPage.css'
// import axios from 'axios';

function ForgotPage() {

  const [email, setEmail] = useState('');
  const [isPending, setIsPending] = useState(false);
  // const [lyricsItem, setLyricsItem] = useState(null);
  // const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email };

    setIsPending(true);

    fetch('http://19bf-202-8-112-185.ngrok.io/login', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(() => {
      console.log('Data Send');
      setIsPending(false);
    })
  }

  // const handleChange = async () => {
  //   try {
  //     const data = await axios
  //       .get(`https://api.lyrics.ovh/v1/Eminem/Godzilla`)
  //       .then(res => {
  //         console.log(res);
  //         // setLyricsItem(res.data.lyrics);
  //       });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  // useEffect(() => {
  //   handleChange()
  // }, [])

  return (
    <div className='gradient-custom'>
      {/* {lyricsItem} */}
      <section className="vh-100 text-white font-serif">
        <div className="mask d-flex align-items-center h-100">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: '15px' }}>
                  <div className="card-body p-5 rounded-lg">
                    <h2 className="mb-1 pb-2 pb-md-0 mb-md-3 text-5xl text-center">Forgot Password</h2>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-2">
                        <input type="email" id="form3Example3cg" className="form-control form-control-lg" required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)} />
                        <label className="form-label" for="form3Example1cg">Your Email</label>
                      </div>

                      <div className="d-flex justify-content-center">
                        {!isPending && <button className="rounded-full text-lg font-serif border-4 border-blue-800 hover:text-white py-2 px-20 bg-[#1814ff] hover:animate-pulse">Submit</button>}
                        {isPending && <button disabled className="rounded-full text-lg font-serif border-4 border-blue-800 hover:text-white py-2 px-20 bg-[#1814ff] hover:animate-pulse">Submit..</button>}
                      </div>
                    </form>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ForgotPage