// recupero gli elementi del dom
const cards = document.querySelectorAll('.card');
const image = document.querySelectorAll('.img');
const date = document.querySelectorAll('.date');
const cardTitle = document.querySelectorAll('.description');


    const createdCard = (objArray) => {

        let card = `<div class="col-4">
                    <div class="card">
                       
                        <div class="pin">
                            <img src="./img/pin.svg" alt="">
                        </div>
                        
                        <img src=${objArray.url} alt="" class="p-3 img-fluid">
                        
                        <div class="content">
                            
                            <div class="date">${objArray.date}</div>
                            
                             <div class="description">
                                <h3>${objArray.title}</h3>
                             </div>
                            
                        </div>
                    </div>
                </div>`

        return card;            
    }

    const updContainer = (arrayCard) =>{
        for(let i=0; i<arrayCard.length; i++){
          let pippo = createdCard(arrayCard[i]);
          document.querySelector('.row').innerHTML += pippo;
        }
    }

    axios.get('https://lanciweb.github.io/demo/api/pictures/').then((resp)=>{
        const array = resp.data;    
        console.log(array);
        
        updContainer(array);
        
    })
    


