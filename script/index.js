$( document ).ready(function() {

    $("#enviarbtn").click(function(x){
        let month = $("#month").val();
        let day = $("#day").val();

        if ((month == 1 && day >=20) ||(month == 2 && day <=18))  {
        $("#resultado").html("Aquário");    
        // alert("Aquario");
        } 
        else if ((month == 2 && day >=19) ||(month == 3 && day <=20))  {
            $("#resultado").html("Peixes");
            // alert("Peixes");
        }
        else if ((month == 3 && day >=21) ||(month == 4 && day <=19))  {
            $("#resultado").html("Áries");
            // alert("Áries");
        }
        else if ((month == 4 && day >=20) ||(month == 5 && day <=20))  {
            $("#resultado").html("Touro");
            // alert("Touro");
        }
        else if ((month == 5 && day >=21) ||(month == 6 && day <=21))  {
            $("#resultado").html("Gêmeos");
            // alert("Gêmeos");
        }
        else if ((month == 6 && day >=22) ||(month == 7 && day <=22))  {
            $("#resultado").html("Câncer");
            // alert("Câncer");
        }
        else if ((month == 7 && day >=23) ||(month == 8 && day <=22))  {
            $("#resultado").html("Leão");
            // alert("Leão");
        }
        else if ((month == 8 && day >=23) ||(month == 9 && day <=22))  {
            $("#resultado").html("Virgem");
            // alert("Virgem");
        }
        else if ((month == 9 && day >=23) ||(month == 10 && day <=22))  {
            $("#resultado").html("Libra");
            // alert("Libra");
        }
        else if ((month == 10 && day >=23) ||(month == 11 && day <=21))  {
            $("#resultado").html("Escorpião");
            // alert("Escorpião");
        }
        else if ((month == 11 && day >=22) ||(month == 12 && day <=21))  {
            $("#resultado").html("Sagitário");
            // alert("Sagitário");
        }
        else if ((month == 12 && day >=22) ||(month == 1 && day <=19))  {
            $("#resultado").html("Capricórnio");
            // alert("Capricórnio");
        }
        else {
            $("#resultado").html("Data digitada incorretamente");
            // alert("Data digitada incorretamente")
        }
    });
})
