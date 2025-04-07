// recupero gli elementi del dom
// const cards = document.querySelectorAll('.card');
// const image = document.querySelectorAll('.img');
// const date = document.querySelectorAll('.date');
// const cardTitle = document.querySelectorAll('.description');



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
        console.log(array);
        
        // chiamo la funzione per creare le card passando l'array appena costruito
        updContainer(array);
        
    })


