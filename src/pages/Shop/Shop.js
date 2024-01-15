import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from './Shop.module.scss';
import axios from 'axios';

import Filter from '~/components/Filter/Filter';
import Product from '~/layouts/components/Product/Product';
import Crumb from '~/components/Crumb/Crumb';
import Pagination from '~/components/Pagination/Pagination';

const cx = classNames.bind(style);

function Shop() {
    // Pagination
    const [page, setPage] = useState(1);
    const lastIndex = page * 9;
    const firstIndex = lastIndex - 9;

    // Filter product
    const [categories, setCategories] = useState('');
    const [price, setPrice] = useState('');
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const [tag, setTag] = useState('');

    const handleFilter = () => {
        // let updateProduct = productTag([]);

        if (categories) {
        }
    };

    // Call API
    const [productTag, setProductTag] = useState([]);
    const [productPer, setProductPer] = useState([]);

    const callApi = async () => {
        const response = await axios({
            method: 'get',
            url: `https://6556cd15bd4bcef8b611a0fc.mockapi.io/api/clothes/clothes`,
            type: 'json',
        });

        if (response.status === 200) {
            setProductTag(response.data);
        }

        console.log(response.data);
    };

    useEffect(() => {
        callApi();
    }, []);

    // Sort Product
    const [sort, setSort] = useState();
    const sortProduct = (Data) => {
        if (sort === 'Ascending') {
            return Data.sort((a, b) => {
                if (
                    (a.sale === '0' ? a.price : (a.price * a.sale) / 100) <
                    (b.sale === '0' ? b.price : (b.price * b.sale) / 100)
                ) {
                    return -1;
                }
                if (
                    (a.sale === '0' ? a.price : (a.price * a.sale) / 100) >
                    (b.sale === '0' ? b.price : (b.price * b.sale) / 100)
                ) {
                    return 1;
                }
                return 0;
            });
        }
        if (sort === 'Descending') {
            return Data.sort((a, b) => {
                if (
                    (a.sale === '0' ? a.price : (a.price * a.sale) / 100) <
                    (b.sale === '0' ? b.price : (b.price * b.sale) / 100)
                ) {
                    return 1;
                }
                if (
                    (a.sale === '0' ? a.price : (a.price * a.sale) / 100) >
                    (b.sale === '0' ? b.price : (b.price * b.sale) / 100)
                ) {
                    return -1;
                }
                return 0;
            });
        }

        if (sort === 'None') {
            sortByName(Data);
            return Data;
        }
        return sortByName(Data);
    };

    function sortByName(arr) {
        return arr.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
    }

    return (
        <div className={cx('wrapper')}>
            <Crumb title="Shop" />
            <div className={cx('content')}>
                <div className={cx('filter')}>
                    <Filter
                        isCategory
                        isPrice
                        isColor
                        isSize
                        isTags
                        setCategories={setCategories}
                        setPrice={setPrice}
                        setColor={setColor}
                        setSize={setSize}
                        setTag={setTag}
                    />
                </div>
                {productTag && (
                    <div className={cx('right-shop')}>
                        {categories !== '' && price !== '' && color !== '' && size !== '' && tag !== '' && (
                            <div className={cx('list-active')}>
                                {categories !== '' && <p>Category : {categories} /</p>}
                                {price !== '' && <p>Price : {price} /</p>}
                                {color !== '' && <p>Color : {color} /</p>}
                                {size !== '' && <p>Size : {size} /</p>}
                                {tag !== '' && <p>Tag : {tag} /</p>}
                            </div>
                        )}
                        <div className={cx('sort')}>
                            <select className={cx('sorting')} onChange={(e) => setSort(e.target.value)}>
                                <option value="None">Default Sorting</option>
                                <option value="Ascending">Sort by Price Ascending</option>
                                <option value="Descending">Sort by Price Descending</option>
                            </select>
                            <div className={cx('product-quantity')}>
                                <p>
                                    Show {(page - 1) * 9 + 1} -{' '}
                                    {(page - 1) * 9 + productTag.slice(firstIndex, lastIndex).length} Of{' '}
                                    {productTag.length} Product
                                </p>
                            </div>
                        </div>

                        <div className={cx('product')}>
                            {sortProduct(productTag)
                                .slice(firstIndex, lastIndex)
                                .map((d, i) => (
                                    <Product data={d} key={i} />
                                ))}
                        </div>

                        <Pagination
                            totalProduct={productTag.length}
                            productPerPage={9}
                            setPage={setPage}
                            pageIndex={page}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Shop;
