// get DOM elements
const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");     // this will make option opacity 1 permanantly

    //therefore lopp through each option again
    optionImages.forEach((image2, index2) => {
      // if the current index does'nt match the clicked index
      // remove the "active" class from the other option images
      index !== index2 && image2.classList.remove("active")
    });

    //get the source of the clicked option image
    let imageSrc = e.target.querySelector("img").src;
    userResult.src = imageSrc;

    // generate a random number between 0 adn 2
    let randomNumber = Math.floor(Math.random()*3);
    // create an array of CPU image options
    let cpuImages = ["resources/rock.png","resources/paper.png","resources/scissors.png"];
    // set the CPU image to a random option from the array
    cpuResult.src = cpuImages[randomNumber];

    //assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
    let cpuValue = ["R","P","S"][randomNumber];
    //assign a letter value to the clicked option (based on index)
    let userValue = ["R","P","S"][index];

    // create an object with all possible outcomes
    let outcomes = {
      RR: "Draw",
      RP: "Computer wins",
      RS: "User wins",
      PP: "Draw",
      PR: "User wins",
      PS: "Comp wins",
      SS: "Draw",
      SR: "Comp wins",
      SP: "User wins"
    }

    //Look up the outcome value based on user and cpu otions
    let outComeValue = outcomes[userValue + cpuValue];
    result.textContent = outComeValue;
    
  })
})