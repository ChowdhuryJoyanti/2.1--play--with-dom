let count = 0;
document.getElementById('input-btn').addEventListener('click',function(){
 count +=1;
    const myInputValue = document.getElementById('input-value').value;
   
    const parent = document.getElementById('content-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${count}</td>
    <td>${ myInputValue}</td>
    <td>
    <button class="btn btn-primary btnDelete"> Delete </button>
    <button class="btn btn-danger"> Done </button>

    </td>
    
    `;
    parent.appendChild(tr);
    document.getElementById('input-value').value = '';

     const elements = document.querySelectorAll('.btnDelete')
        // console.log(elements);
    for(const value of elements){
        // console.log(value);
        value.addEventListener('click',function(event){
            // console.log(event.target.parentNode.parentNode);
            event.target.parentNode.parentNode.style.display ="none"
        })
    }


})
document.getElementById('clear-btn').addEventListener('click',function(event){
    console.log(event.parentNode);
    event.target.parentNode.style.display ="none";
})