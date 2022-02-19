import { doFetch } from "./doFetch";
import { server } from '../config/index';


export const handleOnSubmitRegister = async(e, setRegistred) => {
        
    e.preventDefault();

    const data = {
        username: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        confirm_password: document.getElementById("confirm_password").value
    }
    
    const { loaded, err, solve } = await doFetch(`${ server }/my-book/register`, "POST", data);

    if(!loaded) return alert(err);
    alert(solve);
    setRegistred(true);

}


export const handleOnsubmitNewLoan = async(e, inputValue, setBooks) => {
          
    e.preventDefault()

    const {loaded, solve } = await doFetch(`${ server }/my-book/loans/search/${inputValue}`)

    if (!loaded) return setBooks([]);
    let results = [solve]
    setBooks(results);

}



export const handleOnSubmitLogin = async (e, setIsAuth, emailInput, passwordInput) => {
        
    e.preventDefault();

    const body = {email: emailInput, password: passwordInput};

    const { solve, err, loaded } = await doFetch(`${ server }/my-book/login`, "POST", body);

    if ( !loaded ) return alert(err);
    sessionStorage.setItem("username", solve.username);
    sessionStorage.setItem("token", solve.token);
    sessionStorage.setItem("id", solve.id);
    sessionStorage.setItem("auth", JSON.stringify(true));
    alert(`Welcome, ${solve.username}. You are logged`);
    setIsAuth(true);

}
