import './Login.css';
import { Input } from './Input';
import { useForm } from 'react-hook-form';

export const Login = () => {
const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm();

const onSubmit = (data) => {
    console.log('Username:', data.username);
    console.log('Password:', data.password);
};

return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
    <h2>Iniciar Sesion</h2>
    <Input
        label="Username:"
        type="text"
        id="username"
        register={register('username', {
        required: 'Username is required',
        minLength: {
            value: 3,
            message: 'Username must be at least 3 characters long',
    },
        })}
        error={errors.username?.message}
    />
    <Input
        label="Password:"
        type="password"
        id="password"
        register={register('password', {
        required: 'Password is required',
        minLength: {
            value: 6,
            message: 'Password must be at least 6 characters long',
        },
        })}
        error={errors.password?.message}
    />
    <button type="submit">Login</button>
    </form>
);
};

