import React, { useState } from 'react';
import Preview from './../../_components/Preview/Preview';
import Button from '../../../atoms/Button/Button';
import RadioButton from './../../../atoms/Forms/Radio/RadioButton/RadioButton';

const tabs = [
    { name: 'Overview', href: '#', current: false },
    { name: 'Examples', href: '#', current: false },
    { name: 'API', href: '#', current: true }
]

function ButtonIndex() {

    const [variant, setVariant] = useState("primary")
    const [kind, setKind] = useState("solid")

    function handleChangeVariant(value:any) {
        setVariant(value.target.value)
    }

    function handleChangeKind(value:any) {
        setKind(value.target.value)
    }



    return (
        <main className="overflow-hidden h-full">

            <div className="sticky top-0 z-10 flex items-center p-4 h-16 flex-shrink-0 bg-white shadow">
                <h1 className="font-bold text-4xl">Button</h1>
            </div>

          
            <Preview>

                <div className="ml-64">
                <Button 
                    variant={variant} 
                    kind={kind}
                >
                    Hello
                </Button>
                </div>
               

            </Preview>

            <div className="py-8">
                <nav className="-mb-px px-12  flex space-x-8">
                    <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Overview</button>
                    <button className="border-transparent hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 border-indigo-600 text-indigo-600 font-medium text-sm">Playground</button>
                    <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Examples</button>
                    <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">API</button>
                </nav>


                <div>
                     
                    <div className="flex items-center">
                        <h3 className="text-2xl">Variant</h3>
                        <div className="space-4">
                            <RadioButton className={variant === "primary" ? "bg-pink-400" : ""} label="Primary" onChange={(e:any) => handleChangeVariant(e)} name="kind" value="primary" />
                            <RadioButton className={variant === "secondary" ? "bg-pink-400" : ""} label="Secondary" onChange={(e:any) => handleChangeVariant(e)} name="kind" value="secondary" />
                             
                        </div>
                    </div>
                    
                    <div className="flex items-center">
                        <h3 className="text-2xl">Kind:</h3>
                        <RadioButton className={kind === "solid" ? "bg-pink-400" : ""} label="Solid" onChange={(e:any) => handleChangeKind(e)} name="kind" value="solid" />
                        <RadioButton className={kind === "outline" ? "bg-pink-400" : ""} label="Outline" onChange={(e:any) => handleChangeKind(e)} name="kind" value="outline" />
                        <RadioButton className={kind === "ghost" ? "bg-pink-400" : ""} label="Ghost" onChange={(e:any) => handleChangeKind(e)} name="kind" value="ghost" />
                    </div>
                
                </div>
                
                
            </div>
           
        </main>
    )
}

export default ButtonIndex;