function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received from server");
        }, 2000);
    });
}

fetchData()
  .then((data) => {
      console.log(data);
  })
  .catch((error) => {
      console.log(error);
  });