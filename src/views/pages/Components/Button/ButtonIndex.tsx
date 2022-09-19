import Button from "views/atoms/Button/Button"
import Heading from "views/pages/_components/Heading/Heading"

function ButtonIndex() {
    return (
        <div>
            <Heading />

            <div className="flex">
                <main className="flex-1 p-8">
                    <h2>Examples</h2>

                    <div>
                        <h3 className="text-xl font-bold">Solid Buttons</h3>
                        <div className="w-full space-x-4">
                            <Button label="Primary" variant="primary" />
                            <Button label="Secondary" variant="secondary" />
                            <Button label="Success" variant="success" />
                            <Button label="Info" variant="info" />
                            <Button label="Warning" variant="warning" />
                            <Button label="Danger" variant="danger" />
                        </div>
                    </div>

                    <div>
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

                    <div>
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