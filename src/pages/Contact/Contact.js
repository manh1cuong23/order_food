import { useState } from 'react';
import { useForm } from 'react-hook-form';

import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import { SlLocationPin } from 'react-icons/sl';
import { TfiMobile } from 'react-icons/tfi';
import { TfiEmail } from 'react-icons/tfi';
import Crumb from '~/components/Crumb/Crumb';

const cx = classNames.bind(styles);

function Contact() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [message, setMessage] = useState('');

    return (
        <div className={cx('wrapper')}>
            <Crumb className={cx('crumb-wrapper')} title="Contact" />
            <div className={cx('inner')}>
                <div className={cx('map-container')}>
                    <iframe
                        className={cx('gg-map')}
                        title="gg-map"
                        src={
                            'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1395.2311484529866!2d105.8772352486263!3d20.999862470565184!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aeaa17c35b81%3A0x79d8becf2f06f8dc!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBLaW5oIGRvYW5oIHbDoCBDw7RuZyBuZ2jhu4cgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1669756233823!5m2!1svi!2s'
                        }
                    />
                </div>
                <div className={cx('content-wrapper')}>
                    <div className={cx('contact-info-warpper')}>
                        <div className={cx('contact-detail')}>
                            <div className={cx('contact-detail-title')}>Contacts Us</div>
                            <div className={cx('contact-detail-content')}>
                                Contrary to popular belief, Lorem Ipsum is simply random text. It has roots in a piece
                                of classical Latin literature from 45 BC, maki years old.
                            </div>
                        </div>
                        <div className={cx('card-item-wrapper')}>
                            <div className={cx('card-item')}>
                                <div className={cx('card-item-icon-wrapper')}>
                                    <SlLocationPin className={cx('card-item-icon')} />
                                </div>
                                <div className={cx('card-item-content-wrapper')}>
                                    <div className={cx('card-item-title')}>Address:</div>
                                    <div className={cx('card-item-content')}>
                                        Gốc Đề, Minh khai, Hai Bà Trưng, Hà Nội
                                    </div>
                                </div>
                            </div>
                            <div className={cx('card-item')}>
                                <div className={cx('card-item-icon-wrapper')}>
                                    <TfiMobile className={cx('card-item-icon')} />
                                </div>
                                <div className={cx('card-item-content-wrapper')}>
                                    <div className={cx('card-item-title')}>Phone:</div>
                                    <div className={cx('card-item-content')}>+84 34.675.1314</div>
                                </div>
                            </div>
                            <div className={cx('card-item')}>
                                <div className={cx('card-item-icon-wrapper')}>
                                    <TfiEmail className={cx('card-item-icon')} />
                                </div>
                                <div className={cx('card-item-content-wrapper')}>
                                    <div className={cx('card-item-title')}>Email:</div>
                                    <div className={cx('card-item-content')}>hellocolorlib@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('right-content-wrapper')}>
                        <div className={cx('contact-detail')}>
                            <div className={cx('contact-detail-title')}>Leave A Comment</div>
                            <div className={cx('contact-detail-content')}>
                                Our staff will call back later and answer your questions.
                            </div>
                        </div>
                        <form action="#" className={cx('form-wrapper')} onSubmit={handleSubmit()}>
                            <div className={cx('form-group')}>
                                <input
                                    className={cx('name')}
                                    type="text"
                                    placeholder="Your name"
                                    {...register('FullName', {
                                        required: true,
                                    })}
                                />
                                {errors.FullName && errors.FullName.type === 'required' && (
                                    <span className={cx('error-message')}>FullName cannot be empty !</span>
                                )}
                            </div>
                            <div className={cx('form-group')}>
                                <input
                                    className={cx('email')}
                                    type="email"
                                    placeholder="Your email"
                                    {...register('Email', {
                                        required: true,
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        },
                                    })}
                                />
                                {errors.Email && errors.Email.type === 'required' && (
                                    <span className={cx('error-message')}>Email cannot be empty !</span>
                                )}
                                {errors.Email && errors.Email.type === 'pattern' && (
                                    <span className={cx('error-message')}>Invalid email !</span>
                                )}
                            </div>
                            <textarea
                                className={cx('message')}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Your message"
                                {...register('Note', {
                                    required: true,
                                })}
                            />
                            {errors.Note && errors.Note.type === 'require' && (
                                <span className={cx('error-message')}>Message cannot be empty !</span>
                            )}
                            <button type="submit" className={cx('send-btn')}>
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
