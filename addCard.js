const addBtn = document.getElementById('addBtn');
const addMessage = document.getElementById('addMessage');
const validateURL = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
const glassesURL = "https://64ec4552f9b2b70f2bfa0585.mockapi.io/akiniai/";

const inputValidation = (id, title, price, description, location, photoURL) => {
    if (!id) {
        addMessage.innerHTML = 'missing ID';
        addMessage.setAttribute('style', 'color: red')
        throw new Error('no ID');
    }
    if (!title) {
        addMessage.innerHTML = 'missing title';
        addMessage.setAttribute('style', 'color: red')
        throw new Error('no title');
    }
    if (!price) {
        addMessage.innerHTML = 'missing price';
        addMessage.setAttribute('style', 'color: red')
        throw new Error('no price');
    }
    if (!description) {
        addMessage.innerHTML = 'missing description';
        addMessage.setAttribute('style', 'color: red')
        throw new Error('no description');
    }
    if (!location) {
        addMessage.innerHTML = 'missing location';
        addMessage.setAttribute('style', 'color: red')
        throw new Error('no location');
    }
    if (!validateURL.test(photoURL)) {
        addMessage.innerHTML = 'bad link';
        addMessage.setAttribute('style', 'color: red')
        throw new Error('bad link');
    }
}

const createNewCard = () => {
    const id = document.getElementById('id').value;
    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;
    const photoURL = document.getElementById('photoURL').value;
    const description = document.getElementById('description').value;
    const location = document.getElementById('location').value;

    inputValidation(id, title, price, description, location, photoURL);

    const newCard = {
        title: title,
        price: price,
        photo: photoURL,
        description: description,
        location: location,
        id: id
    }

    return newCard;
}

const insertCard = async (newCard) => {
    try {
      const response = await fetch(glassesURL,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCard),
        }
      );
      const data = await response.json();
      return data;
    } catch (err) {
      return false;
    }
  };

  const onCardInserted = (data) => {
    if(data){
        addMessage.setAttribute('style', ' color:#339900;')
        addMessage.innerHTML = "New Card added successfuly"
        setTimeout(() => {
            window.location.replace("./index.html");
          }, 2000);
      } else {
        addMessage.setAttribute('style', 'color: red')
        addMessage.innerHTML = "Failed to add a New Card"
      }
    }

addBtn.addEventListener("click", async () => {
    try {
      const newCard = createNewCard();
      const data = await insertCard(newCard);
      onCardInserted(data);
    } catch (err) {
      console.log("err", err);
    }
  });