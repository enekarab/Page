let products = {
  data: [

    {
      productName: "Schnick Schnack Schnuck",
      category: "Einzel",
      image: "../images/s_s_s.jpg",
      id:"1"
    },
    {
      productName: "Flip A Coin",
      category: "Mehrere",
      image: "../images/coin.jpg",
      id:"2"
    },
    {
      productName: "Doors",
      category: "Einzel",
      image: "../images/tor.png",
      id:"3"
    },
    {
      productName: "XOX",
      category: "Mehrere",
      image: "../images/tic_tac_toe.jpeg",
      id:"4"
    },
    {
      productName: "Hangman",
      category: "Einzel",
      image: "../images/hangman.jpg",
      id:"5"
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);


  card.appendChild(container);
  document.getElementById("products").appendChild(card);

  card.addEventListener("click" , ()=>{

    console.log(i.id);{

      if (i.id === "1") {
          location.assign("../pages/s_s_s.html");
      } if (i.id === "2") {
          location.assign("../pages/coin.html");
      } if (i.id === "3") {
          location.assign("../pages/tor.html");
      } if (i.id === "4") {
          location.assign("../pages/xox.html");
      } if (i.id === "5") {
          location.assign("../pages/hangman.html")
      }
    }
  })
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};
