import React, { useEffect, useRef } from 'react';
import './App.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { useTranslation } from 'react-i18next';
import { Toast } from 'primereact/toast';
import Header from './components/Header';
import Content from './components/Content';
import { useAppSelector } from './hooks/ReduxHooks';

const App: React.FC = () => {
  const { i18n } = useTranslation();
  const errorMessage = useRef<Toast>(null);
  const { error: errorGrid } = useAppSelector(state => state.gifGridReducer);
  const { error: errorRandom } = useAppSelector(state => state.gifRandomReducer);

  useEffect(() => {
    const lang = localStorage.getItem('lang');
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [i18n]);

  useEffect(() => {
    if (errorGrid || errorRandom) {
      errorMessage.current?.show({
        severity: 'error',
        summary: 'Не удалось выполнить запрос',
        detail: errorGrid || errorRandom,
        life: 4500,
      });
    }
  }, [errorGrid, errorRandom]);

  return (
    <>
      <Header />
      <Content />
      <Toast ref={errorMessage} position="bottom-left" />
    </>
  );
};

export default App;
