import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const register = e => {
        e.preventDefault();
        console.log({ name, email });
    }

    return (
        <form onSubmit={register}>

            <label>Name:</label>
            <iinput
            value={name}
            onChange={e => setName(e.target.value)}
            type='text'
            placeholder='John Doe'
            />

            <label>Email:</label>
            <iinput
            value={email}
            onChange={e => setEmail(e.target.value)}
            type='email'
            placeholder='johnd@email.com'
            />

            <button>Register</button>
        </form>
    )
}

export default Form;