console.log("Let's do scripting!!!");

var validFname=false;
var validLname=false;
var validEmail=false;
var validMobile=false;
var validAddress=false;
var validPincode=false;
var validState=false;
var validB1=false;
var validB2=false;
var validB3=false;
var validB4=false;
var validP1=false;
var validP2=false;
var validP3=false;
var validP4=false;


/*for first name*/
var fname=document.getElementById("fname");
var reg=/^[A-Z]([a-z]){2,9}$/;
fname.addEventListener("blur",()=>{
    if(fname.value.length>=3 && reg.test(fname.value)){
        validFname=true;
        console.log("Fname matched");
    }
    

    else {
        alert("Your First Name is incorrect");
    }


})


/*for lastname*/

var lname=document.getElementById("lname");
var reg2=/^[A-Z]([a-z]){2,9}$/;
lname.addEventListener("blur",()=>{
    if(lname.value.length>=3 && reg2.test(lname.value)){
        validLname=true;
        console.log("Lname matched");
    }
    

    else {
        alert("Your Last Name is incorrect");
    }


})




var email=document.getElementById("eid");
var reg3= /^([^0-9][\-\.a-zA-Z0-9]+)@([\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
email.addEventListener("blur",()=>{
    if(reg3.test(email.value)){
        validEmail=true;
        console.log("Email matched");
    }
    

    else {
        alert("Your Email is incorrect");
    }


})





var mno=document.getElementById("mno");
var reg4=/^[0-9]{10}$/;
mno.addEventListener("blur",()=>{
    if(reg4.test(mno.value)){
        validMobile=true;
        console.log("Mobile number matched");
    }
    

    else {
        alert("Your Mobile number is incorrect");
    }


})



/*for address*/

var tarea=document.getElementById("tarea");
var reg5= /^([A-Za-z0-9\s\-_])+/;
tarea.addEventListener("blur",()=>{
    if(reg5.test(tarea.value) && tarea.value.length>=10){
        validAddress=true;
        console.log("Address matched");
    }
    

    else {
        alert("Your Address is incorrect");
    }


})


/*for pincode*/
var pcode=document.getElementById("pcode");
var reg6=/^[0-9]{6}$/;
pcode.addEventListener("blur",()=>{
    if((pcode.value.length==6) && reg6.test(pcode.value)){
        validPincode=true;
        console.log("Pincode matched");
    }
    

    else {
        alert("Your Pincode is incorrect");
    }


})


/*for state*/

var state=document.getElementById("state");
var reg7=/^([A-Za-z\s])+$/;
state.addEventListener("blur",()=>{
    if(state.value.length>=3 && reg7.test(state.value)){
        validState=true;
        console.log("State matched");
    }
    

    else {
        alert("State is incorrect");
    }


})

/*data for day*/
var day=document.getElementById("day");

/*data for month*/
var month=document.getElementById("month");

/*data for year*/
var year=document.getElementById("year");

/*data for country*/
var country=document.getElementById("country");





var b1=document.getElementById("b1");
var b2=document.getElementById("b2");
var b3=document.getElementById("b3");
var b4=document.getElementById("b4");


var p1=document.getElementById("p1");
var p2=document.getElementById("p2");
var p3=document.getElementById("p3");
var p4=document.getElementById("p4");


var y1=document.getElementById("y1");
var y2=document.getElementById("y2");
var y3=document.getElementById("y3");
var y4=document.getElementById("y4");



/*validation for Board*/

b1.addEventListener("blur",()=>{
    if(b1.value.length>=3){
        validB1=true;
    }
    else {
        alert("Please write board upto at least 3 characters");
    }
})

b2.addEventListener("blur",()=>{
    if(b2.value.length>=3){
        validB2=true;
    }
    else {
        alert("Please write board upto at least 3 characters");
    }
})

b3.addEventListener("blur",()=>{
    if(b3.value.length>=3){
        validB3=true;
    }
    else {
        alert("Please write board upto at least 3 characters");
    }
})

b4.addEventListener("blur",()=>{
    if(b4.value.length>=3){
        validB4=true;
    }
    else {
        alert("Please write board upto at least 3 characters");
    }
})



/*validation for Percentage*/


p1.addEventListener("blur",()=>{

    var reg = /^([a-zA-Z])+/;
    if(reg.test(p1.value))
        {
            alert("please enter only number");
        }
   if(p1.value=="")
            {
                alert("Please enter marks")
            }
    // String Contains Decimal
    if (p1.value.includes('.')) {
       x=p1.value.split('.')[1].length;
       if(x==2){
        console.log("Percentage Correct");
       }
       else{
        alert("Percentage not correct");
       }
    }

    if(p1.value.length==2 || p1.value.length==1){
        alert("Please write up to two decimal places");
    }
})



p2.addEventListener("blur",()=>{

    var reg = /^([a-zA-Z])+/;
    if(reg.test(p2.value))
        {
            alert("please enter only number");
        }


        if(p2.value=="")
            {
                alert("Please enter marks")
            }
    // String Contains Decimal
    if ((p2.value).includes('.')) {
       x=p2.value.split('.')[1].length;
       if(x==2){
        console.log("Percentage Correct");
       }
       else{
        alert("Percentage not correct");
       }
    }

    if(p2.value.length==2 || p2.value.length==1){
        alert("Please write up to two decimal places");
    }
})


p3.addEventListener("blur",()=>{

    var reg = /^([a-zA-Z])+/;
    if(reg.test(p3.value))
        {
            alert("please enter only number");
        }

        if(p3.value=="")
            {
                alert("Please enter marks")
            }

    // String Contains Decimal
    if ((p3.value).includes('.')) {
       x=p3.value.split('.')[1].length;
       if(x==2){
        console.log("Percentage Correct");
       }
       else{
        alert("Percentage not correct");
       }
    }

    if(p3.value.length==2 || p3.value.length==1){
        alert("Please write up to two decimal places");
    }
})


p4.addEventListener("blur",()=>{

    var reg = /^([a-zA-Z])+/;
    if(reg.test(p4.value))
        {
            alert("please enter only number");
        }

        if(p4.value=="")
            {
                alert("Please enter marks")
            }

    // String Contains Decimal
    if ((p4.value).includes('.')) {
       x=p4.value.split('.')[1].length;
       if(x==2){
        console.log("Percentage Correct");
       }
       else{
        alert("Percentage not correct");
       }
    }

    if(p4.value.length==2 || p4.value.length==1){
        alert("Please write up to two decimal places");
    }
})



/*for form submit button*/

var submit = document.getElementById("submit");
submit.addEventListener("click",(event)=>{
    if(fname.value=="" || lname.value=="" || email.value=="" || mno.value=="" || tarea.value=="" || pcode.value=="" || state.value==""
    || b1.value==""|| b2.value=="" || b3.value=="" || b4.value=="" || p1.value=="" || p2.value=="" || p3.value=="" || p4.value=="" || y1.value=="" 
    || y2.value=="" || y3.value=="" || y4.value=="")
    {
        
            alert("Please fill the form!!!");
           event.preventDefault();
  
       
    }

    
    
  else {
    /*for selecting gender*/
    var storeGender;
    var radios = document.getElementsByName('gender');
    for (var radio of radios)
    {
        if (radio.checked) {
           storeGender=radio.value; 
           break;
        }
        else {
            alert("Please select the gender");
            break;
        }
    
    }

    /*for selecting cource*/
    var storeCource;
    var radios2 = document.getElementsByName('cource');
    for (var radio of radios2)
    {
        if (radio.checked) {
           storeCource=radio.value; 
           break;
        }

        else {
            alert("Please select the cource");
            break;
        }

 
    }

    /*for selecting Hobbies*/
    var storeHobbies=[];
    var hob=document.getElementsByClassName("hob");
    for (var hobby of hob)
    {
        if (hobby.checked) {
           storeHobbies.push(hobby.value);
        }
        else {
            alert("Please select the hobbies");
            break;
        }
    
    }
  
    let txt="Do you want to submit the form ?";
    if(confirm(txt)==true){

        console.log("You clicked ok");
        if(validFname && validLname && validEmail && validMobile && validAddress && validPincode && validState) {
    document.write('<table border="3">');
    document.write(
        '<tr><th colspan="2">Student Data</th></tr>'+
        '<tr><td style="font-weight:bold;">'+"First Name"+'</td><td>'+fname.value+'</td></tr>'+
    '<tr><td style="font-weight:bold;">'+"Last Name"+'</td><td>'+lname.value+'</td></tr>'+
    '<tr><td style="font-weight:bold;">'+"Date of Birth"+'</td><td>'+day.value+"-"+month.value+"-"+year.value+'</td></tr>'+
    '<tr><td style="font-weight:bold;">'+"Email"+'</td><td>'+email.value+'</td></tr>'+
    '<tr><td style="font-weight:bold;">'+"Mobile Number"+'</td><td>'+mno.value+'</td></tr>'+
    '<tr><td style="font-weight:bold;">'+"Gender"+'</td><td>'+storeGender+'</td></tr>'+
    '<tr><td style="font-weight:bold;">'+"Address"+'</td><td>'+tarea.value+'</td></tr>'+
    '<tr><td style="font-weight:bold;">'+"Pincode"+'</td><td>'+pcode.value+'</td></tr>'+
    '<tr><td style="font-weight:bold;">'+"State"+'</td><td>'+state.value+'</td></tr>'+
    '<tr><td style="font-weight:bold;">'+"Country"+'</td><td>'+country.value+'</td></tr>'+
    '<tr><td style="font-weight:bold;">'+"Hobbies"+'</td><td>'+storeHobbies+'</td></tr>'+
    '<tr><td style="font-weight:bold;">'+"Qualification"+'<td><table border="2">'+
    '<tr><td >'+"SI.No."+'</td><td>'+"Examination"+'</td><td>'+"Board"+'</td><td>'+"Percentage"+'</td><td>'+"Year of Passing"+'</td></tr>'+
    '<tr><td >'+"1"+'</td><td>'+"Class X"+"</td><td>"+b1.value+"</td><td>"+p1.value+'</td><td>'+y1.value+'</td></tr>'+
    '<tr><td >'+"2"+'</td><td>'+"Class XII"+'</td><td>'+b2.value+'</td><td>'+p2.value+'</td><td>'+y2.value+'</td></tr>'+
    '<tr><td>'+"3"+'</td><td>'+"Graduation"+'</td><td>'+b3.value+'</td><td>'+p3.value+'</td><td>'+y3.value+'</td></tr>'+
    '<tr><td >'+"4"+'</td><td>'+"Masters"+'</td><td>'+b4.value+'</td><td>'+p4.value+'</td><td>'+y4.value+'</td></tr>'+
    '</table></td></tr>'+
    '<tr><td style="font-weight:bold;">'+"Cources Applied For"+'</td><td>'+storeCource+'</td></tr>');

    document.write('</table>');
    }
  
    }
 else {
    event.preventDefault();
 }

  }
})