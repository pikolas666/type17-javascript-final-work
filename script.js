const cardList = document.getElementById('card-list');
const glassesURL = "https://64ec4552f9b2b70f2bfa0585.mockapi.io/akiniai";

const buildCard = (glasses) => {
    const card = document.createElement("a");
    card.setAttribute("class", "card");
    card.innerHTML = `
    <p>${glasses.location}</p>
    <img class="glasses-image" src="${glasses.photo}" alt="${glasses.title}">
    <div class="text-wrapper">
        <h1>${glasses.title}</h1>
        <h2>${glasses.price}</h2>
    </div>`;
    card.href = "./card.html?cardId=" + glasses.id;
    card.addEventListener('click', () => {
        localStorage.setItem('card', glasses.id);
      });
       return card;
    };
  
  const displayGlasses = async () => {
    try {
      const response = await fetch(glassesURL);
      const glassesList = await response.json(); 
  
      glassesList.sort((a, b) => a.price - b.price).forEach((glasses) => {
        const card = buildCard(glasses);
        cardList.append(card);
      });
    } catch (error) {
      throw error;
    }
  };
  
  displayGlasses();