import React from 'react';
import { useState, useEffect } from 'react';

import "../css/newLoan.css";

export const NewLoan = () => {
  
    const [inputValue, setInputValue] = useState("");
    const [books, setBooks] = useState([]);

    useEffect(() => {
      
        fetch("http://localhost:4000/my-book/loans")
        .then( result => result.json())
        .then(setBooks);

    }, [books]);
    
    const handleOnsubmit = (e) => {
        e.preventDefault()

        fetch(`http://localhost:4000/my-book/loans/search/${inputValue}`)
        .then( result => result.json())
        .then(result => {

            if (result){
                
                let results = [result]
                setBooks(results);

            }else{
                setBooks([]);
            }

        });

    }

    const reserveBook = e => {
        
        e.preventDefault()
    
        let borrowedEnd = () => {

           let res = new Date();
           res.setDate(res.getDate() + 7)
           return res

        }

        const data = {
            date: new Date().toDateString(),
            newDate: borrowedEnd().toDateString()
        }
    
        fetch(`http://localhost:4000/my-book/loans/reserve/${e.target.id}/${sessionStorage.getItem("id")}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers:{
              'Content-Type': 'application/json'
            }
          })
            .then( result => result.json())
            .then( solve =>{
    
                console.log(solve);
                alert(`Book reserved: ${solve.title}`);
                setBooks([]);
    
            });
    
    }
    
    const handleOnchange = (e) => {
        setInputValue(e.target.value)
    }
  
    return <div className="body-main">
      
    <section className="main__searcher--container">
                <div className="searcher__books--container">

                    <form className="books__form">
                        <div className="form__books--conatiner">
                            <input 
                            className="books__input"
                            placeholder="Search a book"
                            value={ inputValue }
                            onChange = { handleOnchange }
                            />
                        </div>
                        <div className="form__submit--container">
                            <button className="submit__button--form" onClick={ handleOnsubmit } >
                                <span className="button__image--submit"></span>
                            </button>
                        </div>
                    </form>
                    <div className="books__results--container">
                        <ul className="results__list">
                            
                            {books.map(({title, _id}) => {

                                return <div className="list__books--container" key={_id}>
                                <li className="books__list--results" key={_id} >{title}</li>
                                <span className="books__reserve" alt="Reserve the book" id={title} onClick={ reserveBook } ></span>
                            </div>

                            })}

                        </ul>
                    </div>
                </div>
    </section>

  </div>;
};
