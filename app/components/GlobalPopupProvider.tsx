'use client'

import React, { useState, useEffect } from 'react';
import { Popup } from './popup';

export default function GlobalPopupProvider({ children }: { children: React.ReactNode }) {
    const [popupConfig, setPopupConfig] = useState<{ type: string; data?: any } | null>(null);

    useEffect(() => {
        window.showPopup = (type?: string, data?: any) => {
            if (!type) {
                setPopupConfig(null);
            } else {
                setPopupConfig({ type, data });
            }
        };
    }, []);

    return (
        <>
            {popupConfig && <Popup type={popupConfig.type} data={popupConfig.data} />}
            {children}
        </>
    );
}
