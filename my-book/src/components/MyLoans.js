import React from 'react';
import { useState, useEffect } from 'react';

import "../css/myLoans.css";

export const MyLoans = () => {

  const [histories, setHistories] = useState([]);

  useEffect(() => {
      
    fetch(`http://localhost:4000/my-book/loans/history/${sessionStorage.getItem("id")}`)
    .then( result => result.json())
    .then(setHistories);

  }, [histories]);

  const cancelReserveBook = e => {
        
    e.preventDefault();
    
    const data = {
      userId: sessionStorage.getItem("id"),
      title: e.target.id.split("&&&")[1],
      token: sessionStorage.getItem("token")

    }

    fetch(`http://localhost:4000/my-book/loans/cancel/reserve/${e.target.id.split("&&&")[0]}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
      });

      alert("Reserve cancelled");
      setHistories([]);

  }

  return <div className="body-main">
    <section className="main__history--container">
      <div className="history__table--container">
        <table className="table__table--history" cellSpacing="0" cellPadding="0">
          <thead className="table__thead--container">
            <tr className="table__row--history">
              <th className="table__head--history">TITLE</th>
              <th className="table__head--history">DATE</th>
              <th className="table__head--history">STATE</th>
              <th className="table__head--history-remove">CANCEL</th>
            </tr>
          </thead>
          <tbody className="table__tbody--history">
            
            {histories.map(({date, state, visible, title, _id}) => {

              if(visible){

                return <tr className="table__row--history" key={_id}>
                <td className="table__data--history">{title}</td>
                <td className="table__data--history">{date}</td>
                <td className="table__data--history">{state}</td>
                <td className="table__data--history--remove"><span className="data__delete--history" onClick={cancelReserveBook} id={`${_id}&&&${title}`}></span></td>
              </tr>

              }

            })}
          
          </tbody>
        </table>
      </div>
    </section>
  </div>;
};
