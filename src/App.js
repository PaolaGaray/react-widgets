import React, { useState } from 'react'
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
import ImageSearch from './components/ImageSearch/ImageSearch';


const items = [
  {
    title: 'How does NASA organize a party?',
    content: 'They planet'
  }, 
  {
    title: 'Why aren’t koalas actual bears?',
    content: 'The don’t meet the koalafications.'
  }, 
  {
    title: 'pie or cake?',
    content: 'Yes!'
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