import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {switchTheme} from './redux/themeState'

export default function Theme() {
  const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();
  // theme comes from the reducer attribute name 
  // in configureStore

  return (
    <div>
      <ul>
        {theme}
        <button
            onClick={() => {
                // alert('Theme Changed');
                dispatch(switchTheme());
            }}
        >Change Theme</button>
        
      </ul>
    </div>
  );
}

