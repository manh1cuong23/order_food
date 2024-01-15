import React from 'react';
import ClassNames from 'classnames';
import classNames from 'classnames/bind';
import style from './Button.module.scss';

const cx = classNames.bind(style);

function Button({ className, onClick, ...props }) {
    return (
        <div className={ClassNames(style.wrapper, className)} onClick={onClick}>
            <div className={cx('button')}>
                <span className={cx('page')}>{props.title}</span>
                {/* {text && <span className={cx('text')}> | {text}</span>} */}
            </div>
        </div>
    );
}

export default Button;
