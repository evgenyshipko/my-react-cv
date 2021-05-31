import React from 'react';

import avatar from 'src/assets/images/avatar.jpg'
import gitHubLogo from 'src/assets/icons/github-logo.svg'
import telegram from 'src/assets/icons/telegram.svg'

import './header.css'
import { Paper } from '@material-ui/core';

const email = 'evgeny-shipko@yandex.ru'

export const Header = () => {

    return (

        <Paper className='header' elevation={3}>

            <div className='header__avatar-wrapper'>
                <img className='header__avatar' src={avatar} alt=" " />
            </div>

            <h1 className='header__title'>
                Евгений Шипко
            </h1>

            <div className='header__contacts'>

                <a href={`mailto:${email}`} target="_blank" className='email-link'>email: {email}</a>
                <div className='mobile-phone'>mobile: +79529159058</div>

                <div className='header__icon-block'>

                    <a href="https://github.com/evgenyshipko" target='_blank'>
                        <img src={gitHubLogo} alt={' '} className='header__icon' />
                    </a>

                    <a href="https://t.me/evgenynow" target='_blank'>
                        <img src={telegram} alt={' '} className='header__icon'/>
                    </a>

                </div>

            </div>

        </Paper>

    )

}
