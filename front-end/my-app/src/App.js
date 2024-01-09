import App from './App.css';


let name = document.querySelector('#login');
let login = document.querySelector('#email');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit');

let users = {};

function User(login, email, password) {
    this.login = login;
    this.email = email;
    this.password = password;
}

export default App;
