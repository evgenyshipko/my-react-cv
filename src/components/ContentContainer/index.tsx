import React, { FC, memo, useState } from 'react';

import './content_container.css';

import dropdown from '@src/assets/icons/dropdown.svg';

type ContentContainerProps = {
    title: string;
    className?: string;
};

export const ContentContainer: FC<ContentContainerProps> = memo(
    ({ children, title, className }) => {
        const [isOpen, toggleContainer] = useState(true);

        const classStr = className || '';

        return (
            <div className="content-container">
                <div
                    className="content-container__title"
                    onClick={() => toggleContainer(!isOpen)}
                >
                    {title}

                    <img
                        className="content-container__title-icon"
                        src={dropdown}
                        style={{ transform: isOpen ? 'rotate(-180deg)' : '' }}
                        alt={''}
                    />
                </div>
                <div
                    className={`content-container__data ${classStr}`}
                    style={{ display: isOpen ? undefined : 'none' }}
                >
                    {children}
                </div>
            </div>
        );
    }
);
