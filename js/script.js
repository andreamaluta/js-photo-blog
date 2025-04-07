// recupero gli elementi del dom
const button = document.querySelector('.btn')
const overlay = document.getElementById('overlay')
const image = document.getElementById('imgOver')




// funzione che mi permette di creare le card
const createdCard = (objArray) => {

    // creo la stringa che mi contiene l'html che poi linkero alla row
    let card = `<div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card">
                    
                    <div class="pin">
                        <img src="./img/pin.svg" alt="">
                    </div>
                    
                    <img src=${objArray.url} alt="" class="p-3 img-fluid">
                    
                    <div class="content">
                        
                        <div class="date"><strong>${objArray.date}</strong></div>
                        
                            <div class="description">
                            <h3 class="upper">${objArray.title}</h3>
                            </div>
                        
                    </div>
                </div>
            </div>`

    return card;            
}

// funzione che mi permette di ciclare l'array e linkare le card alla row
const updContainer = (arrayCard) =>{
    for(let i=0; i<arrayCard.length; i++){
        let pippo = createdCard(arrayCard[i]);
        document.querySelector('.row').innerHTML += pippo;
    }
}

// chiamata axio all'api che contiene le immagini e le descrizioni sotto forma di array di oggetti
axios.get('https://lanciweb.github.io/demo/api/pictures/').then((resp)=>{
    // estraggo l'array tramite resp.data e lo inserisco in una variabile
    const array = resp.data;    
    // console.log(array);
     

    // chiamo la funzione per creare le card passando l'array appena costruito
    updContainer(array);

    // prendo dentro la chiamata ajax gli elementi card del dom dal momento che fuori dalla chiamata gli elementi non sono ancora creati
    const cards = document.querySelectorAll('.card');

    // ciclo le card
    cards.forEach(card => {
        // ad ogni card aggiungo l'evento click
        card.addEventListener('click', () => {
            // tolgo la classe d-none una volta cliccato sulla card
            overlay.classList.remove('d-none');
            // ciclo l'array estratto in precedenza
            for(let i=0; i<array.length; i++){
                // controllo se l'inner html della card che ho cliccato contiene l'url dell'elemento che sto visualizzando dell'array
                if(card.innerHTML.includes(array[i].url)){
                    // se lo contiene lo cambio nel dom
                    image.src = array[i].url;
                }
            }
        });
    })
    
})

// aggiungo un evento click al bottone che mi permette di nascondere di nuovo l'overlay
button.addEventListener('click', () => {
    // aggiungo di nuovo la classe d-none una volta che clicco sul bottone
    overlay.classList.add('d-none');
})







