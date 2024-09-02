const promiseOne = new Promise(function (resolve, reject) { 
    // preform some Async tasks
    setTimeout(() => { 
        console.log('Promise One: Compleated');
        resolve()
    }, 1000)
    
})

promiseOne.then(function () { 
    console.log('Promise One: Consumed');
})

// we can use promise direclty without holding in a variable
new Promise((resolve, reject) => { 
    setTimeout(() => { 
        console.log('Promise Two: Compleated');
        resolve()
    }, 1000)
}).then(() => {
    // console.log('Promise Two Consumed');
})

// passing values from resolve to then
new Promise((resolve, reject) => { 
    setTimeout(() => { 
        resolve({username: 'MuhammadShakir-dev', domain: 'Shakir@frontenddev.com'})
    }, 1000)
}).then((userInfo) => { 
    // console.log(userInfo);
})

// error handling and chaining
const promiseFour = new Promise((resolve, reject) => { 
    setTimeout(() => { 
        let error = false
        if (!error) {
            resolve({ username: "Muhammad Shakir", profession: 'Software Engineering' })
        } else { 
            reject('Something went wrong :(')
        }
    },1000)
})

promiseFour
    .then((user) => { 
        // return user.username
    })
    .then((username) => { 
        // console.log(username);
    })
    .catch((error) => { 
        // console.log(error);
    })
    .finally(() => { 
        // console.log("I'm a default state im run either the promise is resolved or rejected");
    })

// using async await
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => { 
        let error = true
        if (!error) {
            resolve({ langName: "JavaScript", experience: "4 years" })
        } else { 
            reject('JS went wrong')
        }
    },1000)
})    

async function consumedPromiseFive() {
    try {
        const repsonse = await promiseFive
        console.log(repsonse);
    }

    catch (error) { 
        console.log(error);
    }
}

consumedPromiseFive()

// GitHub api call using async await
// async function getUserInfo() { 
//     const response = await fetch('https://api.github.com/users/MuhammadShakir-dev');
//     const data = await response.json();
//     console.log(data);
// }

// getUserInfo()

// using try catch with it
// async function getUserInfo() { 
//     try {
//         async function getUserInfo() {
//             const response = await fetch('https://api.github.com/users/MuhammadShakir-dev');
//             const data = await response.json();
//             console.log(data);
//         }https://v6.exchangerate-api.com/v6/05bf1feff57906271cfe6bae/latest/USD
        
//         getUserInfo()
//     }
    
//     catch (error) { 
//         console.log(error);
//     }

// }
// getUserInfo()

// using then catch with fetch

fetch('https://api.github.com/users/MuhammadShakir-dev')
    .then((response) => { 
        return response.json()
    }) 
    .then((data) => { 
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
     })

     




