let user_data = {
 
};
let form = document.querySelector(".form");
console.log(form);
form.onsubmit = function(event){
    event.preventDefault();
    let ele = event.target.elements;
    console.log(ele);

    user_data = {
        first_name : ele[0].value,
        last_name : ele[1].value,
        contru: ele[2].value,
        company: ele[3].value,
          address : ele[4].value,
          unit : ele[5].value,
        city: ele[6].value,
        state: ele[7].value,
        postal_code: ele[9].value,
        phone :ele[8].value,
        defoltadd : ele[11].value,
        defolt_bill : ele[12].value
     };   
     localStorage.setItem('user_data', JSON.stringify(user_data));

     window.location.href = "../html/personal-info.html"; 
     console.log(user_data);


}