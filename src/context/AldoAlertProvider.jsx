import React, { createContext, useContext, useState } from 'react';
import './AldoAlertProvider.css'; // Import your CSS file

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
                <div className={`toast-container`}>
                    <div className={`toast ${toast.type === 'success' ? 'toast-success' : 
                                                toast.type === 'danger' ? 'toast-danger' :
                                                toast.type === 'warning' ? 'toast-warning' :
                                                'toast-info'}`}>
                        <p>{toast.message}</p>
                    </div>
                </div>
            )}
        </ToastContext.Provider>
    );
};
