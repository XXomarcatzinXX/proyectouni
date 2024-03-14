
"use client";
import { useState } from 'react';
export default function Register() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await fetch('http://localhost/backenduni/api.php/?registro', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre, email, contrasena }),
        });
    
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
    
        const data = await response.json();
        setMensaje(data);
        } catch (error) {
        console.error('Error al registrar usuario:', error);
        setMensaje('Error al registrar usuario');
        }
    };
  


  return (
    <div>
      <h1>Registro de Usuario</h1>
      <form onSubmit={handleSubmit}>
        <input className='text-black'  type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required /><br />
        <input className='text-black' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
        <input className='text-black' type="password" placeholder="Contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required /><br />
        <button type="submit">Registrar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}
