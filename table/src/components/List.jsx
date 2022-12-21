import React, { useState } from 'react'
import Item from './Item'

const List = () => {
  let Users = [
    {
      id: 1,
      name: 'Rashad',
      surname: 'Khalilov',
    },
    {
      id: 2,
      name: 'SULEYMAN',
      surname: 'Dadashow',
    },
    {
      id: 3,
      name: 'Ali',
      surname: 'Aliyev',
    },
    {
      id: 4,
      name: 'Fd',
      surname: 'Memmedli',
    },
    {
      id: 5,
      name: 'Anar',
      surname: '00',
    },
    {
      id: 6,
      name: 'Vusal',
      surname: 'Umudov',
    },
    {
      id: 7,
      name: 'Ferid',
      surname: 'Qarayev',
    },
    {
      id: 8,
      name: 'Gulxar',
      surname: 'Sirmemmedquluzade',
    },
    {
      id: 9,
      name: 'Niyaz',
      surname: 'Hesenov',
    },
    {
      id: 10,
      name: 'Vahid',
      surname: 'Abbasov',
    },
  ]
  const [usersState, setUserState] = useState(Users)
  function deleteUser(id) {
    let target = Users.find((user) => user.id === id)
    let indexOfTarget = Users.indexOf(target)
    Users.splice(indexOfTarget, 1)
    setUserState([...Users])
  }
  return (
    <table>
      <thead>
        <tr>
          <td>id</td>
          <td>Name</td>
          <td>Surname</td>
        </tr>
      </thead>
      <tbody>
        {usersState.map((user) => {
          return <Item key={user.id} deleteUser={deleteUser} user={user} />
        })}
      </tbody>
    </table>
  )
}

export default List
