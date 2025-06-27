"use client";
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async () => {
    await axios.post('/api/register', form);
    alert('Registered!');
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <input name="name" placeholder="Name" onChange={handleChange} className="border p-2 w-full mb-2" />
      <input name="email" placeholder="Email" onChange={handleChange} className="border p-2 w-full mb-2" />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2 w-full mb-4" />
      <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded">Register</button>
    </div>
  );
}
