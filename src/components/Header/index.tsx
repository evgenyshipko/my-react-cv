import React, { FC, memo } from 'react';

import { Paper } from '@material-ui/core';
import { CONTACTS } from '@src/data/CONTACTS';

import avatar from 'src/assets/images/avatar.jpg';
import gitHubLogo from 'src/assets/icons/github-logo.svg';
import telegram from 'src/assets/icons/telegram.svg';

import './header.css';

type HeaderProps = {
    contacts: typeof CONTACTS;
};

export const Header: FC<HeaderProps> = memo(({ contacts }) => (
    <Paper className="header" elevation={3}>
        <div className="header__avatar-wrapper">
            <img className="header__avatar" src={avatar} alt=" " />
        </div>

        <h1 className="header__title">
            {contacts.firstName} {contacts.lastName}
        </h1>

        <div className="header__contacts">
            <a
                href={`mailto:${contacts.email}`}
                target="_blank"
                className="email-link"
            >
                email: {contacts.email}
            </a>
            <div className="mobile-phone">mobile: {contacts.phone}</div>

            <div className="header__icon-block">
                <a href={contacts.github} target="_blank">
                    <img src={gitHubLogo} alt={' '} className="header__icon" />
                </a>

                <a href={contacts.telegram} target="_blank">
                    <img src={telegram} alt={' '} className="header__icon" />
                </a>
            </div>
        </div>
    </Paper>
));
