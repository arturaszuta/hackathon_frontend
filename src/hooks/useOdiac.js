import { useState, useEffect } from 'react';
import api from '../api';

const useOdiac = () => {
  const [odiacData, setOdiacData] = useState([]);
  useEffect(() => {
    api.getOdiac()
      .then(res => {
        setOdiacData(res.data)
      })
      .catch(e => {
        console.error(e);
      })
  }, [setOdiacData])

  return odiacData;
}

export default useOdiac;
