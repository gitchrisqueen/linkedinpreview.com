'use client'

//import { useRouter } from 'next/router'
import { Tool } from '@/components/tool/tool'
import { Hero } from '@/components/home/hero'

export default function ToolPage() {
    //const router = useRouter()
    //const isToolPage = router.pathname === '/tool'

    return (
        <>
            {
                //!isToolPage && <Hero />
            }
            <Tool />

        </>
    )
}