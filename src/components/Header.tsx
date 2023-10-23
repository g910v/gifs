import React from 'react';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import GiphyLogo from '../assets/GiphyLogo.svg?react';
import routes from '../shared/routes';
import styles from '../styles/headerMenu.module.css';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const menuItems = [
    {
      label: t('search'),
      command: () => navigate(routes.SEARCH.path, { replace: false }),
    },
    {
      label: t('trends'),
      command: () => navigate(routes.TRENDS.path, { replace: false }),
    },
    {
      label: t('random'),
      command: () => navigate(routes.RANDOM.path, { replace: false }),
    },
    {
      icon: 'pi pi-language',
      items: [
        {
          label: 'Russian',
          command: () => {
            i18n.changeLanguage('ru');
            localStorage.setItem('lang', 'ru');
          },
        },
        {
          label: 'English',
          command: () => {
            i18n.changeLanguage('en');
            localStorage.setItem('lang', 'en');
          },
        },
      ],
    },
  ];

  const menuStart = <GiphyLogo style={{ height: '35px', marginTop: '0.5rem' }} />;

  return (
    <div className="px-2">
      <Menubar
        style={{ background: 'transparent' }}
        model={menuItems}
        className={classNames('w-full border-none flex justify-content-between', styles.headerMenu)}
        start={menuStart}
      />
    </div>
  );
};

export default Header;
