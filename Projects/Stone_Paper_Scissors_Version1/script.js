//get DOM elements
const gameContainer = document.querySelector(".gradient-container"),
    userResult = document.querySelector(".user_result img"),
    compResult = document.querySelector(".comp_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");  //this will make option opacity 1 permanntly
        //therefore loop through each option again
        optionImages.forEach((image2, index2) => {
            //if the current index does'nt match the clicked index
            //remove the "active" class from the otehr option images
            index !== index2 && image2.classList.remove("active")
        });

        // //get the source of the clicked option image
        let imageSrc = e.target.querySelector("img").src;
        userResult.src = imageSrc;

        let randomNumber = Math.floor(Math.random() * 3)
        let compImages = ["resources/rock.png", "resources/paper.png", "resources/scissors.png"]
        compResult.src = compImages[randomNumber];

        let userValue = ["R", "P", "S"][index];
        let compValue = ["R", "P", "S"][randomNumber];

        let outcomes = {
            RR: "Draw",
            RP: "Computer wins🚩",
            RS: "🚩User wins",
            PP: "Draw",
            PR: "🚩User wins",
            PS: "Comp wins🚩",
            SS: "Draw",
            SR: "Comp wins🚩",
            SP: "🚩User wins"
        }

        let outcomeValue = outcomes[userValue + compValue]

        result.textContent = outcomeValue;

    });
});