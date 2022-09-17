import React, { useState } from 'react';
import Preview from './../../_components/Preview/Preview';
import Button from '../../../atoms/Button/Button';


const tabs = [
    { name: 'Overview', href: '#', current: false },
    { name: 'Examples', href: '#', current: false },
    { name: 'API', href: '#', current: true }
]

function ButtonIndex() {

    const [variant, setVariant] = useState("primary")
    const [kind, setKind] = useState("solid")

    function handleChangeVariant(value:any) {
        setVariant(value)
    }

    function handleChangeKind(value:any) {
        setKind(value)
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
                     
                    <div>
                        <h3 className="text-2xl">Variant</h3>
                        <div className="space-4">
                            <Button onClick={() => handleChangeVariant('primary')}>Primary</Button>
                            <Button onClick={() => handleChangeVariant('secondary')}>Secondary</Button>
                        </div>
                    </div>
                    Kind:
                    <Button onClick={() => handleChangeKind('solid')}>solid</Button>
                    <Button onClick={() => handleChangeKind('outline')}>outline</Button>
                    <Button onClick={() => handleChangeKind('ghost')}>ghost</Button>
                
                </div>
                
                
            </div>
            
            {/* <div id="docs">
                sd
            </div>

            <footer>
                Footer
            </footer> */}
        </main>
    )
}

export default ButtonIndex;











/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
 