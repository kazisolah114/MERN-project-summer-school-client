import React, { useContext } from 'react';
import './AddClass.css'
import { AuthContenxt } from '../../../Provider/AuthProvider';

const AddClass = () => {
    const { profile } = useContext(AuthContenxt)
    // console.log(profile)
    const handleAddClass = event => {
        event.preventDefault();
        const form = event.target;
        const cname = form.cname.value;
        const cimage = form.cimage.value;
        const insname = form.insname.value;
        const insemail = form.insemail.value;
        const seats = form.seats.value;
        const price = form.price.value;
        const result = { cname, cimage, insname, insemail, seats, price }

        form.reset()
        fetch(`https://summer-school-camp-server-kazisolah114.vercel.app/addclass`, {
            method: 'POST',
            body: JSON.stringify(result),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className='add-class'>
            <h2 className='text-center text-2xl text-white'>Add A Class</h2>
            <form onSubmit={handleAddClass} action="">
                <input type="text" name="cname" placeholder='Class Name' />
                <input type="text" name="cimage" placeholder='Class Image URL' />
                <input type="text" name="insname" value={profile?.displayName} readOnly />
                <input type="email" name="insemail" value={profile?.email} readOnly />
                <div className='flex gap-2'>
                    <input type="number" name="seats" placeholder='Available Seats' />
                    <input type="number" name='price' placeholder='Price' />
                </div>
                <input type="submit" value="Add Now" />
            </form>
        </div>
    );
};

export default AddClass;