'use client'

import React from 'react'
import {useSearchParams} from 'next/navigation'


import {EditorPanel} from './editor-panel'
import {PreviewPanel} from './preview-panel'
import { toNode } from './toNode'

export function Tool() {


    const searchParams = useSearchParams()


    //let [baseContent, setBaseContent] = React.useState<string>('')
    let baseContent = ""


    const queryContent = searchParams.get('content')
    if (queryContent) {
        baseContent = queryContent
    }

    //let myNode = {'type': 'doc', 'content': [{'type': 'paragraph', 'content': [{'type': 'text', 'text': baseContent}]}]}
    const myNode = toNode(baseContent);

    console.log('My Node: ')
    console.log(myNode)

    const [content, setContent] = React.useState<string>(myNode)


    React.useEffect(() => {
        //console.log("Using Effect!!!")
        //setContent(JSON.stringify(myNode))
        // @ts-ignore
        //setContent(myNode)
    }, [baseContent])


    const handleContentChange = (reason: any) => {
        setContent(reason)
        //Output it to the console
        console.log('Updated Content:')
        console.log(reason)
    }

    return (
        <section id='tool' className='container max-w-7xl py-16 md:py-24 cdq' style={{backgroundColor: '#fff'}}>
            <div className='flex min-h-[520px] flex-1 rounded-sm border'>
                <div className='flex flex-1 flex-col'>
                    <EditorPanel onChange={handleContentChange} content={content}/>
                </div>
                <div className='hidden w-full max-w-[600px] flex-1 flex-col border-l md:flex'>
                    <PreviewPanel content={content}/>
                </div>
            </div>
        </section>
    )
}
