const itemId = localStorage.getItem('card');
const glassesURL = "https://64ec4552f9b2b70f2bfa0585.mockapi.io/akiniai/";
const deleteBtn = document.getElementById("deleteBtn");

const buildGlassesCard = (glasses) => {
    const title = document.getElementById("title");
    title.innerHTML = glasses.title;
  
    const description = document.getElementById("description");
    description.innerHTML = glasses.description;
  
    const price = document.getElementById("price");
    price.innerHTML = glasses.price;
  
    const photo = document.getElementById("photo");
    photo.src = glasses.photo;

    const location = document.getElementById("location");
    location.innerHTML = glasses.location;
  };
  
const getCardData = async(itemId)=> {
    try {
      const response = await fetch(glassesURL + itemId);
      const card = await response.json();
      return card;
    } catch (error) {
      console.error("Error fetching card data:", error);
      return false;
    }
  }
  const displayCard = async () => {
    const card = await getCardData(itemId);
    card && buildGlassesCard(card);
  };
  
  displayCard();