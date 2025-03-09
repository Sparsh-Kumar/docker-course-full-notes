window.onload = function () {

  const idHandler = document.getElementById('id');
  const nameHandler = document.getElementById('name');
  const emailHandler = document.getElementById('email');
  const submitBtnHandler = document.getElementById('submit');

  fetch("http://localhost:8000/get/67cdaf8f160c9d20649f038c", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then((jsonResponse) => {
      const { data = {} } = jsonResponse;
      const { _id = '', name = '', email = '' } = data;
      idHandler.value = _id;
      nameHandler.value = name;
      emailHandler.value = email;
    })
    .catch(error => console.error("Error:", error));

  submitBtnHandler.addEventListener("click", function (event) {
    event.preventDefault();
    const id = idHandler.value;
    const name = nameHandler.value;
    const email = emailHandler.value;
    fetch(`http://localhost:8000/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email
      })
    })
      .then(response => response.json())
      .then((jsonResponse) => {
        const { data = {} } = jsonResponse;
        const { _id = '', name = '', email = '' } = data;
        idHandler.value = _id;
        nameHandler.value = name;
        emailHandler.value = email;
      })
      .catch(error => console.error("Error:", error));
  })

}

