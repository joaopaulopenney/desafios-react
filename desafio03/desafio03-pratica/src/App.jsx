import { useState } from 'react'
import './App.css'

function App() {

  const [list, setList] = useState([])

  const [deletedList, setDeletedList] = useState([])

  const updateList = (item) => {
    setList([...list, item])
  };

  const undoList = () => {
    if (list.length > 0) {
      let listArray = [...list];
      setDeletedList([...deletedList, listArray[listArray.length - 1]]);

      listArray.pop();

      setList(listArray);
    }
  }

  const redoList = () => {
    if (deletedList.length > 0) {
      let listArray = [...list];

      listArray.push(deletedList[deletedList.length - 1]);
      deletedList.pop();

      setList(listArray);
    }
  }

  return (
    <>
      <button onClick={undoList}>Desfazer</button>
      <button onClick={redoList} style={{ left: "15%" }}>Refazer</button>
      <div id='page' onClick={(e) => {
        updateList({x: e.nativeEvent.x, y: e.nativeEvent.y});
        }}>
        {list.map((item, key) => (
          <span key={key} className='dot' style={{ top: `${item.y}px`, left: `${item.x}px` }} />
        ))}
    </div>
    </>
  )
}

export default App
