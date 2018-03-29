import React from 'react';
import { storiesOf } from '@storybook/react';

import VideoPlayer from "../src";

storiesOf('VideoPlayer', module)
  .add("Default View", () => (
    <VideoPlayer/>
    )
  );