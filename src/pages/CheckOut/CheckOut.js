import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';

import classNames from 'classnames/bind';
import style from './CheckOut.module.scss';
import Crumb from '~/components/Crumb/Crumb';

const cx = classNames.bind(style);

function CheckOut() {
    // const location = useLocation();
    // const inputValue = location.state.productQuantity;

    // console.log(location);
    // console.log(inputValue);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const param = useParams();

    const [productCheckOut, setProductCheckOut] = useState([]);
    // const [cartCheckOut, setCartCheckOut] = useState([]);

    const callApi = async () => {
        const response = await axios({
            method: 'get',
            url: `https://6556cd15bd4bcef8b611a0fc.mockapi.io/api/clothes/clothes`,
            type: 'json',
        });

        if (response.status === 200) {
            setProductCheckOut(response.data.find((d) => d.id === parseInt(param.id)));
            // setCartCheckOut(response.data)
        }
    };

    useEffect(() => {
        callApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Crumb title="Check Out" />
            <div className={cx('container')}>
                <form action="#" className={cx('checkout-form')} onSubmit={handleSubmit()}>
                    <div className={cx('row')}>
                        <div className={cx('form-left')}>
                            <div className={cx('checkout-content')}>
                                <Link to="/login" className={cx('content-btn')}>
                                    Click Here To Login
                                </Link>
                            </div>
                            <h4 className={cx('bill-title')}>Billing CheckOuts</h4>
                            <div className={cx('form-group')}>
                                <label htmlFor="fullName" className={cx('form-label')}>
                                    Full Name <span>*</span>
                                </label>
                                <input
                                    type="text"
                                    className={cx('form-control')}
                                    {...register('FullName', {
                                        required: true,
                                    })}
                                />
                                {errors.FullName && errors.FullName.type === 'required' && (
                                    <span className={cx('error-message')}>FullName cannot be empty !</span>
                                )}
                            </div>
                            <div className={cx('form-group')}>
                                <label htmlFor="email" className={cx('form-label')}>
                                    Email <span>*</span>
                                </label>
                                <input
                                    type="text"
                                    className={cx('form-control')}
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
                                <label htmlFor="phone" className={cx('form-label')}>
                                    Phone <span>*</span>
                                </label>
                                <input
                                    type="text"
                                    className={cx('form-control')}
                                    {...register('PhoneNumber', {
                                        required: true,
                                        maxLength: 15,
                                        minLength: 9,
                                        valueAsNumber: false,
                                    })}
                                />
                                {errors.PhoneNumber && errors.PhoneNumber.type === 'required' && (
                                    <span className={cx('error-message')}>Phone number cannot be empty !</span>
                                )}
                                {errors.PhoneNumber && errors.PhoneNumber.type === 'maxLength' && (
                                    <span className={cx('error-message')}>Invalid phone number</span>
                                )}
                                {errors.PhoneNumber && errors.PhoneNumber.type === 'minLength' && (
                                    <span className={cx('error-message')}>Invalid phone number</span>
                                )}
                            </div>
                            <div className={cx('form-group')}>
                                <label htmlFor="country" className={cx('form-label')}>
                                    Country <span>*</span>
                                </label>
                                <input
                                    type="text"
                                    className={cx('form-control')}
                                    {...register('Country', {
                                        required: true,
                                    })}
                                />
                                {errors.Country && errors.Country.type === 'required' && (
                                    <span className={cx('error-message')}>Country cannot be empty !</span>
                                )}
                            </div>
                            <div className={cx('form-group')}>
                                <label htmlFor="city" className={cx('form-label')}>
                                    City <span>*</span>
                                </label>
                                <input
                                    type="text"
                                    className={cx('form-control')}
                                    {...register('City', {
                                        required: true,
                                    })}
                                />
                                {errors.City && errors.City.type === 'required' && (
                                    <span className={cx('error-message')}>City cannot be empty !</span>
                                )}
                            </div>
                            <div className={cx('form-group')}>
                                <label htmlFor="address" className={cx('form-label')}>
                                    Street Address <span>*</span>
                                </label>
                                <input
                                    type="text"
                                    className={cx('form-control')}
                                    {...register('Address', {
                                        required: true,
                                    })}
                                />
                                {errors.Address && errors.Address.type === 'required' && (
                                    <span className={cx('error-message')}>Address cannot be empty !</span>
                                )}
                            </div>
                            <div className={cx('form-group')}>
                                <label htmlFor="address" className={cx('form-label')}>
                                    Note
                                </label>
                                <textarea type="text" className={cx('form-note')} />
                            </div>
                        </div>
                        <div className={cx('form-right')}>
                            <div className={cx('checkout-content')}>
                                <input className={cx('content-btn')} placeholder="Enter Your Coupon Code" />
                            </div>
                            <h4 className={cx('bill-title')}>Your Order</h4>
                            <div className={cx('order-total')}>
                                {productCheckOut && (
                                    <ul className={cx('order-table')}>
                                        <li>
                                            Product <span>Total</span>
                                        </li>
                                        <li className={cx('fw-normal')}>
                                            {productCheckOut.name}&emsp; x 1{' '}
                                            <span>
                                                {' '}
                                                {parseFloat(productCheckOut.sale) === 0
                                                    ? parseFloat(productCheckOut.price)
                                                    : (parseFloat(productCheckOut.price) *
                                                          parseFloat(productCheckOut.sale)) /
                                                      100}{' '}
                                                đ
                                            </span>
                                        </li>
                                        <li className={cx('total-price')}>
                                            Total{' '}
                                            <span>
                                                {' '}
                                                {parseFloat(productCheckOut.sale) === 0
                                                    ? parseFloat(productCheckOut.price) * 2
                                                    : ((parseFloat(productCheckOut.price) *
                                                          parseFloat(productCheckOut.sale)) /
                                                          100) *
                                                      2}{' '}
                                                đ
                                            </span>
                                        </li>
                                    </ul>
                                )}

                                <div className={cx('payment-check')}>
                                    <div className={cx('pc-item')}>
                                        <label htmlFor="pc-cod">
                                            COD
                                            <input type="checkbox" id="pc-cod" />
                                            <span className={cx('checkmark')}></span>
                                        </label>
                                    </div>
                                    <div className={cx('pc-item')}>
                                        <label htmlFor="pc-atm" style={{ color: 'red' }}>
                                            ATM/ Visa ( Developing more)
                                            <input type="hidden" id="pc-atm" />
                                            <span className={cx('checkmark')} style={{ display: 'none' }}></span>
                                        </label>
                                    </div>
                                    <div className={cx('pc-item')}>
                                        <label htmlFor="pc-momo" style={{ color: 'red' }}>
                                            Momo ( Developing more)
                                            <input type="hidden" id="pc-momo" />
                                            <span className={cx('checkmark')} style={{ display: 'none' }}></span>
                                        </label>
                                    </div>
                                </div>

                                <div className={cx('order-btn')}>
                                    <button type="submit" className={cx('place-btn')}>
                                        Place Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CheckOut;
