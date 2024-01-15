import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import classNames from 'classnames/bind';
import style from './Footer.module.scss';

import { AiOutlineHeart } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram, BsTwitter, BsPinterest } from 'react-icons/bs';

import paymentImg from '~/assets/imgs/payment-method.png';
import logoFooter from '~/assets/imgs/footer-logo.png';

const cx = classNames.bind(style);

function Footer({ className }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    return (
        <footer className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content-inner')}>
                    <div className={cx('footer-left')}>
                        <div className={cx('footer-logo')}>
                            <Link to="/">
                                <img src={logoFooter} alt="" />
                            </Link>
                        </div>
                        <ul>
                            <li>Address: 60-49 Road 11378 New York</li>
                            <li>Phone: +65 11.188.888</li>
                            <li>Email: hello.colorlib@gmail.com</li>
                        </ul>
                        <div className={cx('footer-social')}>
                            <a
                                href="https://www.facebook.com/profile.php?id=100057195830094&mibextid=LQQJ4d"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaFacebookF />
                            </a>
                            <a href="#!">
                                <BsInstagram />
                            </a>
                            <a href="#!">
                                <BsTwitter />
                            </a>
                            <a href="#!">
                                <BsPinterest />
                            </a>
                        </div>
                    </div>

                    <div className={cx('footer-widget', 'element-left')}>
                        <h5>Information</h5>
                        <ul>
                            <li>
                                <Link to="/blog">About Us</Link>
                            </li>
                            <li>
                                <Link to="/checkout">Checkout</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/faq">FAQ</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={cx('footer-widget')}>
                        <h5>My Account</h5>
                        <ul>
                            <li>
                                <Link to="/profile">My Account</Link>
                            </li>
                            <li>
                                <Link to="/cart">Shopping Cart</Link>
                            </li>
                            <li>
                                <Link to="/favourite">Favourite</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={cx('newslatter-item')}>
                        <h5>Join Our Newsletter Now</h5>
                        <p>Get E-mail updates about our latest shop and special offers.</p>
                        <form action="#" className={cx('subscribe-form')} onSubmit={handleSubmit()}>
                            <div className={cx('form-group')}>
                                <input
                                    className={cx('mail-input')}
                                    type="text"
                                    placeholder="Enter Your Mail"
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
                            <button className={cx('subscribe-btn')} type="submit">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* coppyright ----------------------------------------- */}
            <div className={cx('copyright')}>
                <div className={cx('copyright-inner')}>
                    <div className={cx('copyright-text')}>
                        Copyright ©<script>document.write(new Date().getFullYear());</script>2023 All rights reserved |
                        This website is made with <AiOutlineHeart className={cx('copyright-heart-icon')} /> by
                        <a className={cx('footer-coppyright-link')} href="http://localhost:3000/">
                            {' Fashi'}
                        </a>
                    </div>
                    {/* <div className="payment-pic">
                        <img src={paymentImg} alt="payment-img" />
                    </div> */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
