

const savecontact = (db, contact) =>{
    db.setItem(contact.id, JSON.stringify(contact))
    //window.location.href ="/"
    location.reload(true)
}

const loadcontacts = (db, parentNode) =>{
    let keys = Object.keys(db)
        
    for(k of keys){
        let contact = JSON.parse(db.getItem(k))
        createContact(parentNode, contact, db)
        
    }
}

const createContact = (parentNode, contact, db) =>{

    let divContact = document.createElement('div')
    let nameContact = document.createElement('h3')
    let numberContact = document.createElement('p')
    let adressContact = document.createElement('p')
    let iconoDelete = document.createElement('span')

    nameContact.innerHTML = contact.name
    numberContact.innerHTML = contact.number
    adressContact.innerHTML = contact.adress
    iconoDelete.innerHTML = "delete_forever"

    divContact.classList.add('task')
    iconoDelete.classList.add('material-icons', 'icono')

    iconoDelete.onclick = () =>{
        db.removeItem(contact.id)
        //window.location.href = "/"
        location.reload(true);
    }

    divContact.appendChild(nameContact)
    divContact.appendChild(numberContact)
    divContact.appendChild(adressContact)
    divContact.appendChild(iconoDelete)

    parentNode.appendChild(divContact)

}

