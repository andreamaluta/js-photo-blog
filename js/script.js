// recupero gli elementi del dom
const cards = document.querySelectorAll('.card');
const image = document.querySelectorAll('.img');
const date = document.querySelectorAll('.date');
const cardTitle = document.querySelectorAll('.description')

axios.get('https://lanciweb.github.io/demo/api/pictures/').then((resp)=>{
    
})