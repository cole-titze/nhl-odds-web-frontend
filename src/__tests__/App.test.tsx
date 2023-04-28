import {render, fireEvent, screen, getByTestId} from '@testing-library/react'
import Navbar from '../src/sdk/components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

//jest.mock('axios');

test('renders learn react link', () => {
  const { getByTestId } = render(<BrowserRouter><App /></BrowserRouter>);

  const navbar = getByTestId('navbar');
  const app = getByTestId('app');

  expect(app).toContainElement(navbar); 
});
