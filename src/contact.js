export { createContact }

const createContact = () => {
    const content = document.querySelector("#content");
    for(let i = 0; i < 2; i++){
        const createDiv = document.createElement("div");
        switch(i){
            case 0:
                content.appendChild(createDiv);
                createDiv.id = "content-wrapper";
                break;
            case 1:
                const contentWrapper = document.querySelector("#content-wrapper");
                contentWrapper.appendChild(createDiv);
                createDiv.id = "contact";
                createWrappers();
                addPara();
                createInfo();
    
        }
    }
    return;
}

const createWrappers = () => {
    const contact = document.querySelector("#contact");
    for(let j = 0; j < 4; j++){
        const div = document.createElement("div");
        contact.appendChild(div);
        if(j === 0){
            div.id = "contact-header";
        }
        else {
            div.className = "contact";
        }
    }
    return
}

const addPara = () => {
    const parent = document.querySelector("#contact");
    for(let i = 0; i < parent.childElementCount; i++){
        let child = parent.childNodes[i]
        for(let j = 0; j < 4; j++){
            if(i === 0){
                const createH1 = document.createElement("h1");
                child.appendChild(createH1);
                createH1.innerHTML = "Contact us";
                break;
            } else {
                const createP = document.createElement("p");
                child.appendChild(createP);
                switch(j){
                    case 0:
                        createP.className = "name";
                        break;
                    case 1:
                        createP.className = "role";
                        break;
                    case 2:
                        createP.className = "number";
                        break;
                    case 3:
                        createP.className = "email";
                        break;
                }
            }
        }
        //console.log(parent.childNodes[i]);
    }
    return;
}

const createInfo = () => { 
    const createUser = (name, surname, role, number, email) => {
        return {name, surname, role, number, email}
    }
    for(let i = 0; i < 3; i++){
        switch(i){
            case 0:           
                const user1 = createUser("John", "Doe", "Manager", "123-123-121", "johndoe@froggybar.com");
                addText(i, user1);
                break;
            case 1:
                const user2 = createUser("Jane", "Doe", "Chef", "123-123-122", "janedoe@froggybar.com");
                addText(i, user2);
                break;
            case 2:
                const user3 = createUser("Johannes", "Doe", "Waiter", "123-123-123", "johannesdoe@froggybar.com");
                addText(i, user3);
                break;
        }   
    }
    return;
}

const addText = (num, user) => {
    const contactSection = document.querySelectorAll(".contact");
    console.log(contactSection[num], user.name);
    for(let i = 0; i < contactSection[num].childElementCount; i++){
        switch(i){
            case 0:
                contactSection[num].childNodes[i].innerHTML = `${user.name} ${user.surname}`;
                break;
            case 1:
                contactSection[num].childNodes[i].innerHTML = `${user.role}`;
                break;
            case 2:
                contactSection[num].childNodes[i].innerHTML = `${user.number}`;
                break;
            case 3:
                contactSection[num].childNodes[i].innerHTML = `${user.email}`;
                break;
        }
    }
    return;
}