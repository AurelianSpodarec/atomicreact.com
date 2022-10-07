import React, { useState } from 'react';

import Button from '../../../atoms/Button/Button';
import RadioButton from './../../../atoms/Forms/Radio/RadioButton/RadioButton';

import Playground from 'views/pages/_components/Playground/Playground';
import Canvas from 'views/pages/_components/Playground/_components/Canvas';
import PlaygroundConfig from 'views/pages/_components/Playground/_components/PlaygroundConfig/PlaygroundConfig';



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
        <div className="items-center flex px-8">
                    
            <h3 className="text-2xl mr-10  py-6">{title}</h3>

            <div className="flex flex space-y-6">
                {children}
            </div>
        
        </div>
    )
}


function ButtonPlayground() {

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
        <Playground>

            <Canvas>
                <Button 
                    variant={variant} 
                    kind={kind}
                    disabled={disabled}
                >
                    Hello
                </Button>
            </Canvas>

            <PlaygroundConfig>
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
            </PlaygroundConfig>

        </Playground>

       
 
    )
}

export default ButtonPlayground;