'use client'
import { useState } from 'react'
import { resolve } from 'styled-jsx/css'

export default function RegisterPage () {
  const [data, setdData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const handleChange = (e) => {
    setdData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (data.password !== data.confirmPassword) {
      console.log('no coinciden los pass')
      return
    }
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        id: Math.random().toString(),
        name: data.name,
        lastName: data.lastName,
        email: data.email
      }),
      headers: {
        'content-type': 'aplication/json'
      }
    })

    const responseJson = await response.json()
    console.log(responseJson)
  }

  return (
    <section className='mt-5 w-full flex justify-center'>
      <form onSubmit={handleSubmit} className='w-full max-w-sm m-10 border rounded-md p-5'>
        <h3 className='text-2xl m-5 font-bold text-center'>Register</h3>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor='name'>
              Name
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
              id='name'
              name='name'
              type='text'
              placeholder='Jane'
              value={data.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor='lastName'>
              Last Name
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
              id='lastName'
              name='lastName'
              type='text'
              placeholder='Doe'
              value={data.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor='email'>
              Email
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
              id='email'
              name='email'
              type='email'
              placeholder='example@exp.com'
              value={data.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor='password'>
              Password
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
              id='password'
              name='password'
              type='password'
              placeholder='******************'
              value={data.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor='confirmPassword'>
              confirm Password
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
              id='confirmPassword'
              name='confirmPassword'
              type='password'
              placeholder='******************'
              value={data.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className='md:flex md:items-center'>
          <div className='md:w-1/3' />
          <div className='md:w-2/3'>
            <button className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' type='submit'>
              Register
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}
