import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const AppWrapper = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState({});

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const user = new User(login, email, password);

    const userId = 'User' + createId(users);
    setUsers(prevUsers => ({ ...prevUsers, [userId]: user }));

    console.log(users);

    alert(`${login} You have successfully registered`);
  };

  return (
    <React.StrictMode>
      <App />
      <form onSubmit={handleFormSubmit}>
        <label>
          Login:
          <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppWrapper />);

function User(login, email, password) {
  this.login = login;
  this.email = email;
  this.password = password;
}

function createId(users) {
  return Object.keys(users).length;
}

reportWebVitals();
