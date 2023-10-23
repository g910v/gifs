import React, { useCallback, useEffect, useRef } from 'react';
import { Toast } from 'primereact/toast';
import ImgContent from './ImgContent';
import { IGifItem } from '../store/models/IGif';
import { useAppDispatch, useAppSelector } from '../hooks/ReduxHooks';
import { setTrueFetching } from '../store/reducers/GifGridSlice';

interface Props {
  gifList: IGifItem[],
}

const GifsGrid: React.FC<Props> = ({ gifList }) => {
  const dispatch = useAppDispatch();
  const errorMessage = useRef<Toast>(null);
  const { error } = useAppSelector(state => state.gifGridReducer);

  const handleScroll = useCallback((e: Event) => {
    const target = e.target as Document;
    if (target.documentElement.scrollHeight - (target.documentElement.scrollTop + window.innerHeight) < 100) {
      dispatch(setTrueFetching());
    }
  }, [dispatch]);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

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

  return (
    <>
      <Toast ref={errorMessage} position="bottom-left" />
      <div
        className="gap-3 lg:w-9 w-11"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(18rem, 1fr))',
        }}
      >
        {
          gifList.map(gif => (
            <div key={gif.key} className="h-20rem">
              <ImgContent key={gif.key} gif={gif} />
            </div>
          ))
        }
      </div>
    </>
  );
};

export default GifsGrid;
