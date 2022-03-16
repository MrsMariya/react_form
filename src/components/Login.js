import React from 'react';
import {useForm} from 'react-hook-form';

export const Login = () => {
  const {
    register,
    formState:{
     errors,
     isValid,
    },
    handleSubmit,
    reset
  } = useForm({
    mode: 'onBlur'
  });
  
const onSubmit = (data) => {
  console.log(JSON.stringify(data))
  reset()
}
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          login:
          <input {...register('login', {
            required: 'Необходимо заполнить поле!',
            minLength: {
              value: 9,
              message: 'Не менее 9 символов!'
            }
          })}
          />
        </label>
        <div style={{height: 20}}>
          {errors?.login && <p>{errors?.login?.message || 'Error!'}</p>}
        </div>
        <label>
          password:
          <input {...register('password', {
            required: 'Необходимо заполнить поле!',
            minLength: {
              value: 9,
              message: 'Не менее 9 символов!'
            }
          })}
          />
        </label>
        <div style={{height: 20}}>
          {errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
        </div>
        <input type={'submit'} value={'log in'} disabled={!isValid} />
      </form>
    </div>
  )
}
