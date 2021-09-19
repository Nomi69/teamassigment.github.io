

function signup()
{
let name =document.getElementById("name").value;
let email =document.getElementById("email").value;
let password =document.getElementById("password").value;

let user_record=new Array();
user_record=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]


if(name=="" ||email=="" ||password==""){
	alert ("please fill all feilds")
}
else if(user_record.some((v)=>{return v.email==email}))
{
	alert("this email is already exist")
}else{
	user_record.push({
		"name":name,
		"email":email,
		"password":password
	})
	alert("successfull signup")
	localStorage.setItem("users",JSON.stringify(user_record));
}
}







function login(){
let email =document.getElementById("emaill").value;
let password =document.getElementById("passwordl").value;

let user_record=new Array();
user_record=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]



 if(user_record.some((v)=>{return v.email==email && v.password==password}))
{
	alert("login successfull");
	let current_user=user_record.filter((v)=>{return v.email==email && v.password==password})[0];
	localStorage.setItem('name',current_user.name);
	localStorage.setItem('email',current_user.email);

	window.location.href="home.html"
}
else if(email=="" ||password==""){
	alert ("please fill all feilds")
}
else{
alert("email and password is incorrect")
}

}


function logout(){
    localStorage.removeItem('name')
    localStorage.removeItem('email')

    window.location.href="index.html"

}