db.people.aggregate([
    { "$unwind": "$credit" },
    {
        "$group":
        {
            "_id": "$credit.currency" ,
            "total_balance": { "$sum": "$credit.balance"}
        },
    },
])