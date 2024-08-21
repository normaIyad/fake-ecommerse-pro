const get_prodact = async() =>{
    const search = new URLSearchParams(window.location.search);
    const id = search.get("id");
    const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);
   return data;
};
const get_product_with_limt = async() =>{
   const {data} = await axios.get(`https://fakestoreapi.com/products?limit=4&sort=desc`);
   return data;
}
const prodact_detals = async() =>{
    try{
      const detals = await get_prodact();
      const img = `
              <img src=${detals.image} alt="" />
      `;
      document.querySelector(`.main-prodact .imgs .large-img`).innerHTML = img;
      const title = `<h2>${detals.title}</h2>`
        const rate = detals.rating.rate;
        const comment = detals.rating.count; 
        const price = detals.price;
        const description = detals.description;
        console.log(description)
      document.querySelector(".title").innerHTML = title;
      document.querySelector(".rate").innerHTML = `${rate}`;
      document.querySelector(".comment").innerHTML = `${comment} commment`;
      document.querySelector(".price").innerHTML = `$ ${price}`;
      document.querySelector(".description p").innerHTML = `${description}`;
      document.querySelector(`.sm-img`).innerHTML = img
    }
    catch(err){
      const result = `  <h2>   error   </h2>`;
      document.querySelector(".main-prodact").innerHTML = result;
    }
    finally{
      document.querySelector(".overlay").classList.add("d-none");
    }
}
const other_prodacts = async ()=>{
  try{
    let n = 0;
    const pro = await get_product_with_limt();
    let res  =` `;
    // let rand = pro[(Math.floor(Math.random() * pro.length))];
    let rand = 0;
    for(let i=0; i < 4; i++){
      rand = pro[(Math.floor(Math.random() * pro.length))];
       res +=   ` <div class="card">
      <img
        src="${rand.image}"
        class="card-img-top"
        
      />
      <div class="hart">
        <img src="../imgs/limelight/heart (1).svg" alt="" />
      </div>
      <div
        class="card-body d-flex justify-content-between align-items-center"
      >
        <div>
        <a href="prodact.html?id=${rand.id}">  <h3 class="card-text">${rand.title}</h3></a>
        </div>
        <span class="btn btn-light"> $ ${rand.price}</span>
      </div>
    </div>
        `
        
     
       document.querySelector(".clothes .cards").innerHTML = res;
    };
      console.log(rand);  
  }catch(err){
    document.querySelector(".clothes .cards").innerHTML= `<h2>
    ${err.message} plese trat aggen 
    </h2>`
  }finally{

  }
} 
const result = prodact_detals();
console.log(result);
const other = other_prodacts();
 console.log(other);