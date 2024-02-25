import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../src/store/Store';
// import '../locale/i18n';

interface Props {
  children: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) => <Provider store={store}><Router>{children}</Router></Provider>;

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => render(ui, { wrapper: Wrapper, ...options });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
