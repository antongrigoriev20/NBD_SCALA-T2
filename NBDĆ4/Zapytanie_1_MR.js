db.people.mapReduce(
    function() {
        emit(this.sex, {weight: this.weight, height: this.height, counter: 1});
     },
    function(key, values) {
        reducedVal = {sum_weight: 0, sum_height: 0, counter: 0};

        for (var i = 0;i < values.length; i++){
             reducedVal.sum_weight += values[i].weight
             reducedVal.sum_height += values[i].height
             reducedVal.counter++
        }
        return reducedVal;
    },
    {
        out: "avg_weight_height_per_sex",
        finalize: function(key, values) {
            return {
                avg_weight: values.sum_weight/values.counter,
                avg_height: values.sum_height/values.counter
            }
        }
    }
)
db.avg_weight_height_per_sex.find()