import React, {useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../Components/Loader';
import '../index.css';

const Users = () => {

    const [country, setCountry] = useState('IN');
    let baseUrl = `https://api.randomuser.me/?results=5&nat=${country}`;
    const [users, setUsers] = useState([]);
    const [loader, setLoader] = useState(false);
    const [url, setUrl] = useState(baseUrl);
    
    useEffect( () => {
        getUsers();
    }, [url] ); // 2nd args pass-> on the update of url need to call getuser(_)

    const getUsers = () => {
        setLoader(true);
        axios(url).then( res => {
            {/* set users with previous state by spread operator means (old users + new users)  */}
            setUsers([...users, ...res.data.results]);
            setLoader(false);
        }).catch( () => {
            console.log('fetch error');
        });
    }    

    const handleChange = e => {
        setCountry(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setUrl(`https://api.randomuser.me/?results=5&nat=${country}`);
    }

    return <div>
        <h4>Users List</h4>
        {/* load more users */}
        <form onSubmit={handleSubmit} className="form-user">
            <select onChange={handleChange}>
                <option>IN</option>
                <option>US</option>
                <option>UK</option>
            </select>
            <button type='submit'>Load More</button>
        </form>
        { !loader ? 
            <>
                <table className='users-list'>
                    { users && users.map( user => (
                        <tr key={user.id.value}>
                            <td>{user.name.first} {user.name.last}</td>
                            <td>{user.cell}</td>
                        </tr>
                    )) }
                </table> 
            </> : <Loader message="Please Wait..." />
        }
    </div>
};

export default Users;