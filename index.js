let selectedRow = null;

function onFormSubmit(){
    var formData = readFormData();

    if ( selectedRow == null) insertNewRecord(data) ;
    else updateRecord (formData);

    resetForm();

}

function readFormData(){

    const formData ={};
   formData["firstname"] = document.getElementById("firstname").value;
   formData["lastname"] = document.getElementById("lastname").value;
   formData["gender1"] = document.getElementById("gender1").value;
   formData["gender2"] = document.getElementById("gender2").value;
   formData["gender3"] = document.getElementById("gender3").value;
   formData["address"] = document.getElementById("address").value;
   formData["pincode"] = document.getElementById("pincode").value;
   formData["state"] = document.getElementById("state").value;
   formData["country"] = document.getElementById("country").value;
   formData["Food_1"] = document.getElementById("Food_1").value;
   formData["Food_2"] = document.getElementById("Food_2").value;
   formData["Food_3"] = document.getElementById("Food_3").value;
   formData["Food_4"] = document.getElementById("Food_4").value;
   formData["Food_5"] = document.getElementById("Food_5").value;


   return formData;
  
}

function insertnewRecord(){
 let table = document.getElementById(personDetails).getElementsByTagName("tbody")[0];

var newRow= table.insertRow(table.length);
cell1 = newRow.insertCell(0);
cell1.innerHTML = data.firstname;
cell2 = newRow.insertCell(1);
cell2.innerHTML = data.lastname;
cell3 = newRow.insertCell(2);
cell3.innerHTML = data.gender;
cell4 = newRow.insertCell(0);
cell4.innerHTML = data.pincode;
cell5= newRow.insertCell(0);
cell5.innerHTML = data.state;
cell6 = newRow.insertCell(0);
cell6.innerHTML = data.country;
cell7 = newRow.insertCell(0);
cell7.innerHTML = data.food;


}

function resetForm(){
 document.getElementById("firstname").value="";
 document.getElementById("lastname").value="";
 document.getElementById("gender").value="";
 document.getElementById("pincode").value="";
 document.getElementById("state").value="";
 document.getElementById("country").value="";
 document.getElementById("food").value="";


}

function updateRecord(){

}