import React from 'react';
import OfficerGuide from './OfficerGuide';
import {aircraft,aircraftGroups,aircraftOfficers,directionLinks} from './airNaval';
export default function AircraftGuide({lang}){return <OfficerGuide lang={lang} data={aircraft} groups={aircraftGroups} officers={aircraftOfficers} prefix="aircraft" links={directionLinks(lang,'aircraft')}/>;}
