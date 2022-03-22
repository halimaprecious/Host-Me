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
    $("#proceed").click(function(){
        
        let pname = $("input#name").val();
        let pidno = $("input#idno").val();
        let phone1 = $("input#phone1").val();
        let phone2 = $("input#phone2").val();
        let plocation = $("#location option:selected").val();
        let paccomodation = $("#accomodate option:selected").val();
        let pperiod = $("input#period").val();
        let pdate = $("input#dateperiod").val();

        // var newTenant = new Data(pname,pidno,phone1,phone2,plocation,paccomodation,pperiod,pdate);
        $("#phone1").attr("minlength", "10");
        $("#phone2").attr("minlength", "10");

         if($("input#name").val()==""||$("input#idno").val()==""||$("input#phone1").val()==""||$("input#phone2").val()==""||
         $("#location option:selected").val()==""||$("#accomodate option:selected").val()==""||
         $("input#period").val()==""||$("input#dateperiod").val()==""){
            alert("Please fill all the required fields")
       
        }
        
        else {
        $("#nm").append(pname);
            $("#idps").append(pidno);
            $("#phn").append(phone1);
            $("#emcont").append(phone2);
            $("#locat").append(plocation);
            $("#room").append(paccomodation);
            $("#perd").append(pperiod);
            $("#dateprd").append(pdate);
            $("#sumtable").show()
            $("#myForm").hide()
        }
        // event.PreventDefault();
        
    });
    //back to booking
    $("#backtobook").click(function(){
        $("#myForm").show();
        $('#myForm')[0].reset(); 
        $("#sumtable").hide();

    });
    //proceed to book
    $("#proceedtobook").click(function(){
        $("#sumtable").hide();

    });


})