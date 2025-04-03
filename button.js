const motds = [
    "Try the mushroom stew!",
    "Awesome!",
    "GOTY!",
    "Limited edition!",
    "It's here!",
    "More than 999 sold!",
    "Holy cow, man!",
    "The bee's knees!",
    "Ceci n'est pas une title screen!",
    " Achil kijkt Fortnite de hele tijd",
    "Efe kijkt X de hele TIJD",
    "Abdullah Werkt heel Hard en is een topper",
];

const getRandomInt = function(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

const showRandomMessage = function() {
    const messageContainer = document.querySelector("#myMessage");
    
    const currentMessage = messageContainer.innerText;
    const filteredMessages = motds.filter((motd) => motd !== currentMessage);
    const randomIndex = getRandomInt(0, filteredMessages.length);

    messageContainer.innerText = filteredMessages[randomIndex];
}

const addButtonClickEvent = function() {
    const buttonElement = document.querySelector("#myButton");

    buttonElement.addEventListener("click", showRandomMessage);
}

document.addEventListener("DOMContentLoaded", addButtonClickEvent);
document.addEventListener("DOMContentLoaded", showRandomMessage);
