import './App.scss';
import AllViewMainPage from './components/mainPage/AllViewMainPage';
import ButtonMenu from './components/setPage/buttonMenu';
import { useState } from 'react';

function App() {

  const [activeBtn, setActiveBtn] = useState(0);

  const ViewPage = [
    <AllViewMainPage />    
  ]
  {ViewPage.map((el) => console.log((ViewPage.indexOf(el))))}
  return (
    <>
      <ButtonMenu activeBtn={activeBtn} setActiveBtn={setActiveBtn}/>

            {ViewPage.map((el) => (
              ViewPage.indexOf(el) === activeBtn && 
              <div key={el} className="mainContainer">
                {ViewPage[activeBtn]}
              </div>
            ))}

    </>
  );
  
}

export default App;
