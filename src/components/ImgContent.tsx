import React, { useState } from 'react';
import { Skeleton } from 'primereact/skeleton';
import { Image } from 'primereact/image';
import classNames from 'classnames';
import { TbFaceIdError } from 'react-icons/tb';
import { IGifItem } from '../store/models/IGif';
import styles from '../styles/imageGrid.module.css';

interface Props {
  gif: IGifItem,
}

const ImgContent: React.FC<Props> = props => {
  const { gif } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  return (
    <div className="overflow-hidden border-round-md flex justify-content-center h-full">
      {
        isLoading && !isError && (
          <Skeleton className="w-full h-full" />
        )
      }
      {
        isError && (
          <div
            className="w-full h-full flex justify-content-center align-items-center"
            style={{ background: 'rgba(255, 255, 255, 0.05)' }}
          >
            <TbFaceIdError style={{ fontSize: '35px' }} />
          </div>
        )
      }
      <Image
        preview
        src={gif.baseImgUrl}
        alt={gif.altText}
        className={classNames('w-full h-full', styles.imageContainer, { hidden: isLoading }, { block: !isLoading })}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsError(true)}
      />
    </div>
  );
};

export default ImgContent;
