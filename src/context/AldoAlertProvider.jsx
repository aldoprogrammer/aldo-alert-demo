import React, { createContext, useContext, useState } from 'react';

const ToastContext = createContext();

export const useAldoAlert = () => useContext(ToastContext);

export const AldoAlertProvider = ({ children }) => {
    const [toast, setToast] = useState(null);

    const showAldoAlert = (message, type = 'info') => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000); // Auto dismiss after 3 seconds
    };

    return (
        <ToastContext.Provider value={{ showAldoAlert }}>
            {children}
            {toast && (
                <div className={`fixed top-4 right-4 p-4 rounded-md shadow-lg
                ${toast.type === 'success' ? 'bg-white text-black' : 
                                toast.type === 'danger' ? 'bg-red-700 text-white' :
                                toast.type === 'warning' ? 'bg-yellow-700' :
                                 'bg-green-700 text-white'}`}>
                    <p>{toast.message}</p>
                </div>
            )}
        </ToastContext.Provider>
    );
};
