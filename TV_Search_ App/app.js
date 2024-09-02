const form = document.querySelector('form');
let userInput = document.querySelector('#userInput');
let img;

form.addEventListener('submit', async (e) => { 
    e.preventDefault();
    let searchValue = userInput.value;
    const request = await fetch(`https://api.tvmaze.com/search/shows?q=${searchValue}`)
    let data = await request.json()
    makeImages(data)
})

const makeImages = (shows) => { 
    clearImage()

    for (let results of shows) { 
        if (results.show.image && results.show.image.medium) { 
            img = document.createElement('IMG');
            img.src = results.show.image.medium;
            img.classList.add('generated-images')
            document.body.append(img)
        }
    }
    
}

const clearImage = () => { 
    userInput.value = ''
    let images = document.querySelectorAll('.generated-images')
    images.forEach(img => img.remove())
}