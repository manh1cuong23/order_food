/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classNames from 'classnames/bind';
import style from './HomeBlog.module.scss';

import blog1 from '~/assets/imgs/latest-1.jpg';
import icon1 from '~/assets/imgs/icon-1.png';
import icon2 from '~/assets/imgs/icon-2.png';

import { FaRegComment } from 'react-icons/fa';
import { RiCalendarEventFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import blog from '~/pages/API/Blog.json';

const cx = classNames.bind(style);

function Product() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('section-title')}>
                    <div>From The Blog</div>
                </div>

                <div className={cx('blog-wrapper')}>
                    {blog.slice(0, 3).map((d, i) => (
                        <Link to={`/blogDetail/${d.id}`} key={i} className={cx('single-latest-blog')}>
                            <img src={d.img} alt="blog1" />
                            <div className={cx('latest-text')}>
                                <div className={cx('tag-list')}>
                                    <div className={cx('tag-item')}>
                                        <RiCalendarEventFill className={cx('calendar-icon')}></RiCalendarEventFill>
                                        <div>{d.date}</div>
                                    </div>
                                    <div className={cx('tag-item')}>
                                        <FaRegComment className={cx('comment-icon')}></FaRegComment>5
                                    </div>
                                </div>
                                <div>
                                    <h4>{d.title}</h4>
                                </div>
                                <p>{d.content_main} </p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className={cx('benefit-items')}>
                    <div className={cx('single-benefit')}>
                        <div className={cx('sb-icon')}>
                            <img src={icon1} alt="icon 1" />
                        </div>
                        <div className={cx('sb-text')}>
                            <h6>Free Shipping</h6>
                            <p>For all order over 99$</p>
                        </div>
                    </div>
                    <div className={cx('single-benefit')}>
                        <div className={cx('sb-icon')}>
                            <img src={icon2} alt="icon 2" />
                        </div>
                        <div className={cx('sb-text')}>
                            <h6>Delivery On Time</h6>
                            <p>If good have prolems</p>
                        </div>
                    </div>
                    <div className={cx('single-benefit')}>
                        <div className={cx('sb-icon')}>
                            <img src={icon1} alt="icon 1" />
                        </div>
                        <div className={cx('sb-text')}>
                            <h6>Secure Payment</h6>
                            <p>100% secure payment</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
