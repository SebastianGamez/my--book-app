import React, { useState, useEffect } from 'react';

import { handleOnsubmitNewLoan } from '../helpers/handleOnSubmit';
import { reserveBook } from '../helpers/reserveBook';
import { doFetch } from '../helpers/doFetch';
import { server } from '../config/index';

import "../css/newLoan.css";

export const NewLoan = () => {

    const [inputValue, setInputValue] = useState("");
    const [books, setBooks] = useState([]);

    useEffect(() => {doFetch(`${ server }/my-book/loans`).then(({ solve }) => setBooks(solve))}, [books]);
  
    return <div className="body-main">
      
    <section className="main__searcher--container">
                <div className="searcher__books--container">

                    <form className="books__form">
                        <div className="form__books--conatiner">
                            <input 
                            className="books__input"
                            placeholder="Search a book"
                            value={ inputValue }
                            onChange = { e => setInputValue(e.target.value) }
                            />
                        </div>
                        <div className="form__submit--container">
                            <button className="submit__button--form" onClick={ e => handleOnsubmitNewLoan(e, inputValue, setBooks) } >
                                <span className="button__image--submit"></span>
                            </button>
                        </div>
                    </form>
                    <div className="books__results--container">
                        <ul className="results__list">
                            
                            {books.map(({title, _id}) => {

                                return <div className="list__books--container" key={_id}>
                                <li className="books__list--results" key={_id} >{title}</li>
                                <span className="books__reserve" alt="Reserve the book" id={title} onClick={ (e) => reserveBook(e, setBooks) } ></span>
                            </div>

                            })}

                        </ul>
                    </div>
                </div>
    </section>

  </div>;
};
