import { useState } from 'react'

import './App.css'
import { TrainingRecords } from './components/TrainingRecords';
import { ShowInfo } from './components/showInfo';

function App() {
  const [records, setRecords] = useState([])

  function callback(data) {
    const _records = [...records];
    const index = records.findIndex((item) => item.date === data.date);
    if (index !== -1) {
      _records[index].distance = parseFloat(data.distance) + parseFloat(_records[index].distance)
    } else {
      _records.push(data);
    }
    
    setRecords(_records);
  }

  function deleteCallback(data) {
    const index = records.findIndex((item) => item.date === data);
    const _records = [...records];
    _records.splice(index, 1);
    setRecords(_records);
  }

  return (
    <>
      <TrainingRecords callback={callback} />
      <ShowInfo callback={deleteCallback} data={records}/>
    </>
  )
}

export default App
