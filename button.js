document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("myButton");
    const messageContainer = document.getElementById("myMessage");

    const motds = [
        "Try the mushroom stew!",
        "Awesome!",
        "GOTY!",
        "Limited edition!",
        "It's here!",
        "More than 500 sold!",
        "Holy cow, man!",
        "The bee's knees!",
        "Ceci n'est pas une title screen!"
    ];

    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

    const showRandomMessage = () => {
        let newMessage;
        do {
            newMessage = motds[getRandomInt(0, motds.length)];
        } while (newMessage === messageContainer.innerText);

        
        messageContainer.style.opacity = "0"; 
        setTimeout(() => {
            messageContainer.innerText = newMessage;
            messageContainer.style.opacity = "1";
        }, 100);
    };

    button.addEventListener("click", () => {
        button.classList.add("rotate");

        
        setTimeout(() => {
            button.classList.remove("rotate");
        }, 1000);

        showRandomMessage();
    });

    showRandomMessage(); 
});
