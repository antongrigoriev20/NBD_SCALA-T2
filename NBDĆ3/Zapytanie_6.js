db.people.insertOne({
    "birth_date": ISODate("1999-04-27"),
    "credit": {
        "balance": 100000.00,
        "currency": "USD",
        "number": "3133444411441840",
        "type": "mastercard"
    },
    "description": "Hello.",
    "email": "s23672@pjwstk.edu.pl",
    "first_name": "Anton",
    "height": 175.0,
    "job": "Student",
    "last_name": "Hryhoriev",
    "location": {
        "address": {
            "streetname": "Khreshchatyk",
            "streetnumber": "10"
        },
        "city": "Kyiv",
    },
    "nationality": "Ukrainian",
    "sex": "Male",
    "weight": 75.0
})