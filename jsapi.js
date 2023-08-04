const username = document.getElementById("username").value;
const datagotten = document.getElementById("data-input");


async function getUserInfo(){

    const endpoint = new URL(`https://swapi.dev/api/people/${username}`);

    const response = await fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        console.log(data.results)



            // const responseContainer = document.getElementById("response-container");
        //     Loop through the array and create a new HTML element for each response
          

            data.results.forEach((response) => {
                const responseDiv = document.createElement("div");
                responseDiv.innerHTML = `
                birth_year: ${response.birth_year}<br>
                Created: ${response.created}<br>
                edited: ${response.edited}<br>
                eye_color: ${response.eye_color}<br>
                films: <ul>
                ${response.films.map((film) => `<li>${film}</li>`).join('')}
                 </ul><br>
                gender: ${response.gender}<br>
                hair_color: ${response.hair_color}<br>
                height: ${response.height}<br>
                homeworld: ${response.homeworld}<br>
                mass: ${response.mass}<br>
                <strong>Name:</strong> ${response.name}<br>
                skin_color: ${response.skin_color}<br>
                species: <ul>
                ${response.species.map((specie) => `<li>${specie}</li>`).join('')}
                 </ul><br>
                starships: <ul>
                ${response.starships.map((starship) => `<li>${starship}</li>`).join('')}
                  </ul><br>
                url: ${response.url}<br>
                vehicles: <ul>
                ${response.vehicles.map((vehicle) => `<li>${vehicle}</li>`).join('')}
                  </ul><br>
                `;
                datagotten.appendChild(responseDiv);
            });
        }

        // datagotten.innerHTML = JSON.stringify(data.results, null, 2)
    )
}
    
//     if(username = ''){  
//         datagotten.textContent = `Please enter valid data`;
//         return;
//     }
//     else if(response.status === 404){
//         datagotten.textContent = "details not found";
//         return;
//     } 
    
//     ;
// }

// async function getUserInfo(){
//         const endpoint = new URL(`https://swapi.dev/api/people/1`);
//         console.log(endpoint);
// }
// datagotten.textContent = getUserInfo();