// import Head from 'next/head'
import '../CSS_Style/newReg.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react';

export default function Home() {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [conpassword, setConpassword] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [date_of_birth, setDate_of_birth] = useState('');
    const [blood_group, setBlood_group] = useState('');
    const [gender, setGender] = useState('')
    // const [isPending, setIsPending] = useState(false);

    function onChangeValue(e) {
        setGender(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { fname, lname, email, phonenumber, date_of_birth, blood_group, gender };

        // setIsPending(true);

        fetch('http://19bf-202-8-112-185.ngrok.io/signup', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            console.log('Data Send');
            // setIsPending(false);
        })
    }

    const {
        register,
        // handleSubmit,
        formState: { errors, isValid }
    } = useForm({ mode: 'all' });

    // const onSubmit = data => console.log(data);

    /** Input field component */
    const Input = ({ label, required, type, placeholder }) => (
        <div>
            <legend>{label}</legend>
            <input
                {...register(label, { required })}
                className={errors[label] && 'inputInvalid'}
                type={type} placeholder={placeholder}
            />
            {errors[label] && <span>mandatory</span>}
        </div>
    )

    /** Group the person input fields in a component */
    const PersonFields = () => (
        <section className='inputGroup'>
            <h3>Personal information</h3>
            <Input label="First name" id="firstName" required type="text" placeholder="Ex: Maria Leopoldina de Habsburgo" onChange={(e) => setFname(e.target.value)} />
            <Input label="Last name" id="lastName" required type="text" placeholder="Ex: Maria Leopoldina de Habsburgo" onChange={(e) => setLname(e.target.value)} />
            <Input label="Birthday" required type="date" placeholder="dd/mm/aaa" onChange={(e) => setDate_of_birth(e.target.value)} />
            <Input label="Blood Group" required type="bloodgroup" placeholder="Blood Group" onChange={(e) => setBlood_group(e.target.value)} />
            <div class="col-md-6 mb-1" onChange={onChangeValue}>
                <h6 class="mb-2 pb-1">Gender: </h6>
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="femaleGender"
                        value="Female"
                        checked={gender === "Female"}
                        required
                    />
                    <label class="form-check-label" for="femaleGender">Female</label>
                </div>

                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="maleGender"
                        value="Male"
                        checked={gender === "Male"}
                        required
                    />
                    <label class="form-check-label" for="maleGender">Male</label>
                </div>

                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="otherGender"
                        value="Other"
                        checked={gender === "Other"}
                        required
                    />
                    <label class="form-check-label" for="otherGender">Other</label>
                </div>
            </div>

        </section>
    )

    /** Group the contact input fields in a component */
    const ContactFields = () => (
        <section className='inputGroup'>
            <h3>Contact</h3>
            <Input label="Email" required type="email" placeholder="exemple@exemple.com" onChange={(e) => setEmail(e.target.value)} />
            <Input label="Phone" required type="tel" placeholder="(00) 0.0000-0000" onChange={(e) => setPhonenumber(e.target.value)} />
        </section>
    )

    /** Group the address input fields in a component */
    const AddressFields = () => (
        <section className='inputGroup'>
            <h3>Address</h3>
            <Input label="Password" required type="text" placeholder="Street name, avenue, etc..." />
            <Input label="Number" required type="number" placeholder="000" />
        </section>
    )

    /** Nnavigation between steps */
    const rightArrow = "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/next-arrow_1pmaQTqF3.svg?updatedAt=1634410703345"
    const leftArrow = "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/back-arrow_ZBmeHiBP3.svg?updatedAt=1634410703363"

    const Navigation = () => (
        <section className='navigationControls'>
            {
                step === fieldGroups.length - 1 &&
                <button type="submit" className='submitButton' disabled={!isValid}>
                    SAVE
                </button>
            }
            {
                step < fieldGroups.length - 1 &&
                <button type="button" className='nextButton' disabled={!isValid} onClick={() => { setStep(step + 1) }}>
                    <img src={rightArrow} alt='' />
                    NEXT
                </button>
            }
            {
                step > 0 &&
                <button type="button" className='backButton' onClick={() => { setStep(step - 1) }}>
                    <img src={leftArrow} alt='' />
                    BACK
                </button>
            }
        </section>
    )

    /** Mark the input group already filled as blue or gray if not */
    const Reference = () => (
        <footer className='reference'>
            {renderMarkers()}
        </footer>
    )
    function renderMarkers() {
        let markers = []
        for (let i = 0; i < fieldGroups.length; i++)
            markers.push(<span className={step >= i ? 'markerBlue' : 'markerGray'} />)
        return markers
    }

    const [step, setStep] = useState(0)

    const fieldGroups = [
        <PersonFields />,
        <ContactFields />,
        <AddressFields />
    ]

    return (
        <div>
            <main className='mainContainer'>
                <form className='form' onSubmit={handleSubmit}>
                    <h2>User Register</h2>
                    {fieldGroups[step]}
                    <Navigation />
                    <Reference />
                </form>
            </main>

        </div>
    )
}