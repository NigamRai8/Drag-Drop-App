const cards = document.querySelectorAll(".draggable")
const dropzone = document.querySelectorAll(".dropzone")
const itemList = document.getElementById("itemList")
const resetButton = document.getElementById("resetButton")


let draggedCard = null

let originalCard = [...cards]

cards.forEach((card)=>{
    card.addEventListener("dragstart",()=>{
        draggedCard = card
        card.classList.add("dragging")
    })
    card.addEventListener("dragend",()=>{
        card.classList.remove("dragging")
    })
})

const allDropArea = [...dropzone,itemList]

console.log(allDropArea)

allDropArea.forEach((zone)=>{
    zone.addEventListener("dragover",(e)=>{
        e.preventDefault()
    })

    zone.addEventListener("dragenter",()=>{
        zone.classList.add("over")
    })

    zone.addEventListener("dragleave",()=>{
        zone.classList.remove("over")
    })

    zone.addEventListener("drop",(e)=>{
        e.preventDefault()
        if(draggedCard){
            zone.appendChild(draggedCard)
            zone.classList.remove("over")
            draggedCard = null
        }
    })
})

resetButton.addEventListener("click",()=>
    {
        originalCard.forEach((card)=>{
            itemList.appendChild(card)
        })
})

