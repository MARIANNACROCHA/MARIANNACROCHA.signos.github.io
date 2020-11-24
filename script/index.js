$(document).ready(function() {

    $("#enviarbtn").click(function(x){
        let month = $("#month").val();
        let day = $("#day").val();

        if ((month == 1 && day >=20 && day <=31) ||(month == 2 && day <=18))  {
        $("#resultado").html("Aquário &#9810");    
        // alert("Aquario");
        } 
        else if ((month == 2 && day >=19 && day <=31) ||(month == 3 && day <=20))  {
            $("#resultado").html("Peixes &#9811");
            // alert("Peixes");
        }
        else if ((month == 3 && day >=21 && day <=31) ||(month == 4 && day <=19))  {
            $("#resultado").html("Áries &#9800");
            // alert("Áries");
        }
        else if ((month == 4 && day >=20 && day <=31) ||(month == 5 && day <=20))  {
            $("#resultado").html("Touro &#9801");
            // alert("Touro");
        }
        else if ((month == 5 && day >=21 && day <=31) ||(month == 6 && day <=21))  {
            $("#resultado").html("Gêmeos &#9802");
            // alert("Gêmeos");
        }
        else if ((month == 6 && day >=22 && day <=31) ||(month == 7 && day <=22))  {
            $("#resultado").html("Câncer &#9803");
            // alert("Câncer");
        }
        else if ((month == 7 && day >=23 && day <=31) ||(month == 8 && day <=22))  {
            $("#resultado").html("Leão &#9804");
            // alert("Leão");
        }
        else if ((month == 8 && day >=23 && day <=31) ||(month == 9 && day <=22))  {
            $("#resultado").html("Virgem &#9805");
            // alert("Virgem");
        }
        else if ((month == 9 && day >=23 && day <=31) ||(month == 10 && day <=22))  {
            $("#resultado").html("Libra &#9806");
            // alert("Libra");
        }
        else if ((month == 10 && day >=23 && day <=31) ||(month == 11 && day <=21))  {
            $("#resultado").html("Escorpião &#9807");
            // alert("Escorpião");
        }
        else if ((month == 11 && day >=22 && day <=31) ||(month == 12 && day <=21))  {
            $("#resultado").html("Sagitário &#9808");
            // alert("Sagitário");
        }
        else if ((month == 12 && day >=22 && day <=31) ||(month == 1 && day <=19))  {
            $("#resultado").html("Capricórnio &#9809");
            // alert("Capricórnio");
        }
        else {
            $("#resultado").html("Data digitada incorretamente");
            // alert("Data digitada incorretamente")
        }
    });
})
