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
        
        var pname = $("input#name").val();
        let pidno = $("input#idno").val();
        let phone1 = $("input#phone1").val();
        let phone2 = $("input#phone2").val();
        var plocation = $("#location option:selected").val();
        var paccomodation = $("#accomodate option:selected").val();
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
        $(".pay").slideDown();

    });
        //proceed to confirm mpesa
        $("#confirm1").click(function(){
            $("#myForm").hide();
            // $(".final").show();
            $("#sumtable").hide();
            $(".pay").hide();
            $(".thank").show();

            var pname = $("input#name").val();
            let pidno = $("input#idno").val();
            let phone1 = $("input#phone1").val();
            let phone2 = $("input#phone2").val();
            var plocation = $("#location option:selected").val();
            var paccomodation = $("#accomodate option:selected").val();
            let pperiod = $("input#period").val();
            let pdate = $("input#dateperiod").val();
            
            $("#thank1").append("Thank you "+ pname + " for allowing us to host you. "+"<br>"+ 
            " Your payment of "+ paccomodation + " for a room located in "+ plocation + " for a period of " + pperiod + " month(s) , is supposed to paid be paid through M-Pesa and once we get your message you will "+ 
            " receive our call");
    
        });
        //proceed to confirm paypal
        $("#confirm2").click(function(){
            $("#myForm").hide();
            // $(".final").show();
            $("#sumtable").hide();
            $(".pay").hide();
            $(".thank2").show();

            var pname = $("input#name").val();
            let pidno = $("input#idno").val();
            let phone1 = $("input#phone1").val();
            let phone2 = $("input#phone2").val();
            var plocation = $("#location option:selected").val();
            var paccomodation = $("#accomodate option:selected").val();
            let pperiod = $("input#period").val();
            let pdate = $("input#dateperiod").val();
            
            $("#thank2").append("Thank you "+ pname + " for allowing us to host you. "+"<br>"+ 
            " Your payment of "+ paccomodation + " for a room located in "+ plocation + " for a period of " + pperiod + " month(s), is supposed to be paid using your paypal account and once we get your message you will "+ 
            " receive our call");

        });
        //checkout button
        $("#checkout1").click(function(){
            $("#myForm").show();
            $('#myForm')[0].reset();
            $(".thank").hide();
            $(".thank2").hide();
        });
        $("#checkout").click(function(){
            $("#myForm").show();
            $('#myForm')[0].reset();
            $(".thank").hide();
            $(".thank2").hide();
        });
});