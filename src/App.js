import React from 'react';
import List from './List';

const App = () => {
  const items = [
    { text: 'Item 1' },
    { text: 'Item 2' },
    { text: 'Item 3' },
    { text: 'Item 4' },
    { text: 'Item 5' },
    { text: 'Item 6' },
    { text: 'Item 7' },
    // Add more items as needed
  ];

  return <List items={items} />;
};

export default App;