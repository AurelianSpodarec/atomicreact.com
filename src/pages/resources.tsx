import Image from "next/image";
import Link from "next/link";
import LayoutPage from "./_components/layouts/LayoutPage";
 

function Resources() {
    return (
        <LayoutPage>
            <aside>
                All UI frameworks: TailwindCSS, Chakra exitCode

                Libraries

                Fetching

                Books
                Beginner


                Other

                Codepen
                Sandbox


                Documentation
                MDN, etc


                Getting started
            </aside>
            <main>
                <article>
                    <span>Books</span>

                    {/* <Image src="https://eloquentjavascript.net/img/cover.jpg" alt="" /> */}
                    <div>
                        <Link href="https://eloquentjavascript.net/">
                            <a href="https://eloquentjavascript.net/">
                                Eloquent JavaScript
                            </a>
                        </Link>
                        <p>JavaScript basics</p>
                    </div>
                </article>
            </main>
        </LayoutPage>
    );
}

export default Resources;