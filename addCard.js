const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click',()=>{
    const id = document.getElementById('id').value;
    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;
    const photoURL = document.getElementById('photoURL').value;
    const description = document.getElementById('description').value;
    const location = document.getElementById('location').value;

    const newCard = {
        title: title,
        price: price,
        photo: photoURL,
        description: description,
        location: location,
        id: id
    }
    console.log(newCard);
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
          const data = await response.json();
          return data;
        } catch (err) {
          return false;
        }
      };
      addCard(newCard)
});

