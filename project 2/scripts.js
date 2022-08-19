document.addEventListener("DOMContentLoaded", function() {
   console.log("Hello World TWO");

  fetch("./data.json")
    .then(response => {
    return response.json();
    })
    .then(jsondata => {
        console.log(jsondata);
        console.log(jsondata[2].hair);


        let name = ""
        let gender = ""
        let hair = ""
        let pic = ""

       
        const thePeople = () => {
            name = jsondata[i].name
            gender = jsondata[i].gender
            hair = jsondata[i].hair
            pic = jsondata[i].pic
        
            let peopleWrap = window.document.getElementsByClassName("peopleWrap")[0];
            let person = document.createElement("p");
            person.append(name + ", " + gender + ", " + hair);
            peopleWrap.append(person);
            let avatar = document.createElement("img")
            avatar.src = pic
            peopleWrap.append(avatar);
        }
    


         for(i = 0; i < jsondata.length; i++){
            thePeople()
        }


   

    });
  




//    const url = "https://catfact.ninja/breeds"
//    fetch(url).then(function(response) {
//          return response.json();
//        }).then(function(data) {
//         console.log(data);


//         let breed = ""
//         let coat = ""
//         let country = ""
        

//        const putOnPage = () => {
//             let theCat = `${breed}, ${country}, ${coat}`
//             let catWrap = window.document.getElementsByClassName("catWrap")[0];
//             let p = document.createElement("p")
//             p.append(theCat)
//             catWrap.append(p)
            
//        }

//         data.data.map( x => {
//             breed = x.breed;
//             coat = x.coat;
//             country = x.country;
//             putOnPage();
//         })

     
//        }).catch(function() {
//             console.log("Booo");
//        });

//const url = "http://www.bangalbinodigital.ca/testFolder/data.json"
//const url = "https://catfact.ninja/breeds"
// const url = "/data.json"
// fetch(url).then(function(response) {
//     console.log("works");
//       return response.text();
//     }).then(function(data) {
//         console.log(data);


//     }).catch(function() {
//          console.log("Booo");
//     });


  });



