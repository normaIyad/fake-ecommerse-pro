document.addEventListener("DOMContentLoaded", function() {
    console.log('Script is running');

    let storedUserData = localStorage.getItem('user_data');
    if (storedUserData) {
        let userData = JSON.parse(storedUserData);
        console.log(userData);
        let name = userData.first_name;
        let last = userData.last_name;
        let    contru = userData.contru;
        let  company = userData.company;
         let  address = userData.address; 
        let  unit = userData.unit;
        let  city = userData.city;
        let  state = userData.state;
        let postal_code = userData.postal_code;
        let  phone = userData.phone;
         let  defoltadd = userData.defoltadd; 
        let  defolt_bill = userData.defolt;
        console.log(last , name , last , contru , company , 
            address, unit, city, state, postal_code, phone, defoltadd, defolt_bill
        );
        document.querySelector(".section_header .name").innerHTML = name;
        console.log( document.querySelector(".form .name_of"))
        document.querySelector(".form .name_of").value = name;
        document.querySelector(".form #phone").value = phone;
        let add = `
            <div>
                      <h3>${name} " " ${last}</h3>
                      <p>${phone}</p>
                      <p>
                        ${address}
                      </p>
                    </div>
        `;
        document.querySelector(".alladres .address ").innerHTML = add ;

    } else {
        console.log('No user_data found in localStorage');
    }
});
