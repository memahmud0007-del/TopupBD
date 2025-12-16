import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { doc, setDoc } from 'firebase/firestore';
import { UserProfile, UserRole } from '../types';

export const Login: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (err) {
            setError("Failed to login. Check credentials.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <h1 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-200">Welcome Back</h1>
            <form onSubmit={handleLogin} className="w-full space-y-4">
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white outline-none focus:border-orange-500" 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white outline-none focus:border-orange-500" 
                    required 
                />
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                <button 
                    disabled={loading}
                    className="w-full bg-orange-600 py-3 rounded-lg font-bold text-white shadow-lg hover:bg-orange-700 transition-colors"
                >
                    {loading ? <Loader2 className="animate-spin mx-auto" /> : 'Login'}
                </button>
            </form>
            <p className="mt-4 text-sm text-slate-400">
                Don't have an account? <span className="text-orange-500 cursor-pointer" onClick={() => navigate('/register')}>Register</span>
            </p>
        </div>
    );
};

export const Register: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const userRef = doc(db, 'users', user.uid);
            const newProfile: UserProfile = {
                uid: user.uid,
                email: user.email,
                displayName: 'Gamer',
                role: email === 'admin@topup.com' ? UserRole.ADMIN : UserRole.USER,
                balance: 0,
                createdAt: Date.now(),
                phone: phone
            };
            await setDoc(userRef, newProfile);

            navigate('/');
        } catch (err: any) {
            setError(err.message || "Failed to register.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <h1 className="text-2xl font-bold mb-6 text-white">Create Account</h1>
            <form onSubmit={handleRegister} className="w-full space-y-4">
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white outline-none focus:border-orange-500" 
                    required 
                />
                <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white outline-none focus:border-orange-500" 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white outline-none focus:border-orange-500" 
                    required 
                />
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                <button 
                    disabled={loading}
                    className="w-full bg-orange-600 py-3 rounded-lg font-bold text-white shadow-lg hover:bg-orange-700 transition-colors"
                >
                    {loading ? <Loader2 className="animate-spin mx-auto" /> : 'Register'}
                </button>
            </form>
            <p className="mt-4 text-sm text-slate-400">
                Already have an account? <span className="text-orange-500 cursor-pointer" onClick={() => navigate('/login')}>Login</span>
            </p>
        </div>
    );
};