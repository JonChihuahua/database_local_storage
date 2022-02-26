
const names = document.querySelector(".names")
const number = document.querySelector(".number")
const adress = document.querySelector(".adress")
const bntAddTask = document.querySelector(".btn-add-task")

const tasklist = document.querySelector(".task-list")

const db = window.localStorage

bntAddTask.onclick = () => {
    let contact = {
        id: Math.random(1,100),
        name: names.value,
        number: number.value,
        adress: adress.value,
    }
    savecontact(db, contact)
}

loadcontacts(db, tasklist)
