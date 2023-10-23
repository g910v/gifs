import React, { useEffect } from 'react';
import './App.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Content from './components/Content';

const App: React.FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = localStorage.getItem('lang');
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [i18n]);

  return (
    <>
      <Header />
      <Content />
    </>
  );
};

export default App;
