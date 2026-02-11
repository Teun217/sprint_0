// turn around 

const allVinylSleeves= document.querySelectorAll(".sleeve")

allVinylSleeves.forEach(function(oneVinylSleeve){
    oneVinylSleeve.addEventListener("click", turnAroundSleeveAndMoveRecord)
});

function turnAroundSleeveAndMoveRecord(event){
    const targetSleeve = event.currentTarget;
    const innerCard = targetSleeve.querySelector(".inner_card");
    const targetRecord = targetSleeve.closest("li").querySelector(".vinyl_record");
    
    innerCard.classList.toggle("turnAround");
    targetRecord.classList.toggle("moveRecordOut");
}

// MARK: API data to every backside

// API
// https://medium.com/@noransaber685/mastering-asynchronous-javascript-from-fetch-to-async-await-a-comprehensive-guide-2fd01a2531b7

const apiGroupURL = 'https://fdnd.directus.app/items/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526&filter[bio][_nempty]&filter[name][_nempty]&filter[github_handle][_nempty]&filter[nickname][_nempty]'
const allBackSleeves = document.querySelectorAll(".back_card")
console.log(allBackSleeves)

const classes = ["back_card_option_1", "back_card_option_2", "back_card_option_3"]

// pulls data from the API (defined apiGroupURL)
fetch(apiGroupURL)
  // Parses (changes data form) to JSON
  .then(response => response.json())
  // Do something with the data
  .then(classData => {
    //defines a constant classmates as ??????
    const classmates = classData.data

    //goes over every allBackSleeves element and
    allBackSleeves.forEach(card => {
      //defines a random number scaled to number of classmates
      const randomNumber = Math.floor(Math.random() * classmates.length)
      //defines a random classmate
      const randomPerson = classmates[randomNumber]

      const randomClasslistNumber = classes[Math.floor(Math.random() * classes.length)];
      card.classList.add(randomClasslistNumber);

      // changes the innerHTML of every card to the following:
      card.innerHTML = `
        <h2>WD&D</h2>
        <div>
          <p>
            ${randomPerson.bio}
            ${randomPerson.nickname}
            ${randomPerson.nickname}
            ${randomPerson.bio}
            ${randomPerson.name}
            ${randomPerson.github_handle}
            ${randomPerson.github_handle}
            ${randomPerson.name}
            ${randomPerson.nickname}
            ${randomPerson.name}
            ${randomPerson.nickname}
            ${randomPerson.github_handle}
            ${randomPerson.bio}
            ${randomPerson.bio}
            ${randomPerson.github_handle}
            </p>
        </div>
      `
    })
  })
  .catch(error => console.error('Error:', error))


// // random color for backside and vinyl
// // https://codepen.io/karaaa006/pen/vjeoKP

// const allVinylInners= document.querySelectorAll(".vinyl_record div")
// console.log(allVinylInners)
// const alLSleeveBacks= document.querySelectorAll(".back_card")
// console.log(allSleeveBacks)

// function randomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // function builtColorCode(){
// //     let = "hsl(" + randomNumber(0, 360) + ", 100%" + ", 50%" ")"
// // }


