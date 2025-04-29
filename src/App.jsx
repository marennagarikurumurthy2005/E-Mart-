import React from 'react'
import './App.css'
import LandingPage from './stores/pages/LandingPage';
import { Routes,Route } from 'react-router-dom';
import MobilePage from './stores/pages/MobilePage';
import ACPage from './stores/pages/ACPage';
import BooksPage from './stores/pages/BooksPage';
import ComputersPage from './stores/pages/ComputersPage';
import FridgePage from './stores/pages/FridgePage';
import FurniturePage from './stores/pages/FurniturePage';
import KitchenPage from './stores/pages/KitchenPage';
import MensWear from './stores/components/MensWear';
import MensWearPage from './stores/pages/MensWearPage';
import SpeakersPage from './stores/pages/SpeakersPage';
import TvPage from './stores/pages/TvPage';
import WatchesPage from './stores/pages/WatchesPage';
import WomenWearPage from './stores/pages/WomenWearPage';
import MobileSingle from './stores/singles/MobileSingle';
import AcSingle from './stores/singles/AcSingle';
import ComputerSingle from './stores/singles/ComputerSingle';
import BooksSingle from './stores/singles/BooksSingle';
import FridgeSingle from './stores/singles/FridgeSingle';
import FurnitureSingle from './stores/singles/FurnitureSingle';
import KitchenSingle from './stores/singles/KitchenSingle';
import MenSingle from './stores/singles/MenSingle';
import SpeakerSingle from './stores/singles/SpeakerSingle';
import TvSingle from './stores/singles/TvSingle';
import WatchSingle from './stores/singles/WatchSingle';
import WomenSingle from './stores/singles/WomenSingle';
import UserCart from './stores/UserCart';



const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />}     />
        <Route path='/mobilesPage' element={<MobilePage/>} />
        <Route path='/acPage' element={<ACPage/>} />  
        <Route path='/booksPage'   element={<BooksPage/>} />   
        <Route path='/computerPage' element={<ComputersPage/>}/>
        <Route path='/fridgePage' element={<FridgePage/>} />
        <Route path='/furniturePage' element={<FurniturePage/>}/>
        <Route path='/kitchenPage' element={<KitchenPage/>}/> 
        <Route path='/mensPage' element={<MensWearPage/>}/>
        <Route path='/speakersPage' element={<SpeakersPage/>}/>
        <Route path='/tvPage' element={<TvPage/>}/>
        <Route path='/watchPage' element={<WatchesPage/>}/>
        <Route path='/womenPage' element={<WomenWearPage/>}/>



        <Route path='/mobileSingle/:id' element={ < MobileSingle/>} />
        <Route path='/acSingle/:id' element={ < AcSingle/>} />
        <Route path='/bookSingle/:id' element={ < BooksSingle/>} />
        <Route path='/computerSingle/:id' element={ < ComputerSingle/>} />
        <Route path='/fridgeSingle/:id' element={ < FridgeSingle/>} />
        <Route path='/furnitureSingle/:id' element={ <FurnitureSingle/>} />
        <Route path='/kitchenSingle/:id' element={ < KitchenSingle/>} />
        <Route path='/menSingle/:id' element={ <MenSingle/>} />
        <Route path='/speakerSingle/:id' element={ < SpeakerSingle/>} />
        <Route path='/tvSingle/:id' element={ < TvSingle/>} />
        <Route path='/watchSingle/:id' element={ < WatchSingle/>} />
        <Route path='/womenSingle/:id' element={ < WomenSingle />} />
        <Route path='/cartPage' element={ < UserCart />} />
      </Routes>
    </div>
  )
}

export default App;
