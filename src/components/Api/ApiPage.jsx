import React from 'react';
import List from '../List/List';
import { useApiCall } from '../../hooks/xfilesMane.jsx';
import { usePagination } from '../../hooks/paginationHook.jsx';


const ApiPage = () => {

  const {
    next,
    prev,
    page
  } = usePagination();

  const {
    characters,
    loading
  } = useApiCall(page);
  if(loading) return <h1>loading</h1>;
  
 


  return (
    <div>
      <ul>
        < List characters={characters}/>
      </ul>
      <button id="previous" onClick={() => prev()} > previous</button>
      <button id="next" onClick={() => next()} >next</button>
    
    </div>
  );
};




export default ApiPage;
