import { useState } from 'react';
import { Input, Button } from '@material-tailwind/react';
import { useAldoAlert } from '../context/AldoAlertProvider';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { showAldoAlert } = useAldoAlert();

    const handleLogin = () => {
        // Perform login authentication here
        // For demonstration purposes, let's just show a success message

        showAldoAlert('Hello, this is a toast message!', 'info');

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="/vite.svg"
                        alt="Vite Logo"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <Input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div>
                        <Button
                            color="blue"
                            buttonType="filled"
                            size="lg"
                            block={true}
                            onClick={handleLogin}
                        >
                            Sign in
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
