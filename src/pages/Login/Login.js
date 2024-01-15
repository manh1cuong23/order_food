import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import qs from 'qs';

import classNames from 'classnames/bind';
import style from './Login.module.scss';

import Crumb from '../../components/Crumb/Crumb';

const cx = classNames.bind(style);

function Login() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const callApi = async (data) => {
        const response = await axios({
            method: 'get',
            url: 'https://6556cd15bd4bcef8b611a0fc.mockapi.io/api/clothes/users',
            data: qs.stringify({
                Email: data.email,
                PassWord: data.passWord,
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
        });

        const account = response.data.find((d) => d.email === data.Email);
        const passAcc = account.passWord === parseInt(data.Password);

        if (account && passAcc) {
            console.log('Login success!!!');
        } else {
            console.log('Email or PassWord incorrect!!!');
        }

        return response;
    };

    const handleLogin = async (data) => {
        try {
            const datas = await callApi(data);

            if (datas.data.Error === true) {
                console.log(`${datas.data.Title}`);
            }
            if (datas?.data?.Error === false) {
                console.log('Login success!');
                localStorage.setItem('Fashion', JSON.stringify(datas.data));
            }
        } catch (error) {
            console.log(`${error.message}`);
            console.log('ERROR');
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Crumb title="Login" />
            <form className={cx('form')} autoComplete="off" onSubmit={handleSubmit(handleLogin)}>
                <h2 className={cx('form-title')}>Login</h2>
                <div className={cx('form-group')}>
                    <label htmlFor="email" className={cx('form-label')}>
                        Email address *
                    </label>
                    <input
                        type="text"
                        className={cx('form-control')}
                        id="Email"
                        // value={email}
                        placeholder="Example: viet02092001@gmail.com"
                        autoComplete="new-password"
                        {...register('Email', {
                            required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            },
                        })}
                    />
                    {errors.Email && errors.Email.type === 'required' && (
                        <span className={cx('error-message')}>Email cannot be empty !</span>
                    )}
                    {errors.Email && errors.Email.type === 'pattern' && (
                        <span className={cx('error-message')}>Invalid email !</span>
                    )}
                </div>
                <div className={cx('form-group')}>
                    <label htmlFor="password" className={cx('form-label')}>
                        Password *
                    </label>
                    <input
                        type="password"
                        className={cx('form-control')}
                        id="PassWord"
                        // value={password}
                        placeholder="Enter password"
                        autoComplete="off"
                        {...register('Password', {
                            required: true,
                            minLength: 6,
                            maxLength: 30,
                        })}
                    />
                    {errors.Password && errors.Password.type === 'required' && (
                        <span className={cx('error-message')}>Password cannot be empty !</span>
                    )}
                </div>

                <div className={cx('form-group-option')}>
                    <div className={cx('gi-more')}>
                        <label className={cx('save-pass')} htmlFor="save-pass">
                            <span>Save Password</span>
                            <input type="checkbox" id="save-pass" />
                            <span className={cx('checkmark')}></span>
                        </label>
                        <a href="#!" className={cx('forget-pass')}>
                            Forget your Password
                        </a>
                    </div>
                </div>

                <button className={cx('submit')} type="submit">
                    SIGN IN
                </button>

                <div className={cx('switch')}>
                    <Link to="/register" className={cx('switch-login')}>
                        Or Create An Account
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
