db.people.mapReduce(
    function() {
        for (var card in this.credit)
            emit(this.credit[card].currency, this.credit[card].balance);
     },
    function(key, values) {
        return Array.sum(values)
    },
    { out: "total_balance_per_currency" }
)
db.total_balance_per_currency.find(