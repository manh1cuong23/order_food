import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import qs from 'qs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classNames from 'classnames/bind';
import style from './ForgetPass.module.scss';
import { HttpPost } from '../API/useAuth/auth.api';
import Crumb from '~/components/Crumb/Crumb';

const cx = classNames.bind(style);

function ForgetPass() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

   

    const handleReset = async (data) => {
        const res = await HttpPost('/auth/reset-password', data)
        if(res) {
            if(res.data.statuscode === 200) {
                toast.success(res.data.message, {
                    pauseOnHover: false,
                });
            } else {
                toast.error(res.data.message, {
                    pauseOnHover: false,
                })
            }
        }
    };
    return (
        <div className={cx('wrapper')}>
            <Crumb title="Register" />
            <form className={cx('form')} onSubmit={handleSubmit(handleReset)}>
                <h2 className={cx('form-title')}>Reset Password</h2>
                <div className={cx('form-group')}>
                    <label htmlFor="username" className={cx('form-label')}>
                        Email address *
                    </label>
                    <input
                        type="text"
                        className={cx('form-control')}
                        placeholder="Example: abc@gmail.com"
                        {...register('username', {
                            required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            },
                        })}
                    />
                    {errors.username && errors.username.type === 'required' && (
                        <span className={cx('error-message')}>Email cannot be empty !</span>
                    )}
                    {errors.username && errors.username.type === 'pattern' && (
                        <span className={cx('error-message')}>Invalid email !</span>
                    )}
                </div>
                <div className={cx('form-group')}>
                    <label htmlFor="newPassword" className={cx('form-label')}>
                        Reset Password *
                    </label>
                    <input
                        type="password"
                        className={cx('form-control')}
                        placeholder="Entered reset password"
                        autoComplete="on"
                        {...register('newPassword', {
                            required: true,
                            minLength: 6,
                            maxLength: 30,
                        })}
                    />
                    {errors.newPassword && errors.newPassword.type === 'required' && (
                        <span className={cx('error-message')}>Password cannot be empty !</span>
                    )}
                    {errors.newPassword && errors.newPassword.type === 'minLength' && (
                        <span className={cx('error-message')}>Weak password</span>
                    )}
                    {errors.newPassword && errors.newPassword.type === 'maxLength' && (
                        <span className={cx('error-message')}>Password up to 30 characters</span>
                    )}
                </div>
                <div className={cx('form-group')}>
                    <label htmlFor="confirnPass" className={cx('form-label')}>
                        Confirm Password *
                    </label>
                    <input
                        type="password"
                        className={cx('form-control')}
                        placeholder="Re-entered password"
                        autoComplete="on"
                        {...register('confirnPass', {
                            required: true,
                            validate: (val) => {
                                if (watch('newPassword') !== val) {
                                    return 'Your passwords does not match!';
                                }
                            },
                        })}
                    />
                    {errors.confirnPass && errors.confirnPass.type === 'required' && (
                        <span className={cx('error-message')}>Password again can not be empty !</span>
                    )}
                    {errors.confirnPass && errors.confirnPass.type === 'validate' && (
                        <span className={cx('error-message')}>Confirm password does not match !</span>
                    )}
                </div>

                <button className={cx('submit')}>RESET PASSWORD</button>

                <div className={cx('switch')}>
                    <Link to="/login" className={cx('switch-login')}>
                        Or Login
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default ForgetPass;
