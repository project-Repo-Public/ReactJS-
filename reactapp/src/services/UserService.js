import useSWR from 'swr';
 const fetcher  = () => fetch("http://localhost:8081/getall").then(res => res.json());

 const Swr =()=>{
    const {
        data: users,
        error,
        isValidating,
    }  = useSWR('https://restcountries.com/v2/all', fetcher);

    if(error) return <div>Error</div>
    if(isValidating) return <div>Loading...</div>
    return  
 }

 export default Swr;