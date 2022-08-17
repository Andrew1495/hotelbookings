use bookings;

db.dropDatabase()

db.bookings.insertMany([

{
    name: "Andrew",
    email: "andrew@email.com",
    date: "2022-08-17",
    checked_in: "true"
},
{
    name: "pep",
    email: "pep@email.com",
    date: "2022-08-17",
    checked_in: "false"
}

])

















