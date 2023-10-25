import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/ReduxHooks';
import fetchGifs from '../store/asyncActions/FetchGifGrid';
import GifsGrid from '../components/GifsGrid';
import { addOffset, resetSearch, switchPageReset } from '../store/reducers/GifGridSlice';

const SearchPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    gifList, loading, totalRecord, fetching,
  } = useAppSelector(state => state.gifGridReducer);
  const [searchParams, setSearchParams] = useSearchParams();

  const { t } = useTranslation();

  const [inputValue, setInputValue] = useState('');

  const onClearSearch = () => {
    setInputValue('');
    dispatch(resetSearch());
    setSearchParams(param => {
      param.delete('text');
      return param;
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue.length > 1) {
        dispatch(resetSearch());
        dispatch(fetchGifs(inputValue));
        setSearchParams(param => {
          param.set('text', inputValue);
          return param;
        });
      }
    }, 1000);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, dispatch]);

  useEffect(() => {
    if (fetching && gifList?.length !== totalRecord) {
      dispatch(addOffset());
      dispatch(fetchGifs(inputValue));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching, dispatch]);

  useEffect(
    () => {
      if (searchParams.get('text')) {
        setInputValue(searchParams.get('text') ?? '');
      }
      return () => {
        dispatch(switchPageReset());
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <div className="w-full flex flex-column align-items-center justify-content-center p-3 lg:pt-8 pt-5">
      <span className="p-input-icon-left p-input-icon-right lg:mb-6 mb-3 lg:w-9 w-11">
        <i className="pi pi-search w-max" />
        <InputText
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder={t('search')}
          className="w-full"
          style={{ backgroundColor: 'transparent', border: '1px solid var(--text-color)' }}
        />
        {
          loading && (<i className="pi pi-spin pi-spinner mr-1" />)
        }
        {
          !loading && !!inputValue.length && (<i className="pi pi-times mr-1 cursor-pointer" onClick={onClearSearch} />)
        }
      </span>
      {
        (!loading && gifList?.length === 0) && (<div>{t('emptyMessage')}</div>)
      }
      {
        gifList && <GifsGrid gifList={gifList} />
      }
      {
        (!!gifList?.length && loading) && (<ProgressSpinner className="w-5rem mt-5" strokeWidth="3" />)
      }
    </div>
  );
};

export default SearchPage;
