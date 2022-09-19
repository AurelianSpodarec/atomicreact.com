import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

function CodeEditor() {
    return (
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
                    
                    >
                        Hello
                    </Button>`}
                />
        </div>
               

        </div>
        </div>
        </aside>
    )
}

export default CodeEditor