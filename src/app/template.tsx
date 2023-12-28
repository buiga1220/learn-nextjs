import Navbar from "../../components/layout/Navbar";
import React from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}
