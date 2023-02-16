console.log('added')
function makeRed(){
    document.body.style.backgroundColor = 'red';
    document.getElementById('heading').innerText = "Testing Events"
}

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
    document.getElementById('heading').innerText = " Second Testing Events"
}

// function makeGray(){
//     document.body.style.backgroundColor = 'gray';
//     document.getElementById('heading').innerText = " Third Testing Events"
// }

document.getElementById('btn-success').addEventListener('click',function(){
    document.body.style.backgroundColor = 'gray';
    document.getElementById('heading').innerText = " Third Testing Events"
})


const myEvent = document.getElementById('blue-btn').addEventListener('click',function(){

         document.body.style.backgroundColor = 'tomato';
         document.getElementById('h2-container').innerText = ' Hello tedday '
})

