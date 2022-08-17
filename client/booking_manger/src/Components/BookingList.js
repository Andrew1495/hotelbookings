import BookingCard from "./BookingCard"

const BookingList = (({bookings, removeBooking, updateCheckedIn}) => {
    const bookingArray = bookings.map((booking) => {
        return <BookingCard
            booking={booking}
            removeBooking={removeBooking}
            updateCheckedIn={updateCheckedIn}
            key={booking._id}
            />
    })

    return(
        <ul>
            {bookingArray}
        </ul>

    )
})


export default BookingList;