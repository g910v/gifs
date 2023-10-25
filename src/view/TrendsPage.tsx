import React, { useEffect, useRef } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import GifsGrid from '../components/GifsGrid';
import { useAppDispatch, useAppSelector } from '../hooks/ReduxHooks';
import { addOffset, resetError, switchPageReset } from '../store/reducers/GifGridSlice';
import fetchGifs from '../store/asyncActions/FetchGifGrid';

const TrendsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    gifList, loading, offset, totalRecord, fetching, error,
  } = useAppSelector(state => state.gifGridReducer);
  const errorMessage = useRef<Toast>(null);

  const onRefresh = () => {
    dispatch(resetError());
    dispatch(fetchGifs());
  };

  useEffect(() => {
    dispatch(fetchGifs());
  }, [dispatch]);

  useEffect(() => {
    if (fetching && gifList?.length !== totalRecord) {
      dispatch(addOffset());
      dispatch(fetchGifs());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching, dispatch]);

  useEffect(
    () => () => {
      dispatch(switchPageReset());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

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
    <div className="w-full flex flex-column align-items-center justify-content-center p-3 lg:pt-6 pt-5">
      <Toast ref={errorMessage} position="bottom-left" />
      {
        !!gifList && <GifsGrid gifList={gifList} />
      }
      {
        (!!offset && loading) && (<ProgressSpinner className="w-5rem mt-5" strokeWidth="3" />)
      }
      {
        error && (<Button text icon="pi pi-refresh" onClick={onRefresh} />)
      }
    </div>
  );
};

export default TrendsPage;
