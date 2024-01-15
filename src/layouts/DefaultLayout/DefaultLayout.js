import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '~/layouts/components/Header/Header';
import Footer from '~/layouts/components/Footer/Footer';
import PartnerLogo from '~/layouts/components/PartnerLogo/PartnerLogo';
import Menu from '../components/Menu/Menu';
import MenuMobile from '../components/Menu/MenuMobile';
import { useState, useEffect } from 'react';
import ButtonScroll from '~/components/Button/ButtonScroll';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Menu />
            <MenuMobile />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <PartnerLogo />
            <Footer className={'new'} />
            <ButtonScroll />
        </div>
    );
}

export default DefaultLayout;
