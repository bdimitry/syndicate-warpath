import React from 'react';
import OfficerGuide from './OfficerGuide';
import {naval,navalGroups,navalOfficers,directionLinks} from './airNaval';
export default function NavalGuide({lang}){return <OfficerGuide lang={lang} data={naval} groups={navalGroups} officers={navalOfficers} prefix="naval" links={directionLinks(lang,'naval')}/>;}
