const get_prodact = async () =>{
   const {data} = await axios.get(`https://fakestoreapi.com/products`);
   return data ;
}
const prodacts = get_prodact();
console.log(prodacts);
const display_prodact = async () =>{
    try{
        const prodacts = await get_prodact();
        // const prodact = prodacts.prodacts; 
        
      const prodact =   prodacts.map (
            (e)=>
                ` <div class="card">
              <img
                src="${e.image}"
                class="card-img-top"
                
              />
              <div class="hart">
                <img src="../imgs/limelight/heart (1).svg" alt="" />
              </div>
              <div
                class="card-body d-flex justify-content-between align-items-center"
              >
                <div>
                <a href="prodact.html?id=${e.id}">  <h3 class="card-text">${e.title}</h3></a>
                  <span class="card-text dec">${e.description}</span>
                </div>
                <span class="btn btn-light"> $ ${e.price}</span>
              </div>
            </div>
                `
        ).join('');
        console.log(prodact);
        document.querySelector(".clothes .cards").innerHTML = prodact;
        // modual
        const modual = document.querySelector(".my-model");
        const right = document.querySelector(".right");
        const left = document.querySelector(".left");
        const close = document.querySelector(".x-btn");
        let index_img =0;
        const show_imgs = Array.from(document.querySelectorAll(".card-img-top"));
        console.log(modual , right , left , close ,show_imgs);
        right.addEventListener("click", ()=>{
            index_img++;
            if(index_img >= show_imgs.length){
                index_img = 0;
            }
            const next_index = show_imgs[index_img].getAttribute("src");

            console.log(next_index);
            modual.querySelector("img").setAttribute('src', next_index);
        })
        left.addEventListener("click", ()=>{
            index_img--;
            if(index_img < 0){
                index_img = show_imgs.length - 1;
            }
            const last_index = show_imgs[index_img].getAttribute("src");
            console.log(last_index);
            modual.querySelector("img").setAttribute("src", last_index);
        })
        close.addEventListener("click",(e)=>{
            modual.classList.add("d-none");
        } )
        for(var i=0;i<show_imgs.length;i++){
            show_imgs[i].addEventListener("click",(e)=>{
                console.log(e.target);
                modual.classList.remove("d-none");
                modual.querySelector("img").setAttribute("src", e.target.src);
                const this_img = e.target;
                index_img = show_imgs.indexOf(this_img);
                console.log(this_img);

            })
        }
    }catch(e){
      const result = `  <h2>   error   </h2>`;
      document.querySelector("main").innerHTML = result;
    }
    finally{
        document.querySelector(".overlay").classList.add("d-none");
    }
} 
display_prodact();
