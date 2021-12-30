//https://www.icndb.com/api/

const buttonEl = document.querySelector(".jokeBtn");
const jokeText = document.querySelector('.jokeText');
const image = document.querySelector('img');
const inputName = document.querySelector('#name');
const inputSurname = document.querySelector('#surname');
inputName.value = '';
inputSurname.value = '';

buttonEl.addEventListener('click', ()=>{
    const name = inputName.value
    const lName = inputSurname.value
 fetch(`https://api.icndb.com/jokes/random?firstName=${name}&lastName=${lName}`)
    .then(response => response.json())
    .then(data => {
        jokeText.innerHTML = data.value.joke
    })
    .catch(error => console.log(error, 'this is error'))
    
    image.classList.add('shake-img')
    setTimeout(()=>{
        image.classList.remove('shake-img')
    }, 2000)
})

