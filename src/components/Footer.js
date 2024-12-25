import React from 'react'

export default function Footer() {
  return (
    <>
        <div className='table'>
            <u>Questions? Contact us.</u>

            <div className='tr'>
                <div className='th'><u>FAQ</u></div>
                <div className='th'><u>Help Center</u></div>
                <div className='th'><u>Account</u></div>
                <div className='th'><u>Media Center</u></div>
            </div>

            <div className='tr'>
                <div className='th'><u>Investor Relations</u></div>
                <div className='th'><u>Jobs</u></div>
                <div className='th'><u>Ways to Watch</u></div>
                <div className='th'><u>Terms of Use</u></div>
            </div>

            <div className='tr'>
                <div className='th'><u>Privacy</u></div>
                <div className='th'><u>Cookie Preferences</u></div>
                <div className='th'><u>Corporate Information</u></div>
                <div className='th'><u>Contact Us</u></div>
            </div>

            <div className='tr'>
                <div className='th'><u>Speed Test</u></div>
                <div className='th'><u>Legal Notices</u></div>
                <div className='th'><u>Only on Netflix</u></div>
            </div>



            <div className='drop'>
                <select name="btn" id="btns">
                    <option value="btns">English</option>
                </select>
            </div>

            <p>Netflix Pakistan</p>

        </div>
    </>
  )
}
