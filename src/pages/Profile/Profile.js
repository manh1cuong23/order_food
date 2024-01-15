import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import style from './Profile.module.scss';

import img1 from '~/assets/imgs/avatar.png';
import general1 from '~/assets/icons/profile.svg';
import general2 from '~/assets/icons/location.svg';
import general3 from '~/assets/icons/message-2.svg';
import general4 from '~/assets/icons/download.svg';
import general5 from '~/assets/icons/heart.svg';
import general6 from '~/assets/icons/gift-2.svg';
import general7 from '~/assets/icons/shield.svg';
import general8 from '~/assets/icons/info.svg';
import general9 from '~/assets/icons/danger.svg';
import card1 from '~/assets/imgs/card/plane-bg.svg';
import card2 from '~/assets/imgs/card/plane.svg';
import card3 from '~/assets/icons/plus.svg';
import info1 from '~/assets/icons/message-2.svg';
import info2 from '~/assets/icons/calling.svg';
import info3 from '~/assets/icons/location.svg';

const cx = classNames.bind(style);

function Profile() {
    return (
        <section className={cx('profile')}>
            <div className={cx('profile-general')}>
                <div className={cx('profile-sidebar')}>
                    <div className={cx('profile-user')}>
                        <img src={img1} alt="" className={cx('profile-user__avatar')} />
                        <h1 className={cx('profile-user__name')}>Nguyen Viet</h1>
                        <p className={cx('profile-user__desc')}>Registered: 17th May 2022</p>
                    </div>

                    <div className={cx('profile-menu')}>
                        <h3 className={cx('profile-menu__title')}>Manage Account</h3>
                        <ul className={cx('profile-menu__list')}>
                            <li>
                                <Link href="./edit-personal-info.html" className={cx('profile-menu__link')}>
                                    <span className={cx('profile-menu__icon')}>
                                        <img src={general1} alt="" className={cx('icon')} />
                                    </span>
                                    Personal info
                                </Link>
                            </li>
                            <li>
                                <Link href="#!" className={cx('profile-menu__link')}>
                                    <span className={cx('profile-menu__icon')}>
                                        <img src={general2} alt="" className={cx('icon')} />
                                    </span>
                                    Addresses
                                </Link>
                            </li>
                            <li>
                                <Link href="#!" className={cx('profile-menu__link')}>
                                    <span className={cx('profile-menu__icon')}>
                                        <img src={general3} alt="" className={cx('icon')} />
                                    </span>
                                    Communications & privacy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className={cx('profile-menu')}>
                        <h3 className={cx('profile-menu__title')}>My items</h3>
                        <ul className={cx('profile-menu__list')}>
                            <li>
                                <Link href="./edit-personal-info.html" className={cx('profile-menu__link')}>
                                    <span className={cx('profile-menu__icon')}>
                                        <img src={general4} alt="" className={cx('icon')} />
                                    </span>
                                    Reorder
                                </Link>
                            </li>
                            <li>
                                <Link href="#!" className={cx('profile-menu__link')}>
                                    <span className={cx('profile-menu__icon')}>
                                        <img src={general5} alt="" className={cx('icon')} />
                                    </span>
                                    Lists
                                </Link>
                            </li>
                            <li>
                                <Link href="#!" className={cx('profile-menu__link')}>
                                    <span className={cx('profile-menu__icon')}>
                                        <img src={general6} alt="" className={cx('icon')} />
                                    </span>
                                    Registries
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className={cx('profile-menu')}>
                        <h3 className={cx('profile-menu__title')}>Subscriptions & plans</h3>
                        <ul className={cx('profile-menu__list')}>
                            <li>
                                <Link href="./edit-personal-info.html" className={cx('profile-menu__link')}>
                                    <span className={cx('profile-menu__icon')}>
                                        <img src={general7} alt="" className={cx('icon')} />
                                    </span>
                                    Protection plans
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className={cx('profile-menu')}>
                        <h3 className={cx('profile-menu__title')}>Customer Service</h3>
                        <ul className={cx('profile-menu__list')}>
                            <li>
                                <Link href="./edit-personal-info.html" className={cx('profile-menu__link')}>
                                    <span className={cx('profile-menu__icon')}>
                                        <img src={general8} alt="" className={cx('icon')} />
                                    </span>
                                    Help
                                </Link>
                            </li>
                            <li>
                                <Link href="#!" className={cx('profile-menu__link')}>
                                    <span className={cx('profile-menu__icon')}>
                                        <img src={general9} alt="" className={cx('icon')} />
                                    </span>
                                    Terms of Use
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cx('wallet')}>
                <div className={cx('wallet-info')}>
                    <h2 className={cx('wallet-heading')}>My Wallet</h2>
                    <p className={cx('wallet-desc')}>Payment methods</p>

                    <div className={cx('payment-list')}>
                        <div className={cx('payment-card')}>
                            <article className={cx('payment-card__bg')} style={{ backgroundColor: '#1e2e69' }}>
                                <img src={card1} alt="" className={cx('payment-card__img')} />
                                <div className={cx('payment-card__top')}>
                                    <img src={card2} alt="" />
                                    <span className={cx('payment-card__type')}>FeatherCard</span>
                                </div>
                                <div className={cx('payment-card__number')}>1234 4567 8901 2221</div>
                                <div className={cx('payment-card__bottom')}>
                                    <div>
                                        <p className={cx('payment-card__label')}>Card Holder</p>
                                        <p className={cx('payment-card__value')}>Imran Khan</p>
                                    </div>
                                    <div className={cx('payment-card__expired')}>
                                        <p className={cx('payment-card__label')}>Expired</p>
                                        <p className={cx('payment-card__value')}>10/22</p>
                                    </div>
                                    <div className={cx('payment-card__circle')}></div>
                                </div>
                            </article>
                        </div>

                        <div className={cx('payment-card')}>
                            <article className={cx('payment-card__bg')} style={{ backgroundColor: '#1e2e69' }}>
                                <img src={card1} alt="" className={cx('payment-card__img')} />
                                <div className={cx('payment-card__top')}>
                                    <img src={card2} alt="" />
                                    <span className={cx('payment-card__type')}>FeatherCard</span>
                                </div>
                                <div className={cx('payment-card__number')}>1234 4567 8901 2221</div>
                                <div className={cx('payment-card__bottom')}>
                                    <div>
                                        <p className={cx('payment-card__label')}>Card Holder</p>
                                        <p className={cx('payment-card__value')}>Imran Khan</p>
                                    </div>
                                    <div className={cx('payment-card__expired')}>
                                        <p className={cx('payment-card__label')}>Expired</p>
                                        <p className={cx('payment-card__value')}>10/22</p>
                                    </div>
                                    <div className={cx('payment-card__circle')}></div>
                                </div>
                            </article>
                        </div>

                        <div className={cx('add-card')}>
                            <a className={cx('new-card')} href="./add-new-card.html">
                                <img src={card3} alt="" className={cx('new-card__icon', 'icon')} />
                                <p className={cx('new-card__text')}>Add New Card</p>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={cx('info')}>
                    <h2 className={cx('cart-info__heading')}>Account info</h2>
                    <p className={cx('cart-info__desc', 'profile__desc')}>
                        Addresses, contact information and password
                    </p>
                    <div className={cx('info-list')}>
                        <div className={cx('info-detail')}>
                            <Link href="./edit-personal-info.html">
                                <article className={cx('account-info')}>
                                    <div className={cx('account-info__icon')}>
                                        <img src={info1} alt="" className={cx('icon')} />
                                    </div>
                                    <div>
                                        <h3 className={cx('account-info__title')}>Email Address</h3>
                                        <p className={cx('account-info__desc')}>tarek97.ta@gmail.com</p>
                                    </div>
                                </article>
                            </Link>
                        </div>

                        <div className={cx('info-detail')}>
                            <Link href="./edit-personal-info.html">
                                <article className={cx('account-info')}>
                                    <div className={cx('account-info__icon')}>
                                        <img src={info2} alt="" className={cx('icon')} />
                                    </div>
                                    <div>
                                        <h3 className={cx('account-info__title')}>Phone number</h3>
                                        <p className={cx('account-info__desc')}>+000 11122 2345 657</p>
                                    </div>
                                </article>
                            </Link>
                        </div>

                        <div className={cx('info-detail')}>
                            <Link href="./edit-personal-info.html">
                                <article className={cx('account-info')}>
                                    <div className={cx('account-info__icon')}>
                                        <img src={info3} alt="" className={cx('icon')} />
                                    </div>
                                    <div>
                                        <h3 className={cx('account-info__title')}>Add an address</h3>
                                        <p className={cx('account-info__desc')}>
                                            Bangladesh Embassy, Washington, DC 20008
                                        </p>
                                    </div>
                                </article>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;
