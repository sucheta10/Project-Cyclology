import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
// import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
// import Googlelogo from '../images/google-logo.jpg'
// import stravalogo from '../images/strava-logo.png'
// import bgImg from '../images/banner.jpg'
import '../CSS_Style/LoginPage.css'


function SignIn(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [logininfo, setlogininfo] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };

    setIsPending(true);

    const res = await fetch('http://f4af-202-8-112-185.ngrok.io/account/login', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)

    }).then(res => {
      console.log('Data Send');
      setIsPending(false);
      console.log(document.cookie);
      setlogininfo(res.status);
    }).catch((e) => {
      alert('Wrong id password')
    })
  }


  if (logininfo === 200) {
    return (
      <Redirect to='/' />
    )
  }


  return (
    <div className='gradient-custom'>
      <section className="vh-100 text-white font-serif">
        <div className="mask d-flex align-items-center h-100">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: '15px' }}>
                  <div className="card-body p-5 rounded-lg">
                    <h2 className="mb-1 pb-2 pb-md-0 mb-md-3 text-5xl text-center">Login</h2>

                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-2">
                        <input type="email" id="form3Example3cg" className="form-control form-control-lg" required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)} />
                        <label className="form-label" htmlFor="form3Example1cg">Your Email</label>
                      </div>

                      <div className="form-outline mb-2">
                        <input type="password" id="form3Example4cg" className="form-control form-control-lg" required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)} />
                        <label className="form-label" htmlFor="form3Example3cg">Password</label>
                      </div>

                      <div className="mb-8">
                        {/* <div className="col d-flex justify-content-center">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label className="form-check-label" htmlFor="form2Example3">Remember me </label>
                        </div> */}

                        <div style={{ float: 'right' }}>
                          <Link to="/forgot">Forgot password?</Link>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center">
                        {!isPending && <button className="rounded-full text-lg font-serif border-4 border-blue-800 hover:text-white py-2 px-20 bg-[#1814ff]">Submit</button>}
                        {isPending && <button disabled className="rounded-full text-lg font-serif border-4 border-blue-800 hover:text-white py-2 px-20 bg-[#1814ff]">Submit..</button>}
                      </div>
                      <p className="text-center text-white mt-3 mb-0 font-serif">Have already an account? <Link to="/signup" className="fw-bold text-body"><u className='text-white pl-1'>Create here</u></Link></p>
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
export default SignIn