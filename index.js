var isStatus = document.querySelector("h5");
var RemoveFriend = document.querySelector("#remove")
var addFriend = document.querySelector("#add");

addFriend.addEventListener("click", function () {
    isStatus.innerHTML = "Friends"
    isStatus.style.color = 'green'
})
RemoveFriend.addEventListener("click", function () {
    isStatus.innerHTML = "Strenger"
    isStatus.style.color = 'red'
})