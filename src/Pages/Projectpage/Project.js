import React from 'react';
import {InfoSection} from '../../components';
import {ProjectObjOne,ProjectObjTwo,ProjectObjThree,ProjectObjFour} from './Data';

const Project = () => {
    return (
        <>
        <InfoSection{...ProjectObjOne}/>
        <InfoSection{...ProjectObjTwo}/>
        <InfoSection{...ProjectObjThree}/>
        <InfoSection{...ProjectObjFour}/>
       </>
    );   
};
export default Project;