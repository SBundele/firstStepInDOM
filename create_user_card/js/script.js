let user = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
  },
];
const container = document.querySelector(".container");

function createCard(user){
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.innerHTML = `
        <p>Name: ${user.name}</p>
        <p>User Id: ${user.id}</p>
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>`;
    container.append(cardDiv);
}

function resetForm(inputs){
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    user.map((product) => {
        createCard(product);
    });

    const openModalBtn = document.querySelector(".create_user > button");
    const modal = document.getElementById("modal");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const createBtn = document.querySelector(".btn > button")

    openModalBtn.onclick = function () {
      modal.style.display = "block";
    };

    closeModalBtn.onclick = function () {
      modal.style.display = "none";
    };

    createBtn.addEventListener('click', function () {
      let User = {
        id:`${document.getElementById('id').value}`,
        name: `${document.getElementById('name').value}`,
        username: `${document.getElementById('username').value}`,
        email: `${document.getElementById('mail').value}`
      }
      
      createCard(User);

      modal.style.display = "none";

      const inputs = document.getElementsByTagName("input");
      resetForm(inputs);
    }) 

})
 

