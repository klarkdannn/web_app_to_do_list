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

function createId(users) {
    return Object.keys(users).length;

}

submit.addEventListener('click', () => {
    const loginUser = login.value;
    const emailUser = email.value;
    const passwordUser = password.value; 

    const user = new User(loginUser, emailUser, passwordUser);

    const userId = 'User' + createId(users);
    users[userId] = user;

    console.log(users);

    alert(`${loginUser}, you have successfully registered `)
})

