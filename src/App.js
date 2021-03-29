import { Switch, Route } from 'react-router-dom';

import ArtifactsPage from './pages/ArtifactsPage';
import BaseArmorsPage from './pages/BaseArmorsPage';
import BaseWeaponsPage from './pages/BaseWeaponsPage';
import CursedItemsPage from './pages/CursedItemsPage';
import HomePage from './pages/HomePage';
import MagicalTattoosPage from './pages/MagicalTattoosPage';
import MagicArmorsPage from './pages/MagicArmorsPage';
import MagicWeaponsPage from './pages/MagicWeaponsPage';
import PotionsCalculator from './pages/PotionsCalculatorPage';
import PotionsPage from './pages/PotionsPage';
import RodsPage from './pages/RodsPage';
import RingsPage from './pages/RingsPage';
import ScrollCalculatorPage from './pages/ScrollCalculatorPage';
import ShadowPiercingsPage from './pages/ShadowPiercingsPage';
import StavesPage from './pages/StavesPage';
import WeaponsBuilderPage from './pages/WeaponsBuilderPage';
import WondrousItemsPage from './pages/WondrousItemsPage';

import PeoplePage from './pages/PeoplePage';

import Navigation from './components/Navigation';
import './App.css';

function App() {
  
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path='/' render={props => < HomePage/>} />
        <Route exact path='/artifacts' render={props => <ArtifactsPage />} />
        <Route exact path='/base-armors' render={props => <BaseArmorsPage />} />
        <Route exact path='/base-weapons' render={props => <BaseWeaponsPage />} />
        <Route exact path='/cursed-items' render={props => <CursedItemsPage />} />
        <Route exact path='/magical-tattoos' render={props => <MagicalTattoosPage />} />
        <Route exact path='/magic-armors' render={props => <MagicArmorsPage />} />
        <Route exact path='/magic-weapons' render={props => <MagicWeaponsPage />} />
        <Route exact path='/potions-calculator' render={props => <PotionsCalculator />} />
        <Route exact path='/potions' render={props => <PotionsPage />} />
        <Route exact path='/people' render={props => <PeoplePage />} />
        <Route exact path='/rods' render={props => <RodsPage />} />
        <Route exact path='/rings' render={props => <RingsPage />} />
        <Route exact path='/scroll-cost-calculator' render={props => <ScrollCalculatorPage />} />
        <Route exact path='/shadow-piercings' render={props => <ShadowPiercingsPage />} /> 
        <Route exact path='/staves' render={props => <StavesPage />} /> 
        <Route exact path='/weapon-builder' render={props => <WeaponsBuilderPage />} /> 
        <Route exact path='/wondrous-items' render={props => <WondrousItemsPage />} /> 
      </Switch>
    </>
  );
}

export default App;
