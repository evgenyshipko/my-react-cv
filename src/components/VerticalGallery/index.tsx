import React, { FC, memo } from 'react';

import './vertical_gallery.css';

type VerticalGalleryProps = {
    itemSourceArr: string[];
};

export const VerticalGallery: FC<VerticalGalleryProps> = memo(
    ({ itemSourceArr }) => (
        <div className="vertical-gallery">
            {itemSourceArr.map((src) => (
                <img
                    src={src}
                    alt={' '}
                    className="vertical-gallery__item"
                    key={src}
                />
            ))}
        </div>
    )
);
