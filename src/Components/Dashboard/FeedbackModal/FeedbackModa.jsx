import React from 'react';
import './FeedbackModa.css'
import { FaTelegramPlane } from "react-icons/fa";
import { stringify } from 'postcss';
import { useState } from 'react';
import { useEffect } from 'react';

const FeedbackModa = () => {
    
    return (
        
        <div className='feedback'>
            <form onSubmit={() => handleFeedback(classes._id)} action="">
                <h2>Do you have some feedback?</h2>
                <textarea name="textarea" id="" cols="30" rows="5" placeholder='Send Feedback...'></textarea>
                <input type="submit" value="SEND" />
            </form>
            {/* <button onSubmit={handleFeedback}><span><FaTelegramPlane className='d-inline'></FaTelegramPlane></span></button> */}

        </div>
    );
};

export default FeedbackModa;