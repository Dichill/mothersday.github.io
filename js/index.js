$(document).ready(function () {
    $("continueBttn").fadeOut(1000);
})

const bgMusic = new Audio("assets/goldenhour.mp3");

function StartGreet() {
    bgMusic.play();

    $(".main").fadeOut(3000);
    $(".letter").fadeIn(3000, () => {
        TypeWriter();
    });
}

var i = 0;

function TypeWriter() {
    const txt = `I wanted to give you flowers physically, but since I can't, this is all I can do for now.
    I wish you the best ma! I'll be with you guys soon enough. Stay safe always ma, and know that I'll always love you! - Dichill`

    if (i < txt.length) {
        document.getElementById("message").innerHTML += txt.charAt(i);
        i++;
        setTimeout(TypeWriter, 50);
    }

    if (i == txt.length) {
        $("#continueBttn").fadeIn(3000);
    }
}

function ShowHeart() {
    $(".letter").fadeOut(3000, () => {
        $(".envelope").fadeIn(3000);
        $("body").delay(3000).css("background-color", "mistyrose").fadeIn(3000, () => {
            $(".envelope").fadeOut(3000).delay(5000, () => {
                $(".card").fadeIn(3000);

                $("body").backstretch(
                    [
                        "../images/bg1.jpg",
                        "../images/bg2.jpg",
                        "../images/bg3.jpg",
                        "../images/bg4.jpg",
                        "../images/bg5.jpg"
                    ], 
                    {
                        duration: 2000, 
                        fade: 700
                    });
            });
        })
    })
}