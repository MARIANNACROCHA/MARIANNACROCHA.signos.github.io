$( document ).ready(function() {

    $("#enviarbtn").click(function(){
        let month = $("#month").val();
        let day = $("#day").val();

        if ((month == 1 && day >=20) ||(month == 2 && day <=18))  {
            alert("Aquario");
        } 
        else if ((month == 2 && day >=19) ||(month == 3 && day <=20))  {
            alert("Peixes");
        }
        else if ((month == 3 && day >=21) ||(month == 4 && day <=19))  {
            alert("Áries");
        }
        else if ((month == 4 && day >=20) ||(month == 5 && day <=20))  {
            alert("Touro");
        }
        else if ((month == 5 && day >=21) ||(month == 6 && day <=21))  {
            alert("Gêmeos");
        }
        else if ((month == 6 && day >=22) ||(month == 7 && day <=22))  {
            alert("Câncer");
        }
        else if ((month == 7 && day >=23) ||(month == 8 && day <=22))  {
            alert("Leão");
        }
        else if ((month == 8 && day >=23) ||(month == 9 && day <=22))  {
            alert("Virgem");
        }
        else if ((month == 9 && day >=23) ||(month == 10 && day <=22))  {
            alert("Libra");
        }
        else if ((month == 10 && day >=23) ||(month == 11 && day <=21))  {
            alert("Escorpião");
        }
        else if ((month == 11 && day >=22) ||(month == 12 && day <=21))  {
            alert("Sagitário");
        }
        else if ((month == 12 && day >=22) ||(month == 1 && day <=19))  {
            alert("Sagitário");
        }
        else {
            alert("Data digitada incorretamente")
        }
    });
})
