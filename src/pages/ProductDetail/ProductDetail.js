import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import classNames from 'classnames/bind';
import style from './ProductDetail.module.scss';
import Crumb from '~/components/Crumb/Crumb';
import axios from 'axios';
import { Link } from 'react-router-dom';

import img1 from '~/assets/imgs/women-4.jpg';
import img from '~/assets/imgs/product.jpg';

import { AiFillStar, AiOutlineQuestionCircle, AiOutlineFileProtect } from 'react-icons/ai';
import { FaShippingFast } from 'react-icons/fa';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { TbArrowBackUp } from 'react-icons/tb';

const cx = classNames.bind(style);

function ProductDetail() {
    // Lay API san pham chi tiet
    const param = useParams();
    const [productDetail, setProductDetail] = useState([]);
    const [product, setProduct] = useState([]);

    const callApi = async () => {
        const response = await axios({
            method: 'get',
            url: `https://6556cd15bd4bcef8b611a0fc.mockapi.io/api/clothes/clothes`,
            type: 'json',
        });

        if (response.status === 200) {
            setProductDetail(response.data.find((d) => d.id === parseInt(param.id)));
            setProduct(response.data);
        }
    };

    useEffect(() => {
        callApi();
        // handleSubmit();
    }, []);

    // Tang - Giam san pham
    const [productQuantity, setProductQuantity] = useState(1);

    const handleQuantity = (e) => {
        setProductQuantity(e.target.value);
    };

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

    // Lay input value & day sang checkout
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate({
            pathname: '/checkOut',
            state: { productQuantity },
        });
    };

    console.log(productQuantity);

    return (
        <div className={cx('wrapper')}>
            {productDetail && (
                <div className={cx('container')}>
                    <Crumb title="Shop | Product Detail&nbsp;" text={productDetail.name} />
                    <div className={cx('header')}>
                        <div className={cx('left-header')}>
                            <div className={cx('imgs')}>
                                <div className={cx('img-main')}>
                                    <img src={img} alt="img-main" />
                                </div>
                                <div className={cx('img-extra')}>
                                    <img src={img} alt="img-extra" />
                                    <img src={img} alt="img-extra" />
                                    <img src={img} alt="img-extra" />
                                    <img src={img} alt="img-extra" />
                                    <img src={img} alt="img-extra" />
                                </div>
                            </div>
                        </div>
                        <div className={cx('right-header')}>
                            <div className={cx('product-name')}>
                                <span>{productDetail.name}</span>
                            </div>
                            <div className={cx('product-info')}>
                                <div className={cx('product-star')}>
                                    <span>4.9</span>
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </div>
                                <span className={cx('line')}>|</span>
                                <div className={cx('product-rate')}>
                                    <span>696</span>
                                    <span>Ratings</span>
                                </div>
                                <span className={cx('line')}>|</span>
                                <div className={cx('product-sold')}>
                                    <span>1k</span>
                                    <span>
                                        Sold
                                        <AiOutlineQuestionCircle />
                                    </span>
                                </div>
                            </div>
                            <div className={cx('product-price')}>
                                <div className={cx('cost')}>
                                    <span>{parseFloat(productDetail.price)} đ</span>
                                </div>
                                <div className={cx('cost-sale')}>
                                    <span>
                                        {parseFloat(productDetail.sale) === 0
                                            ? parseFloat(productDetail.price)
                                            : (parseFloat(productDetail.price) * parseFloat(productDetail.sale)) /
                                              100}{' '}
                                        đ
                                    </span>
                                </div>
                            </div>
                            <div className={cx('product-ship')}>
                                <div className={cx('ship-title')}>
                                    <span>Shipping</span>
                                </div>
                                <div className={cx('ship-info')}>
                                    <FaShippingFast />
                                    <span>Free Shipping</span>
                                </div>
                            </div>
                            <div className={cx('product-quantity')}>
                                <div className={cx('quantity-title')}>
                                    <span>Quantity</span>
                                </div>
                                <div className={cx('quantity')}>
                                    <div className={cx('pro-qty')}>
                                        <span className={cx('qtybtn')} onClick={(e) => handleReduce(e)}>
                                            -
                                        </span>
                                        <input
                                            type="text"
                                            value={productQuantity}
                                            readOnly={true}
                                            onChange={handleQuantity}
                                        />
                                        <span className={cx('qtybtn')} onClick={(e) => handleIncrease(e)}>
                                            +
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('purchase')}>
                                <div className={cx('add')}>
                                    <BsFillCartPlusFill />
                                    <span>Add To Cart</span>
                                </div>
                                <div className={cx('buy')}>
                                    <Link to={`/checkOut/${productDetail.id}`}>Buy Now</Link>
                                </div>
                            </div>
                            <div className={cx('faq')}>
                                <div className={cx('return')}>
                                    <TbArrowBackUp />
                                    <span>7 Days Return</span>
                                </div>
                                <div className={cx('authentic')}>
                                    <AiOutlineFileProtect />
                                    <span>100% Authentic</span>
                                </div>
                                <div className={cx('shipping')}>
                                    <FaShippingFast />
                                    <span>Free Shipping</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('detail')}>
                        <h4>Product Specifications</h4>
                        <div className={cx('product-details')}>
                            <div className={cx('product-detail')}>
                                <label htmlFor="" className={cx('detail-title')}>
                                    Category
                                </label>
                                <div className="detail-info">{productDetail.type}</div>
                            </div>
                            <div className={cx('product-detail')}>
                                <label htmlFor="" className={cx('detail-title')}>
                                    Name
                                </label>
                                <div className="detail-info">{productDetail.name}</div>
                            </div>
                            <div className={cx('product-detail')}>
                                <label htmlFor="" className={cx('detail-title')}>
                                    Brand
                                </label>
                                <div className="detail-info">{productDetail.brand}</div>
                            </div>
                            <div className={cx('product-detail')}>
                                <label htmlFor="" className={cx('detail-title')}>
                                    Manufacturer
                                </label>
                                <div className="detail-info">China</div>
                            </div>
                            <div className={cx('product-detail')}>
                                <label htmlFor="" className={cx('detail-title')}>
                                    Size
                                </label>
                                <div className="detail-info">{productDetail.size}</div>
                            </div>
                            <div className={cx('product-detail')}>
                                <label htmlFor="" className={cx('detail-title')}>
                                    Color
                                </label>
                                <div className="detail-info">{productDetail.color}</div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('describe')}>
                        <h4>Product Description</h4>
                        <span className={cx('des-name')}>{productDetail.name}</span>
                        {productDetail.description &&
                            productDetail.description.split('|').map((d, i) => (
                                <p key={i}>
                                    {'- '}
                                    {d}
                                </p>
                            ))}
                    </div>
                    <div className={cx('appraise')}></div>
                    <div className={cx('more')}>
                        <h4>From The Same Brand</h4>
                        <div className={cx('product-mores')}>
                            {product
                                .filter((d) => d.type === productDetail.type)
                                .slice(0, 4)
                                .map((i) => (
                                    <Link to={`/productDetail/${i.id}`} className={cx('product-more')} key={i.id}>
                                        <div className={cx('img')}>
                                            <img src={img1} alt="product" />
                                        </div>
                                        <div className={cx('content')}>
                                            <span className={cx('content-name')}>{i.name}</span>
                                            <div className={cx('content-price')}>
                                                <span className={cx('price-sale--more')}>
                                                    {parseFloat(i.sale) === 0
                                                        ? parseFloat(i.price)
                                                        : (parseFloat(i.price) * parseFloat(i.sale)) / 100}
                                                    {'đ'}
                                                </span>
                                                <span className={cx('price-more')}>{parseFloat(i.price)}đ</span>
                                            </div>
                                        </div>
                                        {i.sale && i.sale !== '0' && i.sale !== 'null' && (
                                            <div className={cx('product-sale')}>SALE</div>
                                        )}
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductDetail;
