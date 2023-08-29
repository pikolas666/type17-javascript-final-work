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

    const id = document.getElementById("id");
    id.innerHTML = glasses.id;
  
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

  deleteBtn.addEventListener('click', async ()=>{
    const message = document.getElementById('message');
  
    try {
      const response = await fetch(glassesURL + itemId, {
        method: 'DELETE',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify()
      });
  
      if (response.ok) {
        const data = await response.json();
        if (data) {
          message.innerHTML = "Success, glasses Deleted!";
          setTimeout(() => {
            window.location.replace("./index.html");
          }, 5000);
        }
      } else {
        message.innerHTML = "Failed to delete glasses";
      }
    } catch (err) {
      message.innerHTML = "Failed to delete glasses";
    }
  })
  
  const displayCard = async () => {
    const card = await getCardData(itemId);
    card && buildGlassesCard(card);
  };
  
  displayCard();