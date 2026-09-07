/* =================================
   CPP WRLD — THE9TH VERIFIER
================================= */

const codes = {
    "T9-K4M2": "1/9",
    "T9-F8A7": "2/9",
    "T9-D2X5": "3/9",
    "T9-M1Q8": "4/9",
    "T9-R7B3": "5/9",
    "T9-T5C9": "6/9",
    "T9-P9L4": "7/9",
    "T9-X3M8": "8/9",
    "T9-N6Q7": "9/9"
};

const codeInput = document.getElementById("codeInput");
const verifyButton = document.getElementById("verifyButton");
const errorMessage = document.getElementById("errorMessage");

const verifyScreen = document.getElementById("verifyScreen");
const loadingScreen = document.getElementById("loadingScreen");
const resultScreen = document.getElementById("resultScreen");

const pieceNumber = document.getElementById("pieceNumber");

const music = document.getElementById("godfatherAudio");

music.preload = "auto";
music.volume = 0;
music.muted = true;


/* =================================
   INPUT
================================= */

codeInput.addEventListener("input", function () {

    codeInput.value = codeInput.value
        .toUpperCase()
        .replace(/\s/g, "");

    errorMessage.textContent = "";

});


/* =================================
   ENTER
================================= */

codeInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        verifyCode();
    }

});


/* =================================
   VERIFY
================================= */

verifyButton.addEventListener("click", verifyCode);


function verifyCode() {

    const code = codeInput.value
        .trim()
        .toUpperCase();


    if (code === "") {

        errorMessage.textContent = "ENTER YOUR CODE";
        return;

    }


    if (!Object.prototype.hasOwnProperty.call(codes, code)) {

        errorMessage.textContent = "INVALID CODE";
        return;

    }


    const piece = codes[code];

    codeInput.disabled = true;
    verifyButton.disabled = true;

    errorMessage.textContent = "";


    /* =================================
       START MUSIC SILENTLY
    ================================= */

    music.currentTime = 0;
    music.muted = true;
    music.volume = 0;

    music.play().catch(function (error) {

        console.log("Audio error:", error);

    });


    /* =================================
       LOADING
    ================================= */

    verifyScreen.classList.add("hidden");
    loadingScreen.classList.remove("hidden");


    /* =================================
       5 SECONDS
    ================================= */

    setTimeout(function () {

        pieceNumber.textContent = piece;

        loadingScreen.classList.add("hidden");
        resultScreen.classList.remove("hidden");


        /* MUSIC BECOMES AUDIBLE */

        music.muted = false;
        music.volume = 0.8;

    }, 5000);

}