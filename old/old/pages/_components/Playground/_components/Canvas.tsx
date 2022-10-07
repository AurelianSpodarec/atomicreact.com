export function Canvas({children}:any) {
    return (
        <div className="h-[550px] bg-gray-50">
        <div className="flex items-center justify-center h-full">

           {children}

        </div>
        </div>
    )
}

export default Canvas;