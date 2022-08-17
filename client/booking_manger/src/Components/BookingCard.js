import { deleteBookings } from "../BookingService";
import { updateBookings } from "../BookingService";


const BookingCard = (({booking, removeBooking, updateCheckedIn}) => {
    const handleDelete = () => {
        deleteBookings(booking._id).then(()=>{
            removeBooking(booking._id);
        })
    }

    const handleUpdate = () => {
        if(booking.checked_in === "false"){
        booking.checked_in = "true";
        updateCheckedIn(booking._id)
        updateBookings(booking._id, booking)
        }
        else{
            booking.checked_in = "false";
            updateCheckedIn(booking._id)
            updateBookings(booking._id, booking)
        }
    }


    return(
        <li>
            <p>{booking.name}</p>
            <p>{booking.email}</p>
            <p>{booking.date}</p>
            <p>{booking.checked_in}</p>
            <button onClick={handleDelete}>🗑</button>
            <button onClick={handleUpdate}> check</button>
        </li>
    )


})

export default BookingCard