import React from 'react';
import { InfoSection, Process } from '../../components';
import { ProjectObjOne, ProjectObjThree } from './Data';

function Services() {
  return (
    <>
      <Process />
      <InfoSection {...ProjectObjOne} />
      <InfoSection {...ProjectObjThree} />
    </>
  );
}

export default Services;