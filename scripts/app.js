//         // fetch('/readme.txt')
//         // .then((response)=>response.text())
//         // .then((data)=>console.log(data))

// async function FetchImages(){
//      let url = "http://images-api.nasa.gov/search?q=apollo";
//      try{
//          let response = await fetch(url);
//          return await response.json();
//      } catch(error) {
//          console.log(error);
//      }
// }

// async function renderImages() {
//     let nasaImages = await FetchImages();
//     let html = '';

//     let images = nasaImages.collection.items;
//     console.log(images);
//     images.array.forEach(image => {
//         let htmlSegment = `<div class="column">
//         <img src=${image.links} alt="Hello" />
//         </div>`;
//         html += htmlSegment;
//     });
    
//     let container = document.querySelector('.row');
//     container.innerHTML = html;
// }

// renderImages();



let output = document.querySelector(".row");

let sendRequest = () =>{
  fetch('http://images-api.nasa.gov/search?q=apollo')
  .then(res=>{
    if(!res.ok){
      throw Error("Error getting Images");
    }
    return res.json();
  })
  .then(data=>{
    let outputData = ``;
    data.collection.items.map(val=>{
      // the rendered card
      outputData += `
        <div class="column">
         <img src=${val.links} alt="Hello" />
        </div>
      `
    })
    output.innerHTML = outputData;
    console.log(data.collection.items);
  })
  .catch(err => alert(err));
}

sendRequest()