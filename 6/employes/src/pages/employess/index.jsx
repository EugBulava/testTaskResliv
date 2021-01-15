import React, { useEffect, useRef, useState } from 'react';
import { getNewId } from '../../utils/getNewId';
import styles from './styles.module.css';

export const Employees = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch("https://reqres.in/api/users?per_page=12")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  const handleDeleteClick = (event) => {
    setItems(items.filter((el) => el.id !== Number(event.target.parentElement.id)));
  }

  const input = useRef(null);

  const handleAddButton = () => {
    const name = input.current.value;
    setItems([...items, {'id': getNewId(items.map((el) => el.id)), 'first_name': name}])
  }

  if(error) {
    return <div>Error: {error.message}</div>
  } else if(!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return <ul className={styles.list}>
      {items.map(item => (
          <li key={item.id} id={item.id}>
            {item.first_name}
            <button type="button" onClick={handleDeleteClick}>Delete</button>
          </li>
        ))}
        <form>
          <input ref={input} type="text"/>
          <button type="button" onClick={handleAddButton}>Add</button>
        </form>
    </ul>
  }
}