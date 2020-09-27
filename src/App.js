import React, { useState } from 'react'
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
import ImageSearch from './components/ImageSearch';


const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  }, 
  {
    title: 'Why you use React?',
    content: 'React is a front end javascript framework'
  }, 
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
];


const options = [
  {
      label: 'The Color Red',
      value: 'red'
  }, 
  {
      label: 'The Color Green',
      value: 'green'
  }, 
  {
      label: 'A Shade of Blue',
      value: 'blue'
  } 
];


export default () => {
   const [selected, setSelected] = useState(options[0]);

  return (
      <div> 
        <Header />

        <Route path='/'>
            <ImageSearch />
        </Route>

        <Route path='/accordion'>
            <Accordion items={items}/>
        </Route>

        <Route path='/search'>
            <Search />
        </Route>

        <Route path='/dropdown'>
            <Dropdown 
                  label="Select a color"
                  options = {options} 
                  selected = {selected}
                  onSelectedChange = {setSelected}
                />
        </Route>

        <Route path='/translate'>
            <Translate />
        </Route>
      </div>

  );
}