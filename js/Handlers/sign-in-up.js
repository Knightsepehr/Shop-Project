import createUser from "./createUserOBJ.js";

export let islogged = false;
export let currentUser = "";

document.addEventListener('DOMContentLoaded', function() {
    let user_arr = [];
    const label = document.getElementById("label");
    let reg_btn = document.getElementById("register");
    let login_btn = document.getElementById("login");
    const logout = document.getElementById("logout");

    let SavedUser_arr = JSON.parse(localStorage.getItem("user_arr")) || [];
    let User_arr_saved = [...SavedUser_arr];
    
    if (User_arr_saved.length > 0){
        user_arr = User_arr_saved;
    }
    login_btn.addEventListener("click",()=>{
        if (User_arr_saved.length <= 0) {
            label.classList.add("text-danger");
            label.classList.remove("text-success");
            label.innerText = "No user was found";
            return;
        }
        let login_username = document.getElementById("username-l").value;
        let login_password = document.getElementById("password-l").value;
        user_arr.forEach((user)=>{
            if (user.username == login_username && user.password == login_password) {
                islogged = true;
                currentUser = login_username;
                console.log(currentUser,islogged);
                label.innerText = `successfulyl logged in with user : ${login_username}`;
                localStorage.setItem("loggeduser",`${login_username}`);
                label.classList.remove("text-danger");
                label.classList.add("text-success");
                logout.style.display = "block";
            }
            else{
                label.classList.add("text-danger");
                label.classList.remove("text-success");
                label.innerText = `No matching username/password was found`;
            }
        });
    });
    logout.addEventListener("click",()=>{
        localStorage.removeItem("loggeduser");
        logout.style.display = "none";
        label.classList.remove("text-danger");
        label.classList.add("text-success");
        label.innerText = `Logged out`;
    });



    reg_btn.addEventListener("click",()=>{
        let registered_username = document.getElementById("username-r").value;
        let registered_password = document.getElementById("password-r").value;
        user_arr.push(createUser(registered_username,registered_password));
        localStorage.setItem("user_arr",JSON.stringify(user_arr));
    });



});
// document.addEventListener("click",()=>{
//     console.log("islogged");
//     console.log(islogged);
//     console.log("currentUser");
//     console.log(currentUser);
// });