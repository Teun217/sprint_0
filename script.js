const allVinylSleeves= document.querySelectorAll(".sleeve")

console.log(allVinylSleeves)

allVinylSleeves.forEach(function(oneVinylSleeve){
    oneVinylSleeve.addEventListener("click", turnAroundSleeveAndMoveRecord)
});

function turnAroundSleeveAndMoveRecord(event){
    const targetSleeve = event.currentTarget;
    const innerCard = targetSleeve.querySelector(".inner_card");
    const targetRecord = targetSleeve.closest("li").querySelector(".vinyl_record");

    console.log(targetRecord)
    console.log(innerCard)
    
    innerCard.classList.toggle("turnAround");
}

