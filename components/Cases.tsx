import Image from "next/image";
import Link from "next/link";

const productArray = [
    {
        id: 1,
        title: "Curology",
        text: "A custom formalua for your s'kins unique need",
        image: "curology-min.png",
    },
    {
        id: 2,
        title: "Yourspace",
        text: "Open space floor plans for you next venture",
        image: "yourspace-min.png",
    },
    {
        id: 3,
        title: "Lumin",
        text: "For your best look ever",
        image: "lumin-min.png",
    },
];

function Cases() {
    return (
        <>
            {productArray.map((product) => (
                <Link
                    href={""}
                    key={product.id}
                    className="min-h-full w-full relative bg-black group"
                >
                    <Image
                        src={`/${product.image}`}
                        className="object-cover opacity-75 group-hover:opacity-50 transition duration-500"
                        fill
                        alt={product.title}
                    />
                    <div className="absolute bottom-20 left-6 z-10">
                        <h3 className="text-gray-300 text-2xl">
                            {product.title}
                        </h3>
                        <p className="text-white text-[34px]">{product.text}</p>
                    </div>
                </Link>
            ))}
        </>
    );
}

export default Cases;
