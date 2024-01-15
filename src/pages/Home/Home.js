import React from 'react';
import classNames from 'classnames/bind';
import style from './Home.module.scss';

import Slider from '~/components/Slider/Slider';
import BannerSection from '~/layouts/components/BannerSection/BannerSection';
import Product1 from '~/layouts/components/Product/Product1';
import Deal from '~/layouts/components/Deal/Deal';
import Product2 from '~/layouts/components/Product/Product2';
import SampleShow from '~/layouts/components/SampleShow/SampleShow';
import HomeBlog from '~/layouts/components/HomeBlog/HomeBlog';
import Swipper from '~/layouts/components/Swiper/Swiper';

const cx = classNames.bind(style);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Slider />
            <BannerSection />
            <Product1 />
            <Deal />
            <Product2 />
            <SampleShow />
            <HomeBlog />
        </div>
    );
}

export default Home;
