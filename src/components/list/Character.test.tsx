import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import Character from './Character';
import { MemoryRouter } from 'react-router';

describe('Character component', () => {
  afterEach(() => cleanup());

  it('renders Character', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Character
          characters={[{
          name: "Phil",
          image: "Phil.jpg"}]}
        />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  })
})