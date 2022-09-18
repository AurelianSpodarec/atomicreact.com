import React, { useState } from 'react';
import Preview from './../../_components/Preview/Preview';
import Button from '../../../atoms/Button/Button';
import RadioButton from './../../../atoms/Forms/Radio/RadioButton/RadioButton';
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

const tabs = [
    { name: 'Overview', href: '#', current: false },
    { name: 'Examples', href: '#', current: false },
    { name: 'API', href: '#', current: true }
]


function ColorSelect({onChange, label, name, variant, value, color}:any) {
    return (
        <RadioButton 
            className={`flex w-full p-2 border border-gray-100 rounded-md ${variant === value ? "bg-gray-100" : ""}`} 
            label={label} 
            onChange={onChange} 
            name={name} 
            value={value}
            componentLeft={<div className={`${color} w-6 h-6 rounded-full`}></div>}

        />
    )
}

function Case({title, children}:any) {
    return (
        <div className="items-center px-8">
                    
            <h3 className="text-2xl mr-10  py-6">{title}</h3>

            <div className="flex flex space-y-6">
                {children}
            </div>
        
        </div>
    )
}

function ButtonIndex() {

    const [variant, setVariant] = useState("primary")
    const [kind, setKind] = useState("solid")
    const [disabled, setDisabled] = useState(false)

    function handleChangeVariant(value:any) {
        setVariant(value.target.value)
    }

    function handleChangeKind(value:any) {
        setKind(value.target.value)
    }

    function handleChangeDisabled() {
        setDisabled(!disabled)
    }



    return (
        <main className="overflow-hidden h-full w-full">
            <div className="flex h-full">

                <div className="flex flex-1 flex-col">
                    <div>
                        <div className="p-6">
                            <h1 className="text-4xl font-bold">Button</h1>
                        </div>
                    </div>

                <div>
                    <div className="h-[550px] bg-gray-50">
                    <div className="flex items-center justify-center h-full">
                        <Button 
                            variant={variant} 
                            kind={kind}
                            disabled={disabled}
                        >
                            Hello
                        </Button>
                    </div>
                    </div>
                    
                    <div className="h-[300px] h-full">
                    <Case title="Variant">
                            <ColorSelect
                                label="Link"
                                variant={variant}
                                onChange={(e:any) => handleChangeVariant(e)} 
                                name="variant" 
                                value="link"
                             />
                             <ColorSelect
                                label="Primary"
                                variant={variant}
                                onChange={(e:any) => handleChangeVariant(e)} 
                                name="variant" 
                                value="primary"
                                color="bg-indigo-600"
                             />
                           <ColorSelect
                                label="Secondary"
                                variant={variant}
                                onChange={(e:any) => handleChangeVariant(e)} 
                                name="variant" 
                                value="secondary"
                                color="bg-pink-600"
                             />
                           <ColorSelect
                                label="Success"
                                variant={variant}
                                onChange={(e:any) => handleChangeVariant(e)} 
                                name="variant" 
                                value="success"
                             />
                           <ColorSelect
                                label="Warning"
                                variant={variant}
                                onChange={(e:any) => handleChangeVariant(e)} 
                                name="variant" 
                                value="warning"
                             />
                            <ColorSelect
                                label="Danger"
                                variant={variant}
                                onChange={(e:any) => handleChangeVariant(e)} 
                                name="variant" 
                                value="danger"
                             />
                            <ColorSelect
                                label="Info"
                                variant={variant}
                                onChange={(e:any) => handleChangeVariant(e)} 
                                name="variant" 
                                value="info"
                             />
                       </Case>

                       <Case title="Kind">
                            <ColorSelect
                                label="Solid"
                                variant={kind}
                                onChange={(e:any) => handleChangeKind(e)} 
                                name="kind" 
                                value="solid"
                            />
                            <ColorSelect
                                label="Outline"
                                variant={kind}
                                onChange={(e:any) => handleChangeKind(e)} 
                                name="kind" 
                                value="outline"
                            />
                            <ColorSelect
                                label="Ghost"
                                variant={kind}
                                onChange={(e:any) => handleChangeKind(e)} 
                                name="kind" 
                                value="ghost"
                            />
                       </Case>

                       <Case title="Is Disabled">

                       </Case>

                       <Case title="Size">

                       </Case>
                
                       <Case title="Type">

                       </Case>

                        <Case title="Radius">
                        
                       </Case>

                       <Case title="As">
                        
                       </Case>

                       <Case title="Is Loading">
                        
                       </Case>
                    </div>
                    </div>
                </div>

                <aside className="border-l-2 border-gray-100 overflow-auto h-full w-[320px]">
                <div className="flex flex-wrap items-center overflow-hidden">
                <div className="overflow-y-auto">
                    <div className="h-full w-full">
                    <Editor
                            height="100%"
                            width="100%"
                            theme="vs-dark"
                            defaultLanguage="javascript"
                            defaultValue={`
                            <Button 
                                variant="${variant}" 
                                kind="${kind}"
                                disabled="${disabled}"
                            >
                                Hello
                            </Button>`}
                        />
</div>
                       

                </div>
                </div>
                </aside>
            </div>






{/* 
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 h-16 flex-shrink-0 bg-white shadow">
                <div className="flex items-center">
                    <h1 className="font-bold text-4xl">Button</h1>

                    <nav className="-mb-px px-12  flex space-x-8">
                        <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Overview</button>
                        <button className="border-transparent hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 border-indigo-600 text-indigo-600 font-medium text-sm">Playground</button>
                        <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">API</button>
                    </nav>
                </div>

                <div>

                    Discord
                    Edit Repository
                </div>
            </div>

          
            <Preview>
            <div className="flex h-full">
            
                
                <div className="w-1/2 bg-gray-800 text-white h-full">
               
                <div>
                     
                  
                    
                   




                    <div className="flex items-center">
                        <h3 className="text-2xl">Disabled:</h3>
                        <RadioButton 
                            className={disabled === false ? "bg-pink-400" : ""} 
                            label="Active" 
                            onChange={(e:any) => handleChangeDisabled()} 
                            name="disabled" 
                            value="outline"
                        />
                         <RadioButton 
                            className={disabled === true ? "bg-pink-400" : ""} 
                            label="Disabled" 
                            onChange={(e:any) => handleChangeDisabled()} 
                            name="disabled" 
                            value="solid"
                        />
                    </div>
                
                </div>
                
                
                </div>
            
            </div>
            </Preview>

            <div className="h-full">
                
            <Editor
                    height="100%"
                    theme="vs-dark"
                    defaultLanguage="javascript"
                    defaultValue={`
<Button 
    variant="${variant}" 
    kind="${kind}"
    disabled="${disabled}"
>
    Hello
</Button>`}
                />

            </div> */}
           
        </main>
    )
}

export default ButtonIndex;