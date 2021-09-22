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

// let sendRequest = () => {
//   fetch("http://images-api.nasa.gov/search?q=apollo")
//     .then((res) => {
//       if (!res.ok) {
//         throw Error("Error getting Images");
//       }
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       let outputData = ``;
//       data.collection.items.map((val) => {
//         // the rendered card
//         outputData += `
//         <div class="column">
//          <img src=${val.links} alt="Hello" />
//         </div>
//       `;
//       });
//       output.innerHTML = outputData;
//       console.log(data.collection.items);
//     })
//     .catch((err) => alert(err));
// };

let output = document.querySelector(".row");

const api_key = "yN0g8ea18vf1HPiUlwOrGB1dgpoyYnJzpIjxXEjm";
const sendRequest = async () => {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=50`
  );
  if (!response) throw Error("Error getting Images");
  const data = await response.json();

  let outputData = ``;

  data.map((data) =>
    data.url && data.url.includes(".jpg")
      ? (outputData += `
        <div class="column">
         <img src=${data.url} alt="Hello" />
        </div>
  `)
      : null
  );

  output.innerHTML = outputData;
};

sendRequest();
