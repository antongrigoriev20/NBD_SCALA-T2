db.people.mapReduce(
    function() {
        for (var card in this.credit)
            emit(this.credit[card].currency, {balance: this.credit[card].balance, counter: 1});
     },
    function(key, values) {
        reducedVal = {balance_sum: 0, counter: 0}
        for (var i = 0; i<values.length; i++){
            reducedVal.balance_sum += values[i].balance
            reducedVal.counter++
        }

        return reducedVal;
    },
    {
    query: { "nationality": "Poland", "sex": "Female"},
    out: "poland_female_balance_per_currency",
    finalize: function(key, values) {
            return {
                avg_balance: values.balance_sum/values.counter,
                total_balance: values.balance_sum
            }
        }
    }
)
db.poland_female_balance_per_currency.find()