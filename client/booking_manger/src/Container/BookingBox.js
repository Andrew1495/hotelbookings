import {useEffect, useState} from 'react';
import {getBookings} from '../BookingService'
import BookingList from '../Components/BookingList';
import BookingForm from '../Components/BookingForm';

function BookingBox() {

    const [hotelBookings, setHotelBookings] = useState([]);

    useEffect(() => {
        getBookings().then((allBookings) => {
            setHotelBookings(allBookings);
        })
    }, []);


    const addBooking = (booking) => {
        const temp =  hotelBookings.map(b => b);
        temp.push(booking);
        setHotelBookings(temp)
    }

  


    const removeBooking = (id) => {
        const temp = hotelBookings.map(b =>b);
        const indexToDel = temp.map(b => b._id).indexOf(id);
        console.log(indexToDel);
        temp.splice(indexToDel, 1);
        setHotelBookings(temp);
        }

    const updateCheckedIn = (id) => {
        
        const temp = hotelBookings.map(b =>b);
        const indexToUpdate = temp.map(b => b._id).indexOf(id);
        setHotelBookings(temp)
    }


return (
    <>
        <BookingForm  addBooking={addBooking}/>
        <BookingList bookings={hotelBookings} removeBooking={removeBooking} updateCheckedIn={updateCheckedIn}/>
    </>

)

}

export default BookingBox;