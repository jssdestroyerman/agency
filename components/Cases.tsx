import Image from "next/image";

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
                <div key={product.id} className="min-h-full w-full relative">
                    <Image
                        src={`/${product.image}`}
                        className="object-cover"
                        fill
                        alt={product.title}
                    />
                </div>
            ))}
        </>
    );
}

export default Cases;
