import React from 'react';
import short from 'short-uuid';
import PalettePreview from '../PalettePreview/PalettePreview';
import { PaletteList as StyledList } from './PalettePicker.style';
import { settingsMethod, settingsSelector } from '../../store/useSettingsStore';

const paletteCollection = [
  ['#3E494D', '#93515D', '#E85165'],
  ['#2aa1cc', '#437237', '#2e2652'],
  ['#408ba7', '#39ac17', '#4b2b2f'],
  ['#408ba7', '#39ac17', '#4b2b2f', '#2e2652'],
  ['#355a68', '#748a6d', '#9c1928', '#2e2652'],
  ['#355a68', '#748a6d', '#9c1928', '#2e2652'],
  ['#355a68', '#748a6d', '#9c1928', '#2e2652'],
  ['#355a68', '#748a6d', '#9c1928', '#2e2652'],
];

const PaletteList = React.forwardRef((props, ref) => {
  // Method
  const applyPalette = settingsMethod('applyPalette');

  // State
  const paletteList = settingsSelector('paletteList');

  // const applyPalette = (colors) => {
  //   console.log(colors);
  // };

  return (
    <StyledList ref={ref}>
      {
        paletteList?.length > 0 && paletteList.map((colors) => {
          return (
            <PalettePreview
              onClick={() => applyPalette(colors)}
              key={short.generate()}
              colors={colors}
            />
          );
        })
      }
    </StyledList>
  );
});

export default PaletteList;
