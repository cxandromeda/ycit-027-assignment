// This is xi chen's homework


function getCatImage() {
    return fetch("https://api.thecatapi.com/v1/images/search")
        .then( (response) => {
            // Resolve the promise we got from calling then() to the promise that we get from calling json()
            return response.json();
            
        })
        .then((data) => {
            console.log(data[0].url);
            let divimg = document.querySelector('.image')
            let imgc = document.createElement("img");
            imgc.src = data[0].url;
            imgc.id = "catImage"
            divimg.appendChild(imgc);
            let br = document.createElement("br")
            divimg.appendChild(br);


           

            // document.getElementById("catImage").src = data[0].url


        });
}


// function getCatImage() {
//     fetch("https://api.thecatapi.com/v1/images/search")
//         .then((response) => {
//             // Resolve the promise we got from calling then() to the promise that we get from calling json()
//             response.json();
            
//         })
//         .then((data) => {
//             console.log(data[0].url);
//             document.getElementById("catImage").src = data[0].url;
//         });
// }
