import { useState, useEffect } from 'react';
import api from '../api';

const useSweden = () => {
  const [swedenData, setSwedenData] = useState([]);
  useEffect(() => {
    api.getSweden()
      .then(res => {
        setSwedenData(res.data)
      })
      .catch(e => {
        console.error(e);
      })
  }, [setSwedenData])

  return swedenData;
}

export default useSweden;