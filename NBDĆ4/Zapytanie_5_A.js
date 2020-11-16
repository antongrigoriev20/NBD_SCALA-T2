db.people.aggregate([
    {
        "$match": { "nationality": "Poland", "sex": "Female"}
    },
    { "$unwind": "$credit" },
    {
       "$group":
        {
            "_id": "$credit.currency" ,
            "avg_balance": { "$avg": "$credit.balance"},
            "total_balance": { "$sum": "$credit.balance"}
        }
    }
])