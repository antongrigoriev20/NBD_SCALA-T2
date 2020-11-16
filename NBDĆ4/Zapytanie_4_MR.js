db.people.mapReduce(
    function(){
        bmi = this.weight/Math.pow(this.height/100, 2)
        emit(this.nationality, {bmi: bmi, bmi_min: bmi, bmi_max: bmi, counter: 1});
    },
    function(key, values){
        reducedVal = {bmi_sum: 0, bmi_min: values[0].bmi_min, bmi_max: values[0].bmi_max, counter: 0}

        for (var i = 0;i < values.length; i++){
            if (values[i].bmi < reducedVal.bmi_min){
                reducedVal.bmi_min = values[i].bmi
            }
            else if (values[i].bmi > reducedVal.bmi_max){
                reducedVal.bmi_max = values[i].bmi
            }
            reducedVal.bmi_sum += values[i].bmi
            reducedVal.counter++
        }
        return reducedVal;
    },

    {
        out: "bmi_by_nationality",
        finalize: function(key, values) {
            return {
                min_bmi: values.bmi_min,
                avg_bmi: values.bmi_sum/values.counter,
                max_bmi: values.bmi_max,
            }
        }
    }
)
db.bmi_by_nationality.find()