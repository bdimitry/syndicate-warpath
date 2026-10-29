import React from 'react';
import {tanks,tankGroups,tankOfficers} from './tanks';
import OfficerGuide from './OfficerGuide';

export default function TankGuide({lang}) {
  const t=tanks[lang];
  return <OfficerGuide lang={lang} data={tanks} groups={tankGroups} officers={tankOfficers} prefix="tanks" links={[{page:'infantry',label:t.infantryLink},{page:'artillery',label:t.artilleryLink}]}/>;
}
