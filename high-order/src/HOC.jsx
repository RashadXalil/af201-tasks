import React, { useState } from 'react'

function UpdatedComponent(OriginalComponent) {
  function NewComponent() {
    const [money, setMoney] = useState(10)
    const increaseHandler = () => {
      setMoney(money * 2)
    }
    return <OriginalComponent increaseHandler={increaseHandler} money={money} />
  }
  return NewComponent
}
export default UpdatedComponent
