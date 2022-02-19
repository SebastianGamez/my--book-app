import { doFetch } from "./doFetch";
import { server } from '../config/index';

export const cancelReserveBook = async (e, setHistories) => {
        
    e.preventDefault();
    
    const data = {
      
      userId: sessionStorage.getItem("id"),
      token: sessionStorage.getItem("token"),
      title: e.target.id.split("&&&")[1]

    }

    const {loaded, err, solve} = await doFetch(`${ server }/my-book/loans/cancel/reserve/${e.target.id.split("&&&")[0]}`, "PUT", data);

    if ( !loaded ) return alert(err);
    alert(solve);
    setHistories([]);

}