db.people.aggregate([
    {
        "$addFields":
        {
            "bmi": { "$divide": ["$weight", { "$pow": [{"$divide": ["$height", 100]}, 2]}]},
        }
    },
    {
        "$group":
        {
            "_id": "$nationality",
            "min_bmi": { "$min": "$bmi"},
            "avg_bmi": { "$avg": "$bmi"},
            "max_bmi": { "$max": "$bmi"}
        }
    }
])