import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Skeleton } from 'primereact/skeleton';
import classNames from 'classnames';
import { Toast } from 'primereact/toast';
import { useAppDispatch, useAppSelector } from '../hooks/ReduxHooks';
import fetchGifRandom from '../store/asyncActions/FetchGifRandom';
import ImgContent from '../components/ImgContent';
import styles from '../styles/imageRandomContainer.module.css';
import { switchPageReset } from '../store/reducers/GifRandomSlice';

const RandomPage: React.FC = () => {
  const [gifIndex, setGifIndex] = useState(0);
  const dispatch = useAppDispatch();
  const { gifList, loading } = useAppSelector(state => state.gifRandomReducer);
  const errorMessage = useRef<Toast>(null);
  const { error } = useAppSelector(state => state.gifRandomReducer);

  useEffect(() => {
    dispatch(fetchGifRandom());
  }, [dispatch]);

  const onLoadClick = () => {
    if (gifIndex === gifList.length - 1) {
      dispatch(fetchGifRandom());
    }
    setGifIndex(prev => prev += 1);
  };

  useEffect(() => {
    if (error) {
      errorMessage.current?.show({
        severity: 'warn',
        summary: 'Не удалось выполнить запрос',
        detail: error,
        life: 4500,
      });
    }
  }, [error]);

  useEffect(
    () => () => {
      dispatch(switchPageReset());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <div style={{ height: '80vh' }} className="w-full flex align-items-center justify-content-center sm:p-3">
      <Toast ref={errorMessage} position="bottom-left" />
      <Button
        disabled={!gifIndex}
        onClick={() => setGifIndex(prev => prev -= 1)}
        text
        icon="pi pi-angle-left"
        className={classNames(styles.switchButtons)}
      />
      <div className={classNames(styles.imageContainer)}>
        {
          loading || !gifList.length
            ? <Skeleton className="w-full h-full" />
            : <ImgContent gif={gifList[gifIndex]} />
        }
      </div>
      <Button
        onClick={onLoadClick}
        text
        icon="pi pi-angle-right"
        className={classNames(styles.switchButtons)}
      />
    </div>
  );
};

export default RandomPage;
