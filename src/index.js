import "./styles.css";




/*
window.addEventListener("load", () => {
    contentCreator();
}) 

const homeButton = document.querySelector("#homeButton");


const contentCreator = () => {
    const content = document.querySelector("#content");
    const createDiv = document.createElement("div");
    createDiv.id = "content-wrapper";
    content.appendChild(createDiv);
    for(let i = 0; i <= 3; i++){
        const contentWrapper = document.querySelector("#content-wrapper");
        const createChild = document.createElement("div");
        const createH1 = document.createElement("h1")
        const createH2 = document.createElement("h2");
        const createP = document.createElement("p");
        contentWrapper.appendChild(createChild);
        switch(i){
            case 0:
                createChild.id = "info-wrapper";
                createChild.appendChild(createH2);
                createChild.appendChild(createP);
                createH2.innerHTML = `Leap into a world of enchantment and delight at our Froggy Fantasy Bar!`
                createP.innerHTML = `Step into a whimsical forest where the air is filled with the sweet scent of adventure, 
                    and every drink is a potion waiting to be discovered. 
                    Whether you're hopping in for a magical night with friends or seeking refuge by the lily pond of relaxation, 
                    we’ve got something to charm every traveler. From frothy concoctions to enchanted elixirs, 
                    our menu is designed to bring out the inner adventurer in all of us.
                    So, grab your croak and join us for a ribbit-ing good time! Frogs, fairies, 
                    and wizards alike are always welcome here!`
                break;
            case 1:
                createChild.id = "about";
                createChild.appendChild(createH2);
                createChild.appendChild(createP);
                createH2.innerHTML = `Who are we?`
                createP.innerHTML = `We are a community of RPG and fantasy world enthusiasts, bound together by our love for magical realms, epic quests, and unforgettable characters. 
                    Our bar is a tribute to the worlds we've explored and the stories we've told—where imagination knows no bounds, 
                    and every visit feels like stepping into a new adventure. Whether you’re a seasoned dungeon master, a fantasy novel aficionado, 
                    or just someone who loves a good tale, you’re part of our story. Welcome to a place where fantasy becomes reality—one drink at a time!`
                break;
            case 2:
                createChild.id = "info";     
                createChild.appendChild(createH2);
                createChild.appendChild(createP);
                createH2.innerHTML = `Not only a restaurant!` 
                createP.innerHTML = `Here, not only can you eat delicious food right out of a fantasy world, but you can also enjoy your time with friends and strangers
                    playing various RPG games or spend your time as you would like. Grab a drink or two, set-up your favourite boardgame and 
                    feel free to spend as much time as you want with us.`
                break;
            case 3:
                createChild.id = "message";
                createChild.appendChild(createH1);
                createH1.innerHTML = `Will you be the next hero of our froggy tale?`
                break;   
        }
        
    }
    return;
}

homeButton.addEventListener('click', () => {
    contentCreator();
    
    
})
    */

const menuCreator = () => {
    const content = document.querySelector("#content");
    const createDiv = document.createElement("div");
    createDiv.id = "content-wrapper2";
    content.appendChild(createDiv);
    for(let i = 0; i <= 6; i++){
        const contentWrapper = document.querySelector("#content-wrapper2");
        const createChild = document.createElement("div");
        const createH1 = document.createElement("h1")
        const createH2 = document.createElement("h2");
        const createP = document.createElement("p");
        const menu = contentWrapper.querySelector("#menu1");
        switch(i){
            case 0:
                contentWrapper.appendChild(createChild);
                createChild.id = "menu1";
                break;
            case 1:
                menu.appendChild(createH1);
                createH1.innerHTML = `Menu`;
                break;
            case 2:
                menu.appendChild(createChild);
                createChild.id = "bites";
                addItems(createChild, 8, 1);
                break;
            case 3:
                menu.appendChild(createChild);
                createChild.id = "desserts";
                addItems(createChild, 4, 1);
                break;   
            case 4:
                menu.appendChild(createChild);
                createChild.id = "cocktails";
                addItems(createChild, 4, 1);
                break;  
            case 5:
                menu.appendChild(createChild);
                createChild.id = "mocktails";
                addItems(createChild, 4, 1);
        }
    }
}

const addItems = (element, num, child) => {
    for(let i = 0; i <= num; i++){
        const createDiv = document.createElement("div");
        if(i === 0){
            element.appendChild(createDiv);
            createDiv.className = "items1"
        } else {
        const items = document.querySelectorAll(".items1");
        items[items.length-child].appendChild(createDiv);
        //createDiv.className = "item1";
        }   
    }
}

menuCreator();
