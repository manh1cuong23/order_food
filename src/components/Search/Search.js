import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import * as searchServices from '~/services/searchServices';

import classNames from 'classnames/bind';
import style from './Search.module.scss';

import { MdOutlineExpandMore } from 'react-icons/md';
import { BiSearch, BiSearchAlt } from 'react-icons/bi';

import ProductItem from '../ProductItem/ProductItem';

const cx = classNames.bind(style);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const inputRef = useRef();

    // Call API
    const callApi = async () => {
        const response = await axios({
            method: 'get',
            url: `https://6556cd15bd4bcef8b611a0fc.mockapi.io/api/clothes/clothes`,
            type: 'json',
        });

        if (response.status === 200) {
            setSearchResult(response.data.filter((d) => d.name.includes(searchValue)));
        }
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(e.target.value);
        }
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    useEffect(() => {
        if (searchValue !== '') {
            callApi();
        } else {
            setShowResult(false);
            setSearchResult([]);
        }
    }, [searchValue]);

    return (
        <div className={cx('wrapper')}>
            <HeadlessTippy
                interactive={true}
                appendTo={() => document.body}
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <p className={cx('title')}>Product result</p>
                        {searchResult.map((d, i) => (
                            <ProductItem data={d} key={i} />
                        ))}
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <div className={cx('advanced-search')}>
                        <button type="button" className={cx('category-btn')}>
                            <span>All Categories</span>
                            <MdOutlineExpandMore />
                        </button>
                        <form action="#" className={cx('input-group')}>
                            <input
                                type="text"
                                placeholder="What do you need?"
                                // ref={inputRef}
                                value={searchValue}
                                onChange={handleChange}
                                onFocus={() => setShowResult(true)}
                            />
                            <button type="button">
                                <BiSearch className={cx('btn-search')} />
                            </button>
                        </form>
                    </div>
                    <BiSearchAlt className={cx('search-icon--small')} />
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
