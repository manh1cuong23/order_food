import React, { useEffect } from 'react';
import { useState } from 'react';

import classNames from 'classnames/bind';
import style from './Product1.module.scss';

import img1 from '~/assets/imgs/women-large.jpg';

import SliderProduct from '~/layouts/components/Product/SliderProduct/SliderProduct';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import axios from 'axios';

const cx = classNames.bind(style);

const listProduct = ['Clothing', 'HandBag', 'Shoes', 'Accessories'];

function Product1(props) {
    const [productActive, setProductActive] = useState(0);

    const [product, setProduct] = useState('Clothing');

    const [productTag, setProductTag] = useState([]);

    const callApi = async () => {
        const response = await axios({
            method: 'get',
            url: `https://6556cd15bd4bcef8b611a0fc.mockapi.io/api/clothes/clothes`,
            type: 'json',
        });

        if (response.status === 200) {
            setProductTag(response.data.filter((p) => p.person.includes('Women')));
        }
    };

    useEffect(() => {
        callApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('product')}>
                <div className={cx('product-left')}>
                    <img src={img1} alt="women" />
                    <div className={cx('intro')}>Women's</div>
                    <span className={cx('more')}>Discover More</span>
                </div>
                <div className={cx('product-right')}>
                    <div className={cx('right-option')}>
                        {listProduct.map((d, i) => (
                            <span
                                className={cx('btn', productActive === i ? 'active' : null)}
                                onClick={() => {
                                    setProductActive(i);
                                    setProduct(d);
                                }}
                                key={i}
                            >
                                {d}
                            </span>
                        ))}
                    </div>
                    <div className={cx('right-content')}>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            navigation={true}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{ delay: 5000, disableOnInteraction: true }}
                            modules={[Navigation, Autoplay]}
                            className="mySwiper"
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                600: {
                                    slidesPerView: 2,
                                },
                                865: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {productTag
                                .filter((t) => t.type === product)
                                .map((d, i) => (
                                    <SwiperSlide key={i}>
                                        <SliderProduct data={d} />
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product1;
