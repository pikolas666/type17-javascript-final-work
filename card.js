const itemId = localStorage.getItem('card');
const glassesURL = "https://64ec4552f9b2b70f2bfa0585.mockapi.io/akiniai/";
const deleteBtn = document.getElementById("deleteBtn");
const message = document.getElementById('deleteMessage');


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
  
  const getCardData = async (itemId) => {
    try {
        const response = await fetch(glassesURL + itemId);
        if (!response) {
            throw new Error("Failed to fetch card data");
        }
        const card = await response.json();
        return card;
    } catch (error) {
        console.error("Error fetching card data:", error);
        throw error;
    }
};

  const deleteCard = async () => {
    const response = await fetch(glassesURL + itemId, {
        method: "DELETE",
    });

    if (!response) {
        throw new Error("Failed to delete glasses");
    }

    const data = await response.json();
    return data;
};

const onCardDeleted = (data, error) => {
  if (data) {
      message.innerHTML = "Success, glasses Deleted!";
      setTimeout(() => {
          window.location.replace("./index.html");
      }, 5000);
  } else {
      message.innerHTML = error || "Failed to delete glasses";
  }
};

const onClickDeleteButton = async () => {
  try {
      const response = await deleteCard();
      onCardDeleted(response);
  } catch (err) {
      onCardDeleted(null, "Failed to delete glasses");
  }
};

deleteBtn.addEventListener('click',onClickDeleteButton) 

const displayCard = async () => {
  const card = await getCardData(itemId);
  card && buildGlassesCard(card);
};

displayCard();