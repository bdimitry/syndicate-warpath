import React from 'react';
import OfficerGuide from './OfficerGuide';
import {artillery,artilleryGroups,artilleryOfficers} from './artillery';

export default function ArtilleryGuide({lang}) {
  const t=artillery[lang];
  return <OfficerGuide lang={lang} data={artillery} groups={artilleryGroups} officers={artilleryOfficers} prefix="artillery" links={[{page:'tanks',label:t.armorLink},{page:'infantry',label:t.infantryLink}]}/>;
}
