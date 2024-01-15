import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import style from './Slider.module.scss';
import img1 from '~/assets/imgs/hero-1.jpg';
import img2 from '~/assets/imgs/hero-2.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import "./Swiper.css";

const cx = classNames.bind(style);

function Slider() {
    return (
        <>
            <Swiper className={cx('mySwiper')} pagination={true} navigation={true} autoplay={{delay: 5000, disableOnInteraction: true,}} modules={[Pagination, Navigation, Autoplay]}>
                <SwiperSlide>
                    {' '}
                    <div className={cx('slide-1')}>
                        <img className={cx('banner')} src={img1} alt="img1" />
                        <div className={cx('slider')}>
                            <div className={cx('slider-left')}>
                                <div className={cx('left-content')}>
                                    <span>BAG, KIDS</span>
                                    <h1 className={cx('title')}>BLACK FRIDAY</h1>
                                    <p className={cx('content')}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore
                                    </p>
                                    <Link to="/shop" className={cx('btn')}>
                                        SHOP NOW
                                    </Link>
                                </div>
                            </div>
                            <div className={cx('slider-right')}>
                                <div className={cx('circle-sale')}>
                                    <h2>SALE 50%</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {' '}
                    <div className={cx('slide-2')}>
                        <img className={cx('banner')} src={img2} alt="img1" />
                        <div className={cx('slider')}>
                            <div className={cx('slider-left')}>
                                <div className={cx('left-content')}>
                                    <span>BAG, KIDS</span>
                                    <h1 className={cx('title')}>BLACK FRIDAY</h1>
                                    <p className={cx('content')}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore
                                    </p>
                                    <Link to="/shop" className={cx('btn')}>
                                        SHOP NOW
                                    </Link>
                                </div>
                            </div>
                            <div className={cx('slider-right')}>
                                <div className={cx('circle-sale')}>
                                    <h2>SALE 50%</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Slider;
