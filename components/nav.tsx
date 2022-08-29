import Link from "next/link"
import Image from "next/image"

export default function Nav(){

    return (
        <nav className={["flex justify-between items-center p-4 "].join(" ")}>
            <section>
                <Link href="/"><a><Image priority quality={100} src="/logo_small_icon_only_inverted.png" width={80} height={80} /></a></Link>
            </section>
            <section>
                <Link href="">
                    <a>
                        test
                    </a>
                </Link>
            </section>
        </nav>
    )
}