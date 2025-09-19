import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Ao iniciar o app, carrega usuário salvo no AsyncStorage
        async function loadUser() {
            const json = await AsyncStorage.getItem("user");
            if (json) setUser(JSON.parse(json));
        }
        loadUser();
    }, []);

    const login = async (userData) => {
        setUser(userData);
        await AsyncStorage.setItem("user", JSON.stringify(userData));
    };

    const logout = async () => {
        setUser(null);
        await AsyncStorage.removeItem("user");
    };

    const updateUser = async (data) => {
        const updated = { ...user, ...data };
        setUser(updated);
        await AsyncStorage.setItem("user", JSON.stringify(updated));
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
