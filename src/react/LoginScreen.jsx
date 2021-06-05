import { useState, useEffect } from 'react';
import { api } from '../api/api';

export const LoginScreen = ({ history }) => {
    const [errorMessage, setErrorMessage] = useState(false);
    const [iconColor, setIconColor] = useState('blueIcon');
    const [save, setSave] = useState(false);

    const handleLogin = async (values) => {
        const { username, password } = values;

        api.login({ username, password }, (auth) => {
            if (!auth) {
                setErrorMessage(true);
            } else {
            }
        });
    };
};
