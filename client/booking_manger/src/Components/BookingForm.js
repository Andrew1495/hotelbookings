import {useState} from "react";
import { postBooking } from "../BookingService";


const BookingForm = (({addBooking}) => {


    const [formData, setFormData] = useState(
    {
        name: "",
        email: "",
        date: "",
        checked_in: "false"
    })

    const onChange = (event) => {
        const newFormData = Object.assign({}, formData);
        newFormData[event.target.name] = event.target.value;
        newFormData.checked_in = "false"
        setFormData(newFormData)
    }



    const onSubmit = (event) => {
        event.preventDefault();
        postBooking(formData).then((data) => {addBooking(data)})
        setFormData(
            {
                name: "",
                email: "",
                date: "",
                checked_in: "false"
            }
        )
    }



    return (

        <form onSubmit={onSubmit}  id="booking-form">
            <h2>Make a Booking</h2>
            <div className="">
                <label htmlFor="name">Name:</label>
                <input onChange={onChange} type="text"
                 name="name" 
                 id="name" 
                 value={formData.name} required/>
            </div>
            <div className="">
                <label htmlFor="email">Email:</label>
                <input onChange={onChange} type="text"
                 name="email" 
                 id="email" 
                 value={formData.email} required/>
            </div>
            <div className="">
                <label htmlFor="date">Date:</label>
                <input onChange={onChange} type="date"
                 name="date" 
                 id="date" 
                 value={formData.date} required/>
            </div>
            <input type="submit" value="Save" id="save" />
        </form>
    )
})


export default BookingForm;