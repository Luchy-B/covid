import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Countries from '../components/Countries';
import store from '../Redux/store';

describe('Home component', () => {
  it('renders the Home component', () => {
    render(
      <Provider store={store}>
        <Countries />
      </Provider>,
    );
    expect(screen.getByTestId('home-container')).toBeInTheDocument();
  });
});
