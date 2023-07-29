import React, { useEffect, useState } from 'react'
import axios from 'axios'
const UserList = () => {
    const [users, setUser] = useState([])
    const [page, setPage] = useState(0)
    const [limit, setLimit] = useState(10)
    const [pages, setPages] = useState(0)
    const [rows, setRows] = useState(0)
    const [keyword, setKeyword] = useState("")

    useEffect(() => {
        console.log("asd")
        getUsers()
    }, [page, keyword])

    const getUsers = async () => {
        console.log('as')
        const response = await axios.get(`http://localhost:5000/users?search_query=${keyword}&page=${page}&limit=${limit}`)
        console.log(response)
        setUser(response.data.result)
        setPage(response.data.page)
        setPages(response.data.totalPage)
        setRows(response.data.totalRows)
    }


    return (
        <div className="container mt-5">
            <div className="columns">
                <div className="column is-center">
                    <form>
                        <div className='field has-addons'>
                            <div className="control is-expanded">
                                <input type="text" className='input' placeholder='Find something here...' />
                            </div>
                            <div className='control'>
                                <button type='submit' className='button is-info'>Search</button>
                            </div>
                        </div>
                    </form>
                    <table className='table is-striped is-bordered is-fullwidth mt-2'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <th>{user.id}</th>
                                    <th>{user.name}</th>
                                    <th>{user.email}</th>
                                    <th>{user.gender}</th>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserList