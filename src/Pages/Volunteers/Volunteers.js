import React from 'react';
import { InfoSection } from '../../components';
import { ProjectObjOne, ProjectObjTwo } from './Data';

function Volunteers() {
  return (
    <>
      <InfoSection {...ProjectObjOne} />
      <InfoSection {...ProjectObjTwo} />
    </>
  );
}

export default Volunteers;