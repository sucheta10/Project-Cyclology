import React from 'react'

function Header() {
    return (
        <div id='main' className='font-serif'>
            <div className='pr-heading name font-serif'>
                <h1><span>RIDE </span><span className='font-serif text-white'> EXPLORE </span><span className='font-serif text-white'> INSPIRE</span> WI<span>TH CYCLOL</span>OGY</h1>
                {/* <p className='details font-serif'>WI<span className='font-bold'>TH CYCLOL</span>OGY</p> */}
                <div className='pr-btns'>
                    <a href='/login' className='pr-btn font-serif hover:animate-bounce'>JOIN US</a>
                </div>
            </div>
        </div>
    )
}

export default Header;