//constructor
function Data(name, id, phone1, phone2, location,accomodation,period, dateperiod){
    this.name = name;
    this.id = id;
    this.phone1 = phone1;
    this.phone2 = phone2;
    this.location = location;
    this.accomodation = accomodation;
    this.period = period;
    this.dateperiod = dateperiod;
}

$(document).ready(function(){
    //guidelines
    $("#guide1").click(function(){
        $("#myForm").hide();
        $("#guide").slideDown(1000);
    })

    // back to booking button
    $("#back").click(function(){
        $("#myForm").slideDown(1000);
        $("#guide").hide();
    })

    //proceed button
    $("#proceed").click(function(event){
        event.PreventDefault();

        // $("#sumtable").show()
        $("#myForm").hide()
        

        let pname = $("input#name").val();
        let pidno = $("input#idno").val();
        let phone1 = $("input#phone1").val();
        let phone2 = $("input#phone2").val();
        let plocation = $("#location option:selected").val();
        let paccomodation = $("#accomodate option:selected").val();
        let pperiod = $("input#period").val();
        let pdate = $("input#dateperiod").val();

        var newTenant = new Data(pname,pidno,phone1,phone2,plocation,paccomodation,pperiod,pdate);

        $("#nm").append(pname);
        // $("#idps").append(newTenant.id);
        // $("#phn").append(newTenant.phone1);
        // $("#emcont").append(newTenant.phone2);
        // $("#locat").append(newTenan.location);
        // $("#room").append(newTenant.accomodation);
        // $("#perd").append(newTenant.period);
        // $("#dateprd").append(newTenant.dateperiod);
        
    })


})