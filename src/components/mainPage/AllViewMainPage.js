import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ViewNextPlanets from './isIconsPlanet/nextPlanets';
import AmountCoin from './isCoin/amountCoin'
import AmountOre from './isOre/viewOre';
import UFO from './isUFO/viewUFO';
import MainPlanet from './isPlanet/mainPlanet';
import Battery from './isBattery/viewBattery';
import DailyGame from './isDailyGame/viewGame';
import TimerGame from './isTimerGame/viewTimer';
import React, { useState } from 'react';

function AllViewMainPage() {
  const [coinValue, setCoinValue] = useState("0.0000");

  return (
      <>
        <ViewNextPlanets />
        <AmountCoin coinValue={coinValue} />
        <AmountOre />
        <UFO />
        <MainPlanet />
        <Battery />
        <DailyGame />
        <TimerGame />
      </>
  );
}

export default AllViewMainPage;