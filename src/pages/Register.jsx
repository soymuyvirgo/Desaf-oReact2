import React, { useState } from 'react';

const Register = () => {
    // Definimos el estado para los campos del formulario
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que la página se recargue

        // Validaciones
        if (!email || !password || !confirmPassword) {
            setError('Todos los campos son obligatorios.');
            setSuccess('');
            return;
        }

        if (password.length < 6) {
            setError('La contraseña debe tener al menos 6 caracteres.');
            setSuccess('');
            return;
        }

        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden.');
            setSuccess('');
            return;
        }

        // Si todo está bien, mostrar mensaje de éxito
        setError('');
        setSuccess('Registro exitoso.');
    };

    return (
        <div className="container">
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirmar Contraseña</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                    />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
        </div>
    );
};

export default Register;
