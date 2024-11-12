'use client'

import { usePathname } from 'next/navigation'
import { Header } from '@/components/header/header'
import { Footer } from '@/components/footer'
import { useEffect } from 'react'


export function ConditionalLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const isToolPage = pathname === '/tool'

    useEffect(() => {
        document.body.style.background = 'transparent'
    }, [])


    return (
        <>
            {!isToolPage && <Header />}
            {children}
            {!isToolPage && <Footer />}
        </>
    )
}