import React, { useEffect } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import GifsGrid from '../components/GifsGrid';
import { useAppDispatch, useAppSelector } from '../hooks/ReduxHooks';
import { addOffset, switchPageReset } from '../store/reducers/GifGridSlice';
import fetchGifs from '../store/asyncActions/FetchGifGrid';

const TrendsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    gifList, loading, offset, totalRecord, fetching,
  } = useAppSelector(state => state.gifGridReducer);

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

  return (
    <div className="w-full flex flex-column align-items-center justify-content-center p-3 lg:pt-6 pt-5">
      {
        !!gifList && <GifsGrid gifList={gifList} />
      }
      {
        (!!offset && loading) && (<ProgressSpinner className="w-5rem mt-5" strokeWidth="3" />)
      }
    </div>
  );
};

export default TrendsPage;
