const sendData = (body) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(body),
  })
    .then((responce) => responce.json())
    .then((data) => {
      console.log("sendData", data);
    })
    .catch((error) => {
      console.log(error);
    });
};
const getData = (url) => {
  fetch(url)
    .then((responce) => responce.json())
    .then((data) => {
      // console.log("data: ", data);
      sendData(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

getData("./db.json");
