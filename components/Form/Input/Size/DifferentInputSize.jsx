import React from 'react'

const DifferentInputSize = () => {
  return (
    <div className="panel my-2">
    <label htmlFor="fullname">Different Input Sizes</label>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
            <label htmlFor="inputLarge">Large Input</label>
            <input id="inputLarge" type="text" placeholder="Large Input" className="form-input form-input-lg" />
        </div>
        <div>
            <label htmlFor="inputDefault">Default Input</label>
            <input id="inputDefault" type="text" placeholder="Default Input" className="form-input" />
        </div>
        <div>
            <label htmlFor="inputSmall">Small Input</label>
            <input id="inputSmall" type="text" placeholder="Small Input" className="form-input form-input-sm" />
        </div>
    </div>
  </div>
  )
}

export default DifferentInputSize
