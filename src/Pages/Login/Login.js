import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className='h-[800px]  flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email",
                                {
                                    required: "Email Address is required",
                                })
                            } />
                        {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            className="input input-bordered w-full max-w-xs"
                            {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, message: 'Password must be 6 character or longer' }
                                })} />
                        {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forget Password</span>
                        </label>
                    </div>
                    <input className='btn btn-accent w-full ' value="Login" type="submit" />
                </form>
                <p>New to doctors portal? <Link className='text-secondary' to='/signup'>create new account</Link></p>
                <div className='divider'>OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;