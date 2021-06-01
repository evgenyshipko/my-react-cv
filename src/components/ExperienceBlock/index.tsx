import React, { FC, memo } from 'react';

import './experience_block.css';

type EducationBlockProps = {
    iconSource: string;
    yearStart: number;
    yearEnd: number;
    organization: string;
    position: string;
    showLine?: boolean;
};

export const ExperienceBlock: FC<EducationBlockProps> = memo(
    ({
        iconSource,
        organization,
        yearEnd,
        yearStart,
        showLine = true,
        position,
        children,
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
                <div className="education-block__content">{children}</div>
            </div>
        );
    }
);
