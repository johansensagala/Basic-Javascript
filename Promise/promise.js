const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {
                name: "Johansen Sagala",
                age: 21,
                email: "johansensagala.2001@gmail.com"
            };
            resolve(data);
        }, 2000);
    });
};
  
getData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
  