import { useState } from 'react';
import Header from './components/Header';
import SideMenu from "./components/SideMenu";
export const App = () => {
  const [sideMenu, toggler] = useState('close');
  function sideMenuToggle(){
    if(sideMenu === 'close'){
      toggler(sideMenu => sideMenu = 'open')

    } else {
       toggler(sideMenu => sideMenu = 'close')
     }
  } 
  return (
    <div>
      <Header toggleMenu = { sideMenuToggle }/>
      <SideMenu toggle={sideMenu}/>
    </div>
  )
}

export default App;
