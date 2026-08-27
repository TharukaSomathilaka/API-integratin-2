const apiKey = "dfa11acd7051467386c70700262507";

const baseUrl = "http://api.weatherapi.com/v1";

// fetch(`${baseUrl}/current.json?key=${apiKey}&q=panadura`).then(res => res.json()).then(data => {
//     // console.log(data);

//      document.getElementById("contentSection").innerHTML = `
//                 <div>
//                 <h1>${data.current.condition.text}</h1>
//                 <h1>${data.location.name}</h1>
//                 <img src="${data.current.condition.icon}" alt>
//                 <p>${data.location.country}</p>
//                 <p>${data.current.temp_c}</p>
//             </div>
//     `

// })

function btnSearchOnAction() {
    let txtUserSearchValue = document.getElementById("txtSearch").value;
    console.log("Log 01");
    
    fetch(`${baseUrl}/current.json?key=${apiKey}&q=${txtUserSearchValue}`).then(res => res.json()).then(data => {
        console.log(data);
        console.log("Log 02");

        document.getElementById("contentSection").innerHTML = `
                <div>
                <h1>${data.current.condition.text}</h1>
                <h1>${data.location.name}</h1>
                <img src="${data.current.condition.icon}" alt>
                <p>${data.location.country}</p>
                <p>${data.current.temp_c}</p>
            </div>
    `

    })
    console.log("Log 03");

}