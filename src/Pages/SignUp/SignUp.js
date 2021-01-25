import React from 'react';
import { InfoSection } from '../../components';
import { ProjectObjOne, ProjectObjThree } from './Data';

function SignUp() {
  return (
    <>
      <InfoSection {...ProjectObjOne} />
      <InfoSection {...ProjectObjThree} />
    </>
  );
}

export default SignUp;
