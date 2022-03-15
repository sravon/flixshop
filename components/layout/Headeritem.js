import Link from "next/link";

export default function Headeritem({Icon, title, url}) {
    return (
        <div className=" cursor-pointer group w-50 sm:w-30 hover:text-white">
            <Link href={url}>
                <a className="flex flex-row items-center group-hover:animate-bounce">
                    <Icon className="h-10 mb-1"/>
                    <p className="text-sm tracking-widest">
                        {title}
                    </p>
                </a>
            </Link>
        </div>
    )
}
