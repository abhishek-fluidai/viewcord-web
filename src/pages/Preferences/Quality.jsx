import React from 'react';
import Select from '../../components/common/Select';
import { useSelector, useDispatch } from 'react-redux';
import { switchQuality } from '../../redux/preference';

const Quality = () => {
    const quality = useSelector((state) => state.preference.quality);
    const dispatch = useDispatch();

    return (
        <Select label="Quality">
        {[144, 240, 360, 480, 720, 1080, 1440, 2160, 4320].map((res) => (
          <option
            key={res}
            selected={quality == res ? true : false}
            onClick={() => {
                dispatch(switchQuality(res));
            }}
          >
            {res}p
          </option>
        ))}
      </Select>

    )   

}

export default Quality;