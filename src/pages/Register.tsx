import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de tener React Router configurado

const Register: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        console.log('Registrarse con:', { email, username, password });
        // Aquí puedes manejar la lógica de registro
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-2xl font-bold mb-6 text-center">Registrarse</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Nombre de Usuario:
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Correo Electrónico:
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Contraseña:
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Confirmar Contraseña:
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Registrarse
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-gray-600">¿Ya tienes una cuenta?</p>
                    <Link to="/login">
                        <button
                            className="mt-2 w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            Iniciar Sesión
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;

