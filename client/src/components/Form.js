import React, { useState } from 'react';
import useForm from './useForm';

const Form = () => {
    const [values, handleChange] = useForm();

    const register = e => {
        e.preventDefault();
        console.log(values);
    }

    return (
        <form onSubmit={register}>

            <label>Name:</label>
            <input
            value={values.name || ''}
            onChange={handleChange}
            name='name'
            type='text'
            placeholder='John Doe'
            />

            <label>Email:</label>
            <input
            value={values.email || ''}
            onChange={handleChange}
            name='email'
            type='email'
            placeholder='johnd@email.com'
            />

            <button>Register</button>
        </form>
    )
}

export default Form;