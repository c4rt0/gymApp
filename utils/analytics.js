module.exports = {
    getDateString: function (dt){
        var DD = ("0" + dt.getDate()).slice(-2);
        var MM = ("0" + (dt.getMonth() + 1)).slice(-2);
        var YYYY = dt.getFullYear();

        return YYYY + "-" + MM + "-" + DD;
    },
    getcurrentDate: function () {
    var dt = new Date();
    var DD = ("0" + dt.getDate()).slice(-2);
    var MM = ("0" + (dt.getMonth() + 1)).slice(-2);
    var YYYY = dt.getFullYear();
    var hh = ("0" + dt.getHours()).slice(-2);
    var mm = ("0" + dt.getMinutes()).slice(-2);
    var ss = ("0" + dt.getSeconds()).slice(-2);
    return YYYY + "-" + MM + "-" + DD + " " + hh + ":" + mm + ":" + ss;
    },
    getGoalStatus: function (goal, assessments) {
        let status;
        let d1 = new Date();
        let d2 = goal.date;
        d1 = this.getDateString(d1);
        if(d1 < d2){
            status = 'Open'
        }
        else if(assessments.length > 0 && d1 === d2){
            if(assessments[assessments.length-1].weight === goal.measurements.weight){
                status = 'Achieved';
            }
        }else{
            status = "Missed";
        }
        return status;
    }

};



