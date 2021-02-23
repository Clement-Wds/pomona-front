const imagesDiv = document.querySelector(".images");
const url = "https://pomona-passion-froid.herokuapp.com/";
let allImages = [];

imagesDiv.addEventListener("click", deleteImage);

const addImageForm = document.forms.addImage;
const imageNom = addImageForm.imagenom;
const imageUrl = addImageForm.imageurl;

addImageForm.addEventListener("click", addImage);


init();

function init() {
    getImages();
}

function getImages(){
    fetch(`${url}/images`)
        .then((data => data.json()))
        .then((result) => {
            allImages = result;
            console.log("allImages", allImages);
            renderImages(allImages);
        })
        .catch(err => {
            console.error(err);
        })
}

function renderImages(image){
    let list = [];
    image.forEach((i) => {
        const item = `<li id="${i.id}">
            <p> ${i.nom} </p>
            <img src='${i.url}' width="300px" height="200px"> 
            <button>Supprimer</button>
        </li>`;
        list = [...list, item];
    })
    imagesDiv.innerHTML = `<ul>${list.join("")}</ul>`;
}

function deleteImage(e){
    if(e.target.nodeName.toLowerCase() !== "button"){
        return;
    }
    const imageItemId = e.target.parentNode.id;
    console.log(imageItemId);
    fetch(`${url}/Images/${imageItemId}`, {
        method: "DELETE",
    }).then((res) => {
        console.log(res.json());
        getImages();
    });
}

function addImage(e){
    e.preventDefault();
    const nom = imageNom.value.trim();
    const urlImage = imageUrl.value;
    const payload = {
        nom: nom,
        url: urlImage,
    }

    fetch(`${url}/Images`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
    }).then(response => {
        console.log(response);
    })
}
