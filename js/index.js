// byTag names
// const tagList = document.getElementsByTagName('h1');
// for(const tag of tagList){
//     tag.style.color = 'red'
// }
// for(let i = 0; i< tagList.length ; i++){
//     console.log(tagList[i].innerText)
// }

// by class names
// const classList = document.getElementsByClassName('test');
// for(const value of classList){
//     console.log(value.innerText);
//     value.style.color = 'blue';
// }

// by id name 
// const myHeading = document.getElementById('heading');
// myHeading.style.textAlign = 'center';
// console.log(myHeading.innerText)

// directly 
// document.getElementById('heading').style.color = 'yellow'

// quary selector
// const myElement = document.querySelectorAll('.test');
// console.log(myElement)


// const lastChild = document.querySelectorAll('.li-container:last-child')
// console.log(lastChild)

// const myElement = document.getElementById('first-heading');
// // first Way
// myElement.className = 'myclass';


// // second way to add external CSS
// myElement.classList.add('hello')


// // way to remove external css by class name
// myElement.classList.remove('myclass')



// const parentContainer = document.getElementById('container-details');
// const myli = document.createElement('li');
// myli.innerText='I am Joyanti'

// console.log(myli.innerText);

// parentContainer.appendChild(myli);



// const container = document.getElementById('sectionContainer');
// // creat a div
// const div = document.createElement('div');
// console.log(div);

// make a h1 tag
// const h1 = document.createElement('h1');
// h1.innerText = 'Exploring Dinamic js '
// console.log(h1)

// put h1 inside div
// div.appendChild(h1);
// container.appendChild(div)
// console.log(div);
//  set attribute
document.getElementById('att-container').setAttribute('class','myclass');
document.getElementById('att-container').setAttribute('value','myvalue');

// get attribbute
const myAttribute = document.getElementById('att-container').getAttribute('class');
const Attribute = document.getElementById('att-container').getAttribute('value');

console.log(Attribute)