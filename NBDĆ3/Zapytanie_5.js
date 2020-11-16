  printjson(db.people.find({},{
        first_name: 1,
        last_name: 1,
         _id: 0,
          location:{city:{ $cond: { if:  { $gte :["$birth_date", new ISODate("2001-01-01T00:00:00Z")] }, then: 1, else: 0 } }}
    }
    ).toArray())