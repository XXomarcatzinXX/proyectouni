"use client";
import { useState } from 'react';
import React from 'react'
import { useRouter } from "next/navigation"

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost/backenduni/api.php/?login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, contrasena }),
      });
  
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
  
      const data = await response.json();
      setMensaje(data);
      router.push('/');
    } catch (error) {
      console.error('Error al loguear el usuario:', error);
      setMensaje('Error al loguear usuario');
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" className='text-black' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
        <input type="password" className='text-black' placeholder="Contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required /><br />
        <button type="submit">Iniciar Sesión</button>
        <a href='register_usuarios'>Registrarse</a>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}
