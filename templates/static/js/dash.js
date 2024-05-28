import { totalUsers, validUsers } from "../js/form.js";


document.addEventListener("DOMContentLoaded", function() {

const total = document.getElementById('total-certificate').innerText = totalUsers.length

const valid = document.getElementById('valid-certificate').innerText = validUsers.length

const invalid = document.getElementById('invalid-certificate').innerText = totalUsers.length - validUsers.length

});