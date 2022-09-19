import React, { useState } from 'react';
import Preview from './../../_components/Preview/Preview';
import Button from '../../../atoms/Button/Button';
import RadioButton from './../../../atoms/Forms/Radio/RadioButton/RadioButton';

import CodeEditor from 'views/pages/_components/CodeEditor/CodeEditor';
import Footer from 'views/pages/_components/Footer/Footer';
import Heading from '../Heading/Heading';
import Canvas from './_components/Canvas';
import PlaygroundTabs from './_components/PlaygroundTabs';

 


function Playground({children}:any) {
    return (
        <div className="overflow-hidden h-full w-full">
        <div className="flex h-full">

            <div className="flex w-full flex-col">
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

export default Playground;
 