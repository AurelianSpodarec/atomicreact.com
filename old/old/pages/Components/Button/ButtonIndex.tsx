import Button from "views/atoms/Button/Button"
import Heading from "views/pages/_components/Heading/Heading"
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/ext-language_tools"

function ButtonIndex() {
    return (
        <div>
            <Heading />

            <div className="flex">
                <main className="flex-1 p-8">
                    <h2>Examples</h2>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold">Solid Buttons</h3>
                        <div className="w-full space-x-4 mb-4">
                            <Button label="Primary" variant="primary" />
                            <Button label="Secondary" variant="secondary" />
                            <Button label="Success" variant="success" />
                            <Button label="Info" variant="info" />
                            <Button label="Warning" variant="warning" />
                            <Button label="Danger" variant="danger" />
                        </div>

                        <div className="overflow-hidden rounded-xl border border-gray-200">
                            <AceEditor
                                height="170px"
                                readOnly={true}
                                width="100%"
                                // placeholder="Placeholder Text"
                                mode="html"
                                theme="monokai"
                                name="main-code-editor"
                                // onLoad={this.onLoad}
                                // onChange={onChange}
                                fontSize={14}
                                showPrintMargin={true}
                                showGutter={true}
                                highlightActiveLine={true}
                                value={`
                            
                                <Button label="Primary" variant="primary" />
                                <Button label="Secondary" variant="secondary" />
                                <Button label="Success" variant="success" />
                                <Button label="Info" variant="info" />
                                <Button label="Warning" variant="warning" />
                                <Button label="Danger" variant="danger" />
                                `}
                                setOptions={{
                                    enableBasicAutocompletion: true,
                                    enableLiveAutocompletion: false,
                                    enableSnippets: false,
                                    showLineNumbers: true,
                                    tabSize: 4,
                                }}
                            />
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold">Outline Buttons</h3>
                        <div className="w-full space-x-4">
                            <Button label="Primary" variant="primary" kind="outline" />
                            <Button label="Secondary" variant="secondary" kind="outline" />
                            <Button label="Success" variant="success" kind="outline" />
                            <Button label="Info" variant="info" kind="outline" />
                            <Button label="Warning" variant="warning" kind="outline" />
                            <Button label="Danger" variant="danger" kind="outline" />
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold">Ghost Buttons</h3>
                        <div className="w-full space-x-4">
                            <Button label="Primary" variant="primary" kind="ghost" />
                            <Button label="Secondary" variant="secondary" kind="ghost" />
                            <Button label="Success" variant="success" kind="ghost" />
                            <Button label="Info" variant="info" kind="ghost" />
                            <Button label="Warning" variant="warning" kind="ghost" />
                            <Button label="Danger" variant="danger" kind="ghost" />
                        </div>
                    </div>

                </main>

                <aside className="w-[320px]">
                    TOC
                </aside>
            </div>
        </div>
    )
}

export default ButtonIndex