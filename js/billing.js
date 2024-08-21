let bill_data = {
 
};
let form = document.querySelector(".bill_section");
console.log(form);
form.onsubmit = function(event){
    event.preventDefault();
    let ele = event.target.elements;
    console.log(ele);

    bill_data = {
        first_name : ele[0].value,
        last_name : ele[1].value,
        contru: ele[2].value,
        company: ele[3].value,
          address : ele[4].value,
          unit : ele[5].value,
        city: ele[6].value,
        state: ele[7].value,
        postal_code: ele[8].value,
        phone :ele[9].value,
        
     };    

}