// for user
let user_choice;
let decision = ['r','p','s'];

let len = document.querySelectorAll(".option-button").length;

for (let i = 0; i < len; i++) {
    document.querySelectorAll(".option-button")[i].addEventListener("click", function (event) {
        
        let change1;
        let new_source;
        let new_img;
        if (event.target.className === "choice-rock choice-img"){
            user_choice = 'r';
            change1 = "rock.png";
            new_source = "resources/"+change1;
            new_img = document.querySelectorAll(".user_image");
            new_img.setAttribute("scr",new_source);
        }
        else if(event.target.className === "choice-paper choice-img"){
            user_choice = 'p';
            change1 = "paper.png";
            new_source = "resources/"+change1;
            new_img = document.querySelector(".user_image");
            new_img.setAttribute("scr",new_source);
        }
        else if(event.target.className === "choice-scissor choice-img"){
            user_choice = 's';
            change1 = "scissors.png";
            new_source = "resources/"+change1;
            new_img = document.querySelector(".user_image");
            new_img.setAttribute("scr",new_source);
        }
        console.log(user_choice);
    });
}

