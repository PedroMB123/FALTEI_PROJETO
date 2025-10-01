import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    // Carrega usuário salvo ao iniciar o app
    useEffect(() => {
        async function loadUser() {
            try {
                const json = await AsyncStorage.getItem("user");
                if (json) {
                    setUser(JSON.parse(json));
                }
            } catch (error) {
                console.error("Erro ao carregar usuário do AsyncStorage:", error);
            }
        }
        loadUser();
    }, []);

    // 🔑 Login
    const login = async (userData) => {
        try {
            setUser(userData);
            await AsyncStorage.setItem("user", JSON.stringify(userData));
        } catch (error) {
            console.error("Erro ao salvar usuário no AsyncStorage:", error);
        }
    };

    // 🚪 Logout
    const logout = async () => {
        try {
            setUser(null);
            await AsyncStorage.removeItem("user");
        } catch (error) {
            console.error("Erro ao remover usuário do AsyncStorage:", error);
        }
    };

    // ✏️ Atualizar dados do usuário já logado
    const updateUser = async (data) => {
        try {
            if (!user) return; // evita erro se não houver usuário
            const updated = { ...user, ...data };
            setUser(updated);
            await AsyncStorage.setItem("user", JSON.stringify(updated));
        } catch (error) {
            console.error("Erro ao atualizar usuário no AsyncStorage:", error);
        }
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
