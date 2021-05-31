import React, { FC } from 'react';

import './experience_block.css';

type EducationBlockProps = {
    iconSource: string;
    content: string | JSX.Element;
    yearStart: number;
    yearEnd: number;
    organization: string;
    position: string;
    showLine?: boolean;
};

export const ExperienceBlock: FC<EducationBlockProps> = ({
    iconSource,
    organization,
    content,
    yearEnd,
    yearStart,
    showLine = true,
    position,
}) => {
    return (
        <div className="education-block">
            <div className="education-block__avatar">
                <img
                    src={iconSource}
                    alt=""
                    className="education-block__icon"
                />
            </div>
            <div className="education-block__title">
                {yearStart}-{yearEnd}, {organization}
            </div>
            <div
                className={
                    showLine
                        ? 'education-block__lined-block'
                        : 'education-block__empty-block'
                }
            />
            <div className="education-block__empty-block" />
            <div className="education-block__position">{position}</div>
            <div className="education-block__content">{content}</div>
        </div>
    );
};
