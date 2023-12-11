import React, { useContext, useState } from 'react'
import CoinContext from '../context/CoinContext';
import { SearchCoin } from '../context/CoinAction';
import CarcContainer from '../component/CarcContainer';



const Search = () => {

  const { dispatch } = useContext(CoinContext);

  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await SearchCoin(text);

    dispatch({
      type: "SEARCH_COINS",
      payload: data,
    });

    setText("");
  }

  return (
    <>


  
      <form className="d-flex m-2" role="search" onSubmit={handleSubmit}>
        <input className="form-control me-2 " type="search" placeholder="Search any coin at here" aria-label="Search" onChange={(e) => setText(e.target.value)}
        value={text}/>
        <button className="btn btn-success w-25" type="submit">Search</button>
      </form>
  
      <CarcContainer/>
    </>
  )
}

export default Search;
