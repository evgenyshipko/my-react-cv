import React, { FC, memo } from 'react';
import { Paper } from '@material-ui/core';

import './skill-card.css';

type SkillCardProps = {
    title: string;
    iconSource?: string;
};

export const SkillCard: FC<SkillCardProps> = memo(({ title, iconSource }) => (
    <Paper elevation={3} className="skill-card">
        {iconSource && <img className="skill-card__icon" src={iconSource} />}
        {title}
    </Paper>
));
