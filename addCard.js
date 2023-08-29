const addBtn = document.getElementById('addBtn');
const addMessage = document.getElementById('addMessage');

addBtn.addEventListener('click',()=>{
    const id = document.getElementById('id').value;
    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;
    const photoURL = document.getElementById('photoURL').value;
    const description = document.getElementById('description').value;
    const location = document.getElementById('location').value;

    const validateURL = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    if (!id){
        throw new Error('no ID');
      }
    if (!title){
      throw new Error('no title');
    }
    if (!price){
      throw new Error('no price');
    }
    if (!description){
      throw new Error('no description');
    }
    if (!location){
        throw new Error('no location');
      }
    if (!validateURL.test(photoURL)){
      throw new Error('bad link');
    }

    const newCard = {
        title: title,
        price: price,
        photo: photoURL,
        description: description,
        location: location,
        id: id
    }
   
    const addCard = async (newCard) => {
        try {
          const response = await fetch(
            "https://64ec4552f9b2b70f2bfa0585.mockapi.io/akiniai",
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newCard),
            }
          );
          if(response){
            addMessage.setAttribute('style', ' color:#339900;')
            addMessage.innerHTML = "New Card added successfuly"
            setTimeout(() => {
                window.location.replace("./index.html");
              }, 3000);
          } else {
            addMessage.setAttribute('style', 'color: red')
            addMessage.innerHTML = "Failed to add a New Card"
          }
        } catch (err) {
          return false;
        }
      };
      addCard(newCard)
     
});

