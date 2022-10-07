import PlaygroundTabs from "../PlaygroundTabs";

function PlaygroundConfig({children}:any) {
    return (
        <div className="h-[300px] h-full">
            {/* <PlaygroundTabs /> */}

            <div id="settings">
                {children}
            </div>  
        </div>
    )
}

export default PlaygroundConfig;