import React from 'react';

import classNames from 'classnames/bind';
import style from './Pagination.module.scss';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function Pagination({ totalProduct, productPerPage, setPage, pageIndex }) {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className={cx('wrapper')}>
            <Link
                href="#list"
                disabled={pageIndex === 1}
                className={cx('btn-icon', pageIndex === 1 ? 'dis' : null)}
                onClick={() => setPage((prev) => prev - 1)}
            >
                <MdKeyboardArrowLeft />
            </Link>

            {pages.map((index) => (
                <Link
                    href="#list"
                    key={index}
                    className={cx('button', pageIndex === index ? 'active' : null)}
                    onClick={() => setPage(index)}
                >
                    {index}
                </Link>
            ))}

            <Link
                href="#list"
                disabled={pageIndex === pages.length}
                className={cx('btn-icon', pageIndex === pages.length ? 'dis' : null)}
                onClick={() => setPage((prev) => prev + 1)}
            >
                <MdKeyboardArrowRight />
            </Link>
        </div>
    );
}

export default Pagination;
