import React,{useState} from 'react';
import Conversations from './Conversations';
import Search from './Search';
import Header from './Header';

function Menu() {
  const [text, setText]=useState('')
  return (
    <div>
          <Header />
      <Search setText={setText }/>
      <Conversations text={ text}/>
    </div>
  )
}

export default Menu
