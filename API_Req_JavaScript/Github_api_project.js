const form = document.querySelector('form')
const profilePic = document.querySelector('.profilePic') 
const userInput = document.querySelector('#userInput')
let newImage = document.createElement('div')
let mainInfo = document.querySelector('.info') 


form.addEventListener('submit', (e) => { 
    e.preventDefault() 
    let url = `https://api.github.com/users/${userInput.value}`

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function () { 
        if (xhr.readyState === 4) { 
            let data = JSON.parse(this.responseText)
            let avatar = data.avatar_url
            newImage.classList.add('imgContainer')
            newImage.style.backgroundImage = `url(${avatar})`
            profilePic.appendChild(newImage)

            mainInfo.innerHTML = `
            
                <h3>${data.name}</h3>
                <p>${data.bio}</p>
                <div class="otherInfo">
                    <div class="followers">Followers: ${data.followers}</div>
                    <div class="following">Following: ${data.following}</div>
                    <div class="repo">Repos: ${data.public_repos}</div>
                </div>
            
            `

        }
    }

    xhr.send()
})