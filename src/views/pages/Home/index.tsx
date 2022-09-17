import Button from './../../atoms/Button/Button';

function Home() {
    return (
        <main className="overflow-hidden">
            <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
                header
            </div>
            <div className="flex-1" id="example">
            <Button>Hello</Button>
            </div>
            <div id="docs">
                sd
            </div>
            <footer>
                Footer
            </footer>
        </main>
    )
}

export default Home;