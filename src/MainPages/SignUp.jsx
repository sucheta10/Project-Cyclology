import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import '../CSS_Style/signup.css'
// import bgImg from '../images/banner.jpg'
import closeButton from '../images/x-lg.svg'


function SignUp() {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [img, setImg] = useState('');
    const [password, setPassword] = useState('');
    const [about_you, setAbout_you] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [emergency_contact, setEmergency_contact] = useState('');
    const [relation_emergency_contact, setRelation_emergency_contact] = useState('')
    const [date_of_birth, setDate_of_birth] = useState('');
    const [blood_group, setBlood_group] = useState('A+');
    const [occupation, setOccupation] = useState('')
    const [gender, setGender] = useState('')
    const [facebook_link, setFacebook_link] = useState('')
    const [insta_link, setInsta_link] = useState('')
    const [twitter_link, setTwitter_link] = useState('')
    const [linkdin_link, setLinkdin_link] = useState('')
    const [accident_insurance_number, setAccident_insurance_number] = useState('') //accident insurance number


    function onChangeValue(e) {
        setGender(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { fname, lname, email, img, password, phone_number, about_you, date_of_birth, blood_group, occupation, gender, facebook_link, insta_link, twitter_link, linkdin_link, accident_insurance_number, emergency_contact, relation_emergency_contact };

        fetch('http://f4af-202-8-112-185.ngrok.io/account/register', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            console.log('Data Send');
        })
    }
    const [logininfo, setlogininfo] = useState('');

    if (logininfo === 201) {
        return (
            <Redirect to='/signin' />
        )
    }

    return (
        <div className='gradient-custom'>
            <section className=" bg-transparent font-serif">
                <div className="container py-5 h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div className="card shadow-2-strong card-registration">
                                <div className="card-body  rounded-lg md:pl-6 md:pr-6 p-8 text-white">
                                    <h3 className="mb-1 pb-2 pb-md-0 mb-md-3 text-5xl text-center">Registration Form</h3>
                                    <form onSubmit={handleSubmit} className='md:pl-8 md:pr-8'>
                                        <div className="row">
                                            <div className="col-md-6 mb-1">
                                                <div className="form-outline">
                                                    <input type="text" id="firstName" className="form-control form-control-lg" required
                                                        onChange={(e) => setFname(e.target.value)} />
                                                    <label className="form-label" for="firstName">First Name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-1">
                                                <div className="form-outline">
                                                    <input type="text" id="lastName" className="form-control form-control-lg" required
                                                        onChange={(e) => setLname(e.target.value)} />
                                                    <label className="form-label" for="lastName">Last Name</label>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-md-6 mb-1 pb-2">
                                                <div className="form-outline">
                                                    <input type="email" id="emailaddress" className="form-control form-control-lg" required
                                                        onChange={(e) => setEmail(e.target.value)} />
                                                    <label className="form-label" for="emailaddress">Email</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-1 pb-2">
                                                <div className="form-outline">
                                                    <input type="password" id="password" className="form-control form-control-lg" required
                                                        onChange={(e) => setPassword(e.target.value)} />
                                                    <label className="form-label" for="password">Password</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-1 pb-2">
                                                <div className="form-outline">
                                                    <input type="number" id="phone_number" className="form-control form-control-lg" required
                                                        onChange={(e) => setPhone_number(e.target.value)} />
                                                    <label className="form-label" for="phone_number">Phone Number</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-1 pb-2">
                                                <div className="form-outline">
                                                    <input type="number" id="emergency_contact" className="form-control form-control-lg" required
                                                        onChange={(e) => setEmergency_contact(e.target.value)} />
                                                    <label className="form-label" for="emergency_contact">Emergency Number</label>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-md-6 mb-1 d-flex align-items-center">
                                                <div className="form-outline datepicker w-100">
                                                    <input type="text" id="relation_emergency_contact" className="form-control form-control-lg" required
                                                        onChange={(e) => setRelation_emergency_contact(e.target.value)} />
                                                    <label className="form-label" for="text">Emergency Contact Relation</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-1" onChange={onChangeValue}>
                                                <h6 className="mb-2 pb-1">Gender: </h6>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="inlineRadioOptions"
                                                        id="femaleGender"
                                                        value="Female"
                                                        checked={gender === "Female"}
                                                    />
                                                    <label className="form-check-label" for="femaleGender">Female</label>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="inlineRadioOptions"
                                                        id="maleGender"
                                                        value="Male"
                                                        checked={gender === "Male"}
                                                    />
                                                    <label className="form-check-label" for="maleGender">Male</label>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="inlineRadioOptions"
                                                        id="otherGender"
                                                        value="Other"
                                                        checked={gender === "Other"}
                                                    />
                                                    <label className="form-check-label" for="otherGender">Other</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-1 pb-2">
                                                <div className="form-outline">
                                                    <select className="form-control form-control-lg" required name="form-label" id="blood_group" onChange={(e) => setBlood_group(e.target.value)} placeholder='Choose gender'>
                                                        <option value="A+">A+</option>
                                                        <option value="B+">B+</option>
                                                        <option value="AB+">AB+</option>
                                                        <option value="O+">O+</option>
                                                        <option value="A-">A-</option>
                                                        <option value="B-">B-</option>
                                                        <option value="AB-">AB-</option>
                                                        <option value="O-">O-</option>
                                                    </select>
                                                    <label className="form-label" for="phone_number">Blood Group</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-1 pb-2">
                                                <div className="form-outline datepicker w-100">
                                                    <input
                                                        type="Date"
                                                        className="form-control form-control-lg"
                                                        id="birthdayDate" required
                                                        onChange={(e) => setDate_of_birth(e.target.value)}
                                                    />
                                                    <label for="birthdayDate" className="form-label">Birthday</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-1 pb-2">
                                                <div className="form-outline">
                                                    <input type="text" id="facebook_link" className="form-control form-control-lg" required
                                                        onChange={(e) => setFacebook_link(e.target.value)} />
                                                    <label className="form-label" for="emailAddress">Facebook id</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-1 pb-2">
                                                <div className="form-outline">
                                                    <input type="text" id="insta_link" className="form-control form-control-lg" required
                                                        onChange={(e) => setInsta_link(e.target.value)} />
                                                    <label className="form-label" for="phone_number">Instagram id</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-1 pb-2">
                                                <div className="form-outline">
                                                    <input type="text" id="facebook_link" className="form-control form-control-lg" required
                                                        onChange={(e) => setTwitter_link(e.target.value)} />
                                                    <label className="form-label" for="emailAddress">Twitter id</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-1 pb-2">
                                                <div className="form-outline">
                                                    <input type="text" id="insta_link" className="form-control form-control-lg" required
                                                        onChange={(e) => setLinkdin_link(e.target.value)} />
                                                    <label className="form-label" for="phone_number">Linkdin id</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-1 pb-2">
                                                <div className="form-outline">
                                                    <input type="text" id="occupation" className="form-control form-control-lg" required
                                                        onChange={(e) => setOccupation(e.target.value)} />
                                                    <label className="form-label" for="text">Occupation</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-1 pb-2">
                                                <div className="form-outline">
                                                    <input type="text" id="accident_insurance_number" className="form-control form-control-lg" required
                                                        onChange={(e) => setAccident_insurance_number(e.target.value)} />
                                                    <label className="form-label" for="emailAddress">Accident insurance number</label>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-md-6 mb-1 pb-2">
                                                <div className="form-outline">
                                                    <input type="file" id="myFile" name="filename" className="form-control form-control-lg"
                                                        onChange={(e) => setImg(e.target.value)} />
                                                    <label className="form-label" for="myFile">Upload your Image</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-1 pb-2">
                                                <div className="form-outline">
                                                    <input type="text" id="about_you" className="form-control form-control-lg" required
                                                        onChange={(e) => setAbout_you(e.target.value)} />
                                                    <label className="form-label" for="phone_number">About you</label>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="form-check d-flex justify-content-center mb-3">
                                            <input
                                                className="form-check-input me-2"
                                                type="checkbox"
                                                value=""
                                                id="form2Example3c"
                                                required
                                            />
                                            <label className="form-check-label" for="form2Example3">
                                                I read & agree all statements in <a href="#!" data-bs-toggle="modal" data-bs-target="#exampleModal"><u className='space-y-2'>Terms of service</u></a>
                                            </label>
                                            {/* <!-- Modal --> */}
                                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                            <button type="button" style={{ float: 'right' }} data-bs-dismiss="modal" aria-label="Close"><img className='w-6' src={closeButton} alt=''></img></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            ...
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-primary text-black" data-bs-dismiss="modal">Close</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-2 d-flex justify-content-center">
                                            <button className="rounded-full text-lg font-serif border-4 border-blue-800 hover:text-white py-2 px-20 bg-[#1814ff]">Submit</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default SignUp