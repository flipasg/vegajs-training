import { Vega } from 'react-vega';
import { DATA, SPEC } from './config';

export default function LineChart() {
  return (
    <Vega
      spec={SPEC}
      data={{
        table: DATA,
      }}
      signalListeners={{
        hover: () => {
          console.log('hover');
        },
      }}
    />
  );
}
