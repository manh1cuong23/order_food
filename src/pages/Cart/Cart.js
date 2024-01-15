import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ClassNames from 'classnames';
import classNames from 'classnames/bind';
import style from './Cart.module.scss';
import Crumb from '~/components/Crumb/Crumb';

import img1 from '~/assets/imgs/product-1.jpg';
import { TfiClose } from 'react-icons/tfi';

const cx = classNames.bind(style);

function Cart({ className }) {
    const [product, setProduct] = useState();
    const [productQuantity, setProductQuantity] = useState(1);

    const handleIncrease = () => {
        setProductQuantity(productQuantity + 1);
    };

    const handleReduce = () => {
        if (productQuantity === 1) {
            setProductQuantity(1);
        } else {
            setProductQuantity(productQuantity - 1);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Crumb title="Shopping Cart" />
            <section className={cx('cart')}>
                <div className={cx('container')}>
                    <div className={cx('cart-table')}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>
                                        <TfiClose className={cx('delete')} />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={cx('cart-pic')}>
                                        <img src={img1} alt="" />
                                    </td>
                                    <td className={cx('cart-title')}>
                                        <h5>Pure Pineapple</h5>
                                    </td>
                                    <td className={cx('p-price')}>$60.00</td>
                                    <td className={cx('qua-col')}>
                                        <div className={cx('quantity')}>
                                            <div className={cx('pro-qty')}>
                                                <span className={cx('qtybtn')} onClick={(e) => handleReduce(e)}>
                                                    -
                                                </span>
                                                <input
                                                    type="text"
                                                    readOnly={true}
                                                    value={productQuantity}
                                                    onChange={(e) => setProductQuantity(e.target.value)}
                                                />
                                                <span className={cx('qtybtn')} onClick={(e) => handleIncrease(e)}>
                                                    +
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={cx('total-price')}>$60.00</td>
                                    <td className={cx('close-td')}>
                                        <TfiClose className={cx('delete')} />
                                    </td>
                                </tr>
                                <tr>
                                    <td className={cx('cart-pic')}>
                                        <img src={img1} alt="" />
                                    </td>
                                    <td className={cx('cart-title')}>
                                        <h5>Pure Pineapple</h5>
                                    </td>
                                    <td className={cx('p-price')}>$60.00</td>
                                    <td className={cx('qua-col')}>
                                        <div className={cx('quantity')}>
                                            <div className={cx('pro-qty')}>
                                                <span className={cx('qtybtn')} onClick={(e) => handleReduce(e)}>
                                                    -
                                                </span>
                                                <input
                                                    type="text"
                                                    readOnly={true}
                                                    value={productQuantity}
                                                    onChange={(e) => setProductQuantity(e.target.value)}
                                                />
                                                <span className={cx('qtybtn')} onClick={(e) => handleIncrease(e)}>
                                                    +
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={cx('total-price')}>$60.00</td>
                                    <td className={cx('close-td')}>
                                        <TfiClose className={cx('delete')} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={cx('footer')}>
                        <div>
                            <div className={cx('cart-buttons')}>
                                <Link to="/shop" className={cx('continue-shop')}>
                                    Continue shopping
                                </Link>
                                <Link to="#!" className={cx('up-cart')}>
                                    Update cart
                                </Link>
                            </div>
                            <div className={cx('discount-coupon')}>
                                <h6>Discount Codes</h6>
                                <form action="#" className={cx('coupon-form')}>
                                    <input type="text" placeholder="Enter your codes" />
                                    <button type="submit" className={cx('coupon-btn')}>
                                        Apply
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className={cx('proceed-checkout')}>
                            <ul>
                                <li className={cx('subtotal')}>
                                    Subtotal <span>$240.00</span>
                                </li>
                                <li className={cx('cart-total')}>
                                    Total <span>$240.00</span>
                                </li>
                            </ul>
                            <Link to="/checkout" className={cx('proceed-btn')}>
                                PROCEED TO CHECK OUT
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Cart;
