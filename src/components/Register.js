import React from 'react';

export const Register = () => {
  return (
    <form className={'registre-form'}>
      <label>
        Text:
        <input type={'text'} />
      </label>
      <h2 style={{color: 'white', textAlign: 'center'}} >Пол</h2>
      <div className='cont' >
      <label for={'man'}>
        Мужской
        <input style={{width: 20}} name={'gender'}  type={'radio'} id={'man'} value={'m'} />
      </label>
      <label for={'woman'}>
        Женский
        <input style={{width: 20}} name={'gender'}  type={'radio'} id={'woman'}  value={'w'} />
      </label>
      </div>
      <label>
        Принимаете ли Вы условия пользовательского соглашения?
        <input style={{width: 20}} type={'checkbox'} />
      </label>
      <input type={'submit'} value={'log in'} />
    </form>
  )
}
