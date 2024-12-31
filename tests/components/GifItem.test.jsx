import { render, screen } from '@testing-library/react';
import GifItem from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => {
  test('Debe hacer match con el snapshot', () => {
    render( <GifItem />);
    //expect( screen ).toMatchSnapshot();

  })
  
})
