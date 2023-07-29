import React from 'react'

const UserList = () => {
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
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserList