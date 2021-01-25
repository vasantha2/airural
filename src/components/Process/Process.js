import React from 'react';
import { Button } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import {SiAddthis } from 'react-icons/si';
import {SiElixir} from 'react-icons/si';
import {
  ProcessSection,
  ProcessWrapper,
  ProcessHeading,
  ProcessContainer,
  ProcessCard,
  ProcessCardInfo,
  ProcessCardIcon,
  ProcessCardPlan,
  ProcessCardFeatures,
  ProcessCardFeature
} from './Process.elements';

function Process() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <ProcessSection>
        <ProcessWrapper>
          <ProcessHeading>Our Services</ProcessHeading>
          <ProcessContainer>
            <ProcessCard to='/sign-up'>
              <ProcessCardInfo>
                <ProcessCardIcon>
               <SiAddthis/>
                </ProcessCardIcon>
                <ProcessCardPlan>Medical</ProcessCardPlan>
                <ProcessCardFeatures>
                  <ProcessCardFeature>Support our overwhelmed health systems with medical innovation</ProcessCardFeature>
                </ProcessCardFeatures>
                <Button primary>Choose Plan</Button>
              </ProcessCardInfo>
            </ProcessCard>
            <ProcessCard to='/sign-up'>
              <ProcessCardInfo>
                <ProcessCardIcon>
                <SiElixir/>
                </ProcessCardIcon>
                <ProcessCardPlan>Health care</ProcessCardPlan>
                 <ProcessCardFeatures>
                  <ProcessCardFeature>Inform,reduce,and control the spread of the outbreak</ProcessCardFeature>
                </ProcessCardFeatures>
                <Button primary>Choose Plan</Button>
              </ProcessCardInfo>
            </ProcessCard>
          </ProcessContainer>
        </ProcessWrapper>
      </ProcessSection>
    </IconContext.Provider>
  );
}
export default Process;