export const doFetch = async(url, method="GET", body={}) => {
  
    let newFetch = {loaded: false, solve: null, err: null};
      
    let result;

    if( method === "GET" ) result = await fetch(`${ url }`);
    else result = await fetch(`${ url }`, { 
        
        method: `${ method }`,
        body: JSON.stringify( body ), 
        headers:{'Content-Type': 'application/json'}}

    );    
    
    const solve = await result.json();
                
    if (solve.err) return newFetch = {...newFetch, err: solve.err};
    newFetch = {loaded: true, solve: solve, err: null};
    
    return newFetch;
        
}