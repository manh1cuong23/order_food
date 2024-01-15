/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classNames from 'classnames/bind';
import style from './SampleShow.module.scss';

import insta1 from '~/assets/imgs/insta-1.jpg';
import insta2 from '~/assets/imgs/insta-2.jpg';
import insta3 from '~/assets/imgs/insta-3.jpg';
import insta4 from '~/assets/imgs/insta-4.jpg';
import insta5 from '~/assets/imgs/insta-5.jpg';
import insta6 from '~/assets/imgs/insta-6.jpg';

import {TfiInstagram} from "react-icons/tfi"

const cx = classNames.bind(style);

function Product(children) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('insta-item')}>
                <img src={insta1} alt="sample" />
                <div className={cx('inside-text')}>
                    <TfiInstagram className={cx('ti-instagram')} />
                    <h5>
                        <a href="#">colorlib_Collection</a>
                    </h5>
                </div>
            </div>
            <div className={cx('insta-item')}>
                <img src={insta2} alt="sample" />
                <div className={cx('inside-text')}>
                    <TfiInstagram className={cx('ti-instagram')} />
                    <h5>
                        <a href="#">colorlib_Collection</a>
                    </h5>
                </div>
            </div>
            <div className={cx('insta-item')}>
                <img src={insta3} alt="sample" />
                <div className={cx('inside-text')}>
                    <TfiInstagram className={cx('ti-instagram')} />
                    <h5>
                        <a href="#">colorlib_Collection</a>
                    </h5>
                </div>
            </div>
            <div className={cx('insta-item')}>
                <img src={insta4} alt="sample" />
                <div className={cx('inside-text')}>
                    <TfiInstagram className={cx('ti-instagram')} />
                    <h5>
                        <a href="#">colorlib_Collection</a>
                    </h5>
                </div>
            </div>
            <div className={cx('insta-item')}>
                <img src={insta5} alt="sample" />
                <div className={cx('inside-text')}>
                    <TfiInstagram className={cx('ti-instagram')} />
                    <h5>
                        <a href="#">colorlib_Collection</a>
                    </h5>
                </div>
            </div>
            <div className={cx('insta-item')}>
                <img src={insta6} alt="sample" />
                <div className={cx('inside-text')}>
                    <TfiInstagram className={cx('ti-instagram')} />
                    <h5>
                        <a href="#">colorlib_Collection</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}

export default Product;
