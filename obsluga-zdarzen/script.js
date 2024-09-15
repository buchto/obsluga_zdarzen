$(document).ready(function () {
            let isClicked = false; //stan poczatkowy false

            $("#b1").hover(
                function () {
                    if (!isClicked) {
                        $(this).css("background-color", "red");
                    }
                },
                function () {
                    if (!isClicked) {
                        $(this).css("background-color", "gray");
                    }
                }
            );
            
            $("#b1").on("click", function () {
                if (!isClicked) {
                    $("#b1").css("background-color", "red");
                    $("#d2").css({
                        "background-color": "red",
                        "color": "white"
                    });
                    $("h1").html("Obsluga zdarzeń dodana");
                } else {
                    $("#b1").css("background-color", "gray");
                    $("#d2").css({
                        "background-color": "gray",
                        "color": "black"
                    });
                    $("h1").html("Obsługa zdarzeń");
                }

                isClicked = !isClicked; //zeby dalo sie przywrocic do stanu poczatkowego
            });
        });
