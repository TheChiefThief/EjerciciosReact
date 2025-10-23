import React, { useState } from 'react';
import './Login.css';
import { Input } from './Input';

export const Login = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [errors, setErrors] = useState({});

const handleUsernameChange = (e) => {
    setUsername(e.target.value);
};

const handlePasswordChange = (e) => {
    setPassword(e.target.value);
};

const validate = () => {
    let isValid = true;
    let newErrors = {};
    if (!username) {
    newErrors.username = 'Username is required';
    isValid = false;
    } else if (username.length < 3) {
    newErrors.username = 'Username must be at least 3 characters long';
    isValid = false;
    }
    if (!password) {
    newErrors.password = 'Password is required';
    isValid = false;
    } else if (password.length < 6) {
    newErrors.password = 'Password must be at least 6 characters long';
    isValid = false;
    }
    setErrors(newErrors);
    return isValid;
};

const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
    console.log('Username:', username);
    console.log('Password:', password);
    }
};

return (
    <form onSubmit={handleSubmit} className="login-form">
    <h2>Iniciar Sesion</h2>
    <Input
        label="Username:"
        type="text"
        id="username"
        value={username}
        onChange={handleUsernameChange}
        error={errors.username}
    />
    <Input
        label="Password:"
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        error={errors.password}
    />
    <button type="submit">Login</button>
    </form>
);
};