import { createClassFromSpec } from 'react-vega';
import { SPEC, DATA } from './config';

export default createClassFromSpec({
  mode: 'vega',
  spec: {
    ...SPEC,
    data: [
      {
        name: 'table',
        values: DATA,
      },
    ],
  },
});
