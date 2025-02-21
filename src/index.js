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
    createDiv.id = "content-wrapper";
    content.appendChild(createDiv);
    for(let i = 0; i <= 6; i++){
        const contentWrapper = document.querySelector("#content-wrapper");
        const createChild = document.createElement("div");
        const createH1 = document.createElement("h1")
        const createH2 = document.createElement("h2");
        const createP = document.createElement("p");
        const menu = contentWrapper.querySelector("#menu");
        switch(i){
            case 0:
                contentWrapper.appendChild(createChild);
                createChild.id = "menu";
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
    return;
}

const addItems = (element, num, child) => {
    for(let i = 0; i <= num; i++){
        const header = document.createElement("h2");
        const createDiv = document.createElement("div");
        if(i === 0){
            element.appendChild(header);
            element.appendChild(createDiv);
            createDiv.className = "items"
        } else {
        const items = document.querySelectorAll(".items");
        items[items.length-child].appendChild(createDiv);
        createDiv.className = "item";
        }   
    }
    return;
}

const addText = () => {
    const menu = document.querySelector("#menu");
    const items = document.querySelectorAll(".items");
    /*for(let i  = 1; i < 5; i++){
        console.log(menu.children[i]);
    }*/
    
    const item = document.querySelectorAll(".item");
   for(let i = 0; i < items.length; i++){
        console.log(items[i].parentNode.id);
        switch(items[i].parentNode.id){
            case 'bites':
                addContent(i, items[i], items[i].parentNode);
                /*for(let j = 0; j < items[i].childElementCount; j++){
                    const createP = document.createElement("p");
                    const createH3 = document.createElement("h3");
                    items[i].childNodes[j].appendChild(createH3);
                    items[i].childNodes[j].appendChild(createP);
                    console.log(items[i].childNodes[j], i, j)
                    
                }*/
               
                console.log(items[i].childNodes);
                break;
            case 'desserts':
                addContent(i, items[i], items[i].parentNode);
                console.log(items[i].childNodes);
                break;
            case 'cocktails':
                addContent(i, items[i], items[i].parentNode);
                console.log(items[i].childNodes);
                break;
            case 'mocktails':
                addContent(i, items[i], items[i].parentNode);
                console.log(items[i].childNodes);
                break;
        }
   }
   return;
}

const addContent = (num, parent, container) => {
    for(let j = 0; j < parent.childElementCount; j++){
        const createH3 = document.createElement("h3");
        parent.childNodes[j].appendChild(createH3);
        for(let x = 0; x < 2; x++){
            const createP = document.createElement("p");
            parent.childNodes[j].appendChild(createP);
            if(x === 1){
                createP.className = "fTxt";
            }
        }
        switch(container.id){
            case "bites":
                switch(j){
                    case 0:
                        container.childNodes[0].innerHTML = `Fantasy Bites`;
                        parent.childNodes[j].childNodes[0].innerHTML = `Froggy's Favorite Fries`;
                        parent.childNodes[j].childNodes[1].innerHTML = `Crispy golden fries, served with a selection of enchanted dipping sauces: garlic butter, spicy chipotle, and creamy herb aioli.`
                        parent.childNodes[j].childNodes[2].innerHTML = `Perfect for nibbling between adventures.`;
                        break;
                    case 1:
                        parent.childNodes[j].childNodes[0].innerHTML = `The Elven Feast Flatbread`;
                        parent.childNodes[j].childNodes[1].innerHTML = `A warm flatbread topped with goat cheese, caramelized onions, arugula, and a drizzle of balsamic glaze.`;
                        parent.childNodes[j].childNodes[2].innerHTML = `For when you want a taste of the forest's finest treats.`;
                        break;
                    case 2:
                        
                        parent.childNodes[j].childNodes[0].innerHTML = `Dragon’s Breath Wings`;
                        parent.childNodes[j].childNodes[1].innerHTML = `Spicy, smoky wings served with a cooling honey-mustard dipping sauce.`;
                        parent.childNodes[j].childNodes[2].innerHTML = `For the brave souls who dare to face the heat.`;
                        break;
                    case 3:
                        
                        parent.childNodes[j].childNodes[0].innerHTML = `The Gnome's Cheese Board`;
                        parent.childNodes[j].childNodes[1].innerHTML = `A selection of mystical cheeses served with seasonal fruits, nuts, and a warm, buttery baguette.`;
                        parent.childNodes[j].childNodes[2].innerHTML = `The perfect snack to share with your fellow adventurers.`;
                        break;
                    case 4:
                        
                        parent.childNodes[j].childNodes[0].innerHTML = `Goblin’s Gold Popcorn`;
                        parent.childNodes[j].childNodes[1].innerHTML = `Warm, buttery popcorn sprinkled with sea salt and a touch of parmesan, or try it with a smoky BBQ dust for an extra kick.`
                        parent.childNodes[j].childNodes[2].innerHTML = `A snack that’s easy to share during long games or intense roleplay battles!`
                        break;    
                    case 5:
                        
                        parent.childNodes[j].childNodes[0].innerHTML = `Witches’ Brew Queso Dip`;
                        parent.childNodes[j].childNodes[1].innerHTML = `A creamy, spicy cheese dip served with tortilla chips or warm, soft breadsticks.`;
                        parent.childNodes[j].childNodes[2].innerHTML = `Perfect for stirring up some friendly competition during a heated game night.`;
                        break;
                    case 6:
                        
                        parent.childNodes[j].childNodes[0].innerHTML = `Pixie Puffs`;
                        parent.childNodes[j].childNodes[1].innerHTML = `Mini savory puff pastry bites filled with creamy spinach and cheese, lightly toasted to golden perfection.`;
                        parent.childNodes[j].childNodes[2].innerHTML = `Little puffs of magic to keep your hands free for dice rolls!`
                        break;
                    case 7:
                        
                        parent.childNodes[j].childNodes[0].innerHTML = `Fairy Garden Flatbreads`;
                        parent.childNodes[j].childNodes[1].innerHTML = `Thin, crispy flatbreads topped with hummus, roasted red pepper, and a sprinkling of feta and olives.`;
                        parent.childNodes[j].childNodes[2].innerHTML = `Perfect for sharing with fellow adventurers between quests.`;
                        break;
                    
                }
                break;
            case "desserts":
                switch(j){
                    case 0:
                        container.childNodes[0].innerHTML = `Mystical Desserts`;
                        parent.childNodes[j].childNodes[0].innerHTML = `The Moonlit Forest Tart`;
                        parent.childNodes[j].childNodes[1].innerHTML = `A delicate, buttery tart filled with a smooth lemon-lavender custard and topped with a forest of fresh berries, mint leaves, and a sprinkle of edible glitter.`;
                        parent.childNodes[j].childNodes[2].innerHTML = `As dreamy and mystical as a midnight stroll through an enchanted forest under a full moon.`;
                        break;
                    case 1:
                        
                        parent.childNodes[j].childNodes[0].innerHTML = `Fairy Dust Cupcakes`;
                        parent.childNodes[j].childNodes[1].innerHTML = `Light and fluffy cupcakes with a hint of lavender, topped with a sugary swirl of glittery frosting.;`
                        parent.childNodes[j].childNodes[2].innerHTML = `A sweet treat that’s just a little bit magical.`;
                        break;
                    case 2:
                        
                        parent.childNodes[j].childNodes[0].innerHTML = `The Moonlit Panna Cotta`;
                        parent.childNodes[j].childNodes[1].innerHTML = `Velvety panna cotta infused with vanilla and a hint of wildflower honey, served with a berry compote.`;
                        parent.childNodes[j].childNodes[2].innerHTML = `A dessert fit for a fae queen.`;
                        break;
                    case 3:
                        
                        parent.childNodes[j].childNodes[0].innerHTML = `Frog Prince's Caramel Brownies`;
                        parent.childNodes[j].childNodes[1].innerHTML = `Decadent, fudgy brownies with a swirl of rich caramel, served warm with a dusting of powdered sugar.`;
                        parent.childNodes[j].childNodes[2].innerHTML = `An irresistible treat that’ll turn anyone into a prince.`;
                        break;
                    
                }
                break;
            case "cocktails":
                switch(j){
                    case 0:
                        container.childNodes[0].innerHTML = `Froggy Cocktails`;
                        parent.childNodes[j].childNodes[0].innerHTML = `The Lily Pad Lemonade`;
                        parent.childNodes[j].childNodes[1].innerHTML = `A sweet, citrusy potion with a twist of mint and a splash of sparkling water. Served in a frosty glass with a slice of lime.`;
                        parent.childNodes[j].childNodes[2].innerHTML = `Perfect for a refreshing hop in the pond!`
                        break;
                    case 1:
                        
                        parent.childNodes[j].childNodes[0].innerHTML = `The Croak & Tonic`;
                        parent.childNodes[j].childNodes[1].innerHTML = `Gin, elderflower liqueur, and tonic water, garnished with a sprig of rosemary and a lemon wedge.`;
                        parent.childNodes[j].childNodes[2].innerHTML = `A crisp and magical blend for those seeking a peaceful evening by the lily pads.`;
                        break;
                    case 2:
                        
                        parent.childNodes[j].childNodes[0].innerHTML = `Enchanted Frog Fizz`;
                        parent.childNodes[j].childNodes[1].innerHTML = `A playful mix of vodka, blue curacao, and lemonade, topped with a frothy egg white finish. A mesmerizing blue drink, just like the magic of the forest.`;
                        parent.childNodes[j].childNodes[2].innerHTML = `Don’t let this one slip away!`;
                        break;
                    case 3:
                        
                        parent.childNodes[j].childNodes[0].innerHTML = `The Warty Wizard`;
                        parent.childNodes[j].childNodes[1].innerHTML = `A dark, smoky whiskey concoction with hints of honey, ginger, and a dash of bitters.`;
                        parent.childNodes[j].childNodes[2].innerHTML = `A drink for those who like their potions strong and their spells potent.`;
                        break;
                    
                }
                    break;
                case "mocktails":
                switch(j){
                    case 0:
                        container.childNodes[0].innerHTML = `Forest-fresh Mocktails`;
                        parent.childNodes[j].childNodes[0].innerHTML = `The Fern Frizz`;
                        parent.childNodes[j].childNodes[1].innerHTML = `Cucumber, lime, and mint muddled together with a hint of honey, topped with sparkling water.`;
                        parent.childNodes[j].childNodes[2].innerHTML = `Fresh from the enchanted garden—crisp, cool, and oh-so-refreshing.`;
                        break;
                    case 1:
                        
                        parent.childNodes[j].childNodes[0].innerHTML = `The Toadstool Twist`;
                        parent.childNodes[j].childNodes[1].innerHTML = `A fruity blend of apple, cranberry, and a touch of cinnamon. Served chilled and garnished with a cinnamon stick.`;
                        parent.childNodes[j].childNodes[2].innerHTML = `For when you want to experience the magic without the buzz.`;
                        break;
                    case 2:
                        
                        parent.childNodes[j].childNodes[0].innerHTML = `The Swamp Sprite`;
                        parent.childNodes[j].childNodes[1].innerHTML = `A zesty blend of lime juice, cucumber, and a touch of honey, topped with soda water and garnished with a fresh basil leaf.`;
                        parent.childNodes[j].childNodes[2].innerHTML = `Light, refreshing, and as playful as a froggy leap into a sparkling swamp!`;
                        break;
                    case 3:
                        
                        parent.childNodes[j].childNodes[0].innerHTML = `The Pixie’s Nectar`;
                        parent.childNodes[j].childNodes[1].innerHTML = `A blend of passion fruit, pineapple, and orange juice with a hint of grenadine, served over crushed ice and topped with a colorful edible flower.`;
                        parent.childNodes[j].childNodes[2].innerHTML = `Sweet, tropical, and as magical as a pixie’s enchanted wings.`;
                        break;
                    
                }
                    break;            
        }
        
        console.log(parent.childNodes[j], num, j, container);
        
    }
}


menuCreator();
addText();