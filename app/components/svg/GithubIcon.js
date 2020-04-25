import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  height: 27px;
  width: 27px;
  stroke-width: 1px;
  stroke: none;
  fill: none;
`;

export default function GithubIcon() {
  return (
    <Svg viewBox="0 0 27 27">
      <path
        d="M0,13.3654166 C0,19.2692204 3.86775,24.2784325 9.23315625,26.0458984 C9.90815625,26.1686855 10.1545312,25.7560541 10.1545312,25.4018927 C10.1545312,25.0844839 10.1427187,24.2441858 10.1359688,23.1290786 C6.3804375,23.9368004 5.58815625,21.3373894 5.58815625,21.3373894 C4.97475,19.7937802 4.08965625,19.3828193 4.08965625,19.3828193 C2.8636875,18.55338 4.18246875,18.5700857 4.18246875,18.5700857 C5.5366875,18.6644731 6.24965625,19.9474729 6.24965625,19.9474729 C7.45453125,21.989748 9.4095,21.4000358 10.179,21.0575684 C10.3013438,20.1938824 10.6506562,19.6050055 11.03625,19.270891 C8.03840625,18.9334353 4.887,17.7874225 4.887,12.6662819 C4.887,11.2070367 5.41265625,10.0142478 6.27665625,9.07956244 C6.1374375,8.74127147 5.67421875,7.38309589 6.40828125,5.5429601 C6.40828125,5.5429601 7.54228125,5.18378698 10.1207813,6.91282969 C11.19825,6.61630304 12.3525,6.46845736 13.5008438,6.46261036 C14.6475,6.46845736 15.8025937,6.61630304 16.8809063,6.91282969 C19.4577188,5.18378698 20.5891875,5.5429601 20.5891875,5.5429601 C21.3257813,7.38309589 20.8625625,8.74127147 20.7233438,9.07956244 C21.5890312,10.0142478 22.1113125,11.2070367 22.1113125,12.6662819 C22.1113125,17.7999517 18.9548438,18.9300942 15.9477187,19.2608675 C16.4320312,19.673499 16.8640312,20.4887385 16.8640312,21.7358209 C16.8640312,23.5224984 16.8471562,24.9633673 16.8471562,25.4018927 C16.8471562,25.7593952 17.0901562,26.1753678 17.7752813,26.0442279 C23.135625,24.2734208 27,19.2675498 27,13.3654166 C27,5.983156 20.955375,0 13.4991562,0 C6.044625,0 0,5.983156 0,13.3654166 Z"
        fill="#020202"
      />
    </Svg>
  );
}
