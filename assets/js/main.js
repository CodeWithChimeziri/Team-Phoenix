//search functionality

function inputFunction() {
    let input = document.getElementById('search-input').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('premium-products');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
    }


const icon = document.querySelector('.global-icon');
const search = document.querySelector('.global-search');
icon.addEventListener('click', function(){
    search.classList.toggle('active')
})

//visitor count
const countEl = document.getElementById('counter');

visitorCountUpdate();

function visitorCountUpdate(){
fetch('https://api.countapi.xyz/update/thriftfashion/visitorcount?amount=1')
.then(res => res.json())
.then (res => {
    countEl.innerHTML = res.value;
});

console.log(res.value);
}
