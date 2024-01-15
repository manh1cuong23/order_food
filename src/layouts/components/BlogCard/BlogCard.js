import React from 'react';
import classNames from 'classnames/bind';
import style from './BlogCard.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function BlogCard({ data }) {

    return (
        <div className={cx('wrapper')} key={data.id}>
            <Link to={`/blogDetail/${data.id}`}>
                <div className={cx('img')}>
                    <img src={data.img} alt="blog" />
                </div>
                <div className={cx('highlight')}>
                    <p>{data.title}</p>
                </div>
                <div className={cx('timeline')}>
                    <p>TRAVEL</p>
                    <span>&nbsp;- {data.date}</span>
                </div>
            </Link>
        </div>
    );
}

export default BlogCard;
