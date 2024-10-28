import React from 'react'
import EventList from './EventList'
import Header from './Header';
import SearchContextProvider from '../utils/SearchContextProvider';
const MainPage = () => {
  return (
    <div>
    <SearchContextProvider>
      <Header />
      <EventList />
    </SearchContextProvider>
    </div>
  )
}

export default MainPage;
