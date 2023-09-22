import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'

describe('App component', () => {
  it('renders the component correctly', () => {
    render(<App />)
    expect(screen.getByText('Current')).toBeInTheDocument()
    expect(screen.getByText('8day`s')).toBeInTheDocument()
    expect(screen.getByTestId('search-item')).toMatchSnapshot()
  })
})

describe('Fetch', () => {
  test('fetches data when clicking the search button', async () => {
    render(<App />)
    const input = screen.getByPlaceholderText('Select city')
    const searchButton = screen.getByTestId('search-item')
    userEvent.type(input, 'Kyiv')
    userEvent.click(searchButton)
    const currWeatherElement = await screen.findByTestId('card-item')
    expect(currWeatherElement).toBeInTheDocument()
    expect(currWeatherElement).toMatchSnapshot()
  })
  test('fetches 8 cards when clicking the toogle button', async () => {
    render(<App />)
    const input = screen.getByPlaceholderText('Select city')
    const searchButton = screen.getByTestId('search-item')
    const toogleButton = screen.getByTestId('button-toogle-type')

    userEvent.type(input, 'Kyiv')
    userEvent.click(searchButton)
    userEvent.click(toogleButton)
    const eightCards = await screen.findAllByTestId('card-item-eight')
    expect(eightCards[0]).toMatchSnapshot()
  })
})
