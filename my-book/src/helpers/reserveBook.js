import { doFetch } from "./doFetch";
import { server } from '../config/index';

export const reserveBook = async(e, setBooks) => {
        
    e.preventDefault()

    let borrowedEnd = () => {

       let res = new Date();
       res.setDate(res.getDate() + 7)
       return res

    }

    const data = { token: sessionStorage.getItem("token"), date: new Date().toDateString(), newDate: borrowedEnd().toDateString() }

    const { solve } = await doFetch(`${ server }/my-book/loans/reserve/${e.target.id}/${sessionStorage.getItem("id")}`, 'PUT', data);

    alert(`Book reserved: ${solve.title}`);
    
    await doFetch(`${ server }/my-book/loans`).then(({ solve }) => setBooks(solve));

}
