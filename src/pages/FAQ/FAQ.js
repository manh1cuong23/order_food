import React from 'react';
import classNames from 'classnames/bind';
import style from './FAQ.module.scss';
import Crumb from '~/components/Crumb/Crumb';

const cx = classNames.bind(style);

function FAQ() {
    return (
        <div className={cx('wrapper')}>
            <Crumb title="FAQs" />

            <div className={cx('container')}>
                <div className={cx('card')}>
                    <div className={cx('card-heading')}>
                        <a
                            href="#!"
                            className={cx('active collapsed')}
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="false"
                        >
                            Is There Anything I Should Bring?
                        </a>
                    </div>
                    <div id="collapseOne" className={cx('collapse')} data-parent="#accordionExample">
                        <div className={cx('card-body')}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cx('card')}>
                    <div className={cx('card-heading')}>
                        <a
                            href="#!"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            className={cx('collapsed')}
                        >
                            Where Can I Find Market Research Reports?
                        </a>
                    </div>
                    <div id="collapseTwo" className={cx('collapse')} data-parent="#accordionExample">
                        <div className={cx('card-body')}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cx('card')}>
                    <div className={cx('card-heading')}>
                        <a
                            href="#!"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            className={cx('collapsed')}
                        >
                            Where Can I Find The Wall Street Journal?
                        </a>
                    </div>
                    <div id="collapseThree" className={cx('collapse')} data-parent="#accordionExample">
                        <div className={cx('card-body')}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
