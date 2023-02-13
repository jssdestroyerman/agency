import Link from "next/link";

function Header() {
    return (
        <header className="w-[90%] py-12 flex items-center justify-between mx-auto 2xl:w-[1280px] text-xl tracking-[8px]">
            <Link href={"/"}>AGENCY.</Link>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
            </svg>
        </header>
    );
}

export default Header;
