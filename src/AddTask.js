import React, {useState, useCallback} from 'react'

export default function AddTask({ add }) {
  const minDate = new Date().toISOString().slice(0,10);
  const [text, setText] = useState('');
  const [checked, setChecked] = useState(false);
  const [date, setDate] = useState(minDate);

  const handleText = e => setText(e.target.value);

  const handleDate = e => setDate(e.target.value);

  const handleClick = useCallback(() => {
    const result = add(text, date, checked);
    if (!result) return false;
    setText('');
    setDate(minDate);
  }, [text, date, checked]);

  let maxDate = (minDate.slice(0,4) * 1 + 1)+"-12-31";
  return (
    <div className="form">
        <input type="text" placeholder='Dodaj zadanie' value={text} onChange={handleText}/>
        <br/>
        <label htmlFor="date">Do kiedy zrobić?</label>
        <input type="date" value={date} min={minDate} max={maxDate} onChange={handleDate} />
        <br/>
        <button onClick={handleClick}>Dodaj</button>
    </div>
  )
}