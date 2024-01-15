import React from 'react';
import ClassNames from 'classnames';
import classNames from 'classnames/bind';
import style from './Crumb.module.scss';

import { IoHome } from 'react-icons/io5';

const cx = classNames.bind(style);

function Crumb({ className, text, ...props }) {
    return (
        <div className={ClassNames(style.wrapper, className)}>
            <div className={cx('crumb')}>
                <IoHome className={cx('icon')} />
                &nbsp;
                <a href="/#" className={cx('home')}>
                    Home &nbsp;
                </a>
                <span className={cx('page')}>
                    {' '}
                    {'>'} {props.title}
                </span>
                {text && <span className={cx('text')}> | {text}</span>}
            </div>
        </div>
    );
}

export default Crumb;
