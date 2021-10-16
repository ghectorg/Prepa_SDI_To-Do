/*const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const datos = [1, 2, 3];
    if (datos.length > 0) {
      resolve("los datos son", datos);
    } else {
      reject("no hay datos");
    }
  }, 2000);
});

promise
  .then((response) => {
    console.log("respuesta", response);
  })
  .catch((error) => {
    console.log("Error", error);
  });

console.log("hola codigo asincrono");

*/
const promise = fetch("https://jsonplaceholder.typicode.com/todos");
const mainSectionContainer = document.getElementById("mainSection");

promise
  .then((response) => {
    return response.json();
  })
  .then((datos) => {
    console.log(datos);
    mainSectionContainer.innerHTML += datos.map((todo) => {
      return `<div class="todo-item">
        <div class="title">
          <h3>${todo.title}</h3>
          <div class="actions">
            <button>
              <img src="./icons/check.png" alt="icon check" />
            </button>
            <button>
              <img src="./icons/papelera.svg" alt="icon papel" />
            </button>
          </div>
        </div>
        <p>description</p>
      </div>`;
    });
  })
  .catch((error) => {
    console.log("Error", error);
  });

console.log("hola codigo asincrono");
