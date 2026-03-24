import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check active sessions and subscribe to auth changes
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null);
            if (session?.user) fetchProfile(session.user.id);
            setLoading(false);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
            if (session?.user) {
                fetchProfile(session.user.id);
                // Log activity if sign in
                if (_event === 'SIGNED_IN') {
                    logActivity(session.user.id, 'SIGN_IN');
                }
            } else {
                setProfile(null);
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    const fetchProfile = async (userId) => {
        const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', userId)
            .single();
        
        if (data) setProfile(data);
    };

    const logActivity = async (userId, type, details = {}) => {
        await supabase.from('user_activity').insert({
            user_id: userId,
            activity_type: type,
            details: details
        });
    };

    const login = async (email, password) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) throw error;
        return data;
    };

    const signup = async (name, email, password) => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: window.location.origin,
            },
        });

        if (error) throw error;

        if (data.user) {
            // Create profile
            await supabase.from('profiles').insert({
                id: data.user.id,
                full_name: name,
            });
            await logActivity(data.user.id, 'SIGN_UP', { name });
        }
        return data;
    };

    const logout = async () => {
        if (user) await logActivity(user.id, 'SIGN_OUT');
        await supabase.auth.signOut();
    };

    return (
        <AuthContext.Provider value={{ user, profile, login, signup, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
