import React from 'react';



export const Register = () => {
  return (
    <form className={'registre-form'}>
      <label>
        Text:
        <input type={'text'} />
      </label>
      <label>
        Checkbox:
        <input style={{width: 20}} type={'checkbox'} />
      </label>
      <label>
        Radio:
        <input style={{width: 20}} type={'radio'} />
      </label>
      <input type={'submit'} value={'log in'} />
    </form>
  )
}
