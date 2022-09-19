import React, { useState } from 'react';
import Preview from './../../_components/Preview/Preview';
import Button from '../../../atoms/Button/Button';
import RadioButton from './../../../atoms/Forms/Radio/RadioButton/RadioButton';

import CodeEditor from 'views/pages/_components/CodeEditor/CodeEditor';
import Footer from 'views/pages/_components/Footer/Footer';


function Heading() {
    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold">Button</h1>
            Overview
            API
            Playground
        </div>
    )
}

export function Canvas({children}:any) {
    return (
        <div className="h-[550px] bg-gray-50">
        <div className="flex items-center justify-center h-full">

           {children}

        </div>
        </div>
    )
}

function PlaygroundTabs() {
    return (
        <div className="flex w-full border-b border-gray-100">
            <div className="p-4 bg-pink-400 text-white font-bold">
            Settings
            </div>
            <div className="p-4">
            Code Editor
            </div>
        </div>
    )
}

function PlaygroundConfig({children}:any) {
    return (
        <div id="settings">
            {children}
        </div>
    )
}

export function PlaygroundConfigView({children}:any) {
    return (
        <div className="h-[300px] h-full">
            <PlaygroundTabs />

            <PlaygroundConfig>
            {children}
            </PlaygroundConfig>
        </div>
    )
}

function PlaygroundView({children}:any) {
    return (
        <div className="overflow-hidden h-full w-full">
        <div className="flex h-full">

            <div className="flex w-full">

                <main className="flex flex-1 flex-col">
                    <Heading />
                    <div>
                        {children}
                    </div>
                </main>

                <Footer />

            </div>

            <CodeEditor />

        </div>
        </div>
    )
}

export default PlaygroundView;

function Playground({children}:any) {
     
    return (
        <PlaygroundView>

            <Canvas>
                <Button 
                    // variant={variant} 
                    // kind={kind}
                    // disabled={disabled}
                >
                    Hello
                </Button>
            </Canvas>

            <PlaygroundConfigView>
                {children}
            </PlaygroundConfigView>

        </PlaygroundView>
    )
}

 