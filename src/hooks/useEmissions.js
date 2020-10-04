import { useState, useEffect } from 'react';
import api from '../api';

const useEmissions = () => {
  const [emissionsData, setEmissionsData] = useState([]);
  useEffect(() => {
    api.getEmissions()
      .then(res => {
        setEmissionsData(res.data)
      })
      .catch(e => {
        console.error(e);
      })
  }, [setEmissionsData])

  return emissionsData;
}

export default useEmissions;
