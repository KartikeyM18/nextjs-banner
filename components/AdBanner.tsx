
interface BannerProps {
    id: number
    title: string,
    description: string,
    cta: string,
    image: string,
    background: string,
    edit?: () => void,
}

export function AdBanner(props: BannerProps) {

    const styling = [
        {
            id: 1,
            title: "text-3xl text-white absolute top-11 left-20 font-semibold",
            description: "text-lg text-white absolute top-20 left-20 w-3/4",
            image: { height: 155, width: 275, left: 54, bottom: 60 },
            cta: " absolute bottom-9 left-12 bg-yellow-500  font-bold w-72 rounded-md",
        }, {
            id: 2,
            title: "text-3xl text-white absolute top-14 left-6 w-40 font-semibold",
            description: "text-sm text-white absolute bottom-36 left-6 w-40",
            image: { height: 200, width: 200, right: -60, top: 70, borderRadius: '50%' },
            cta: " absolute bottom-7 left-14 rounded-md bg-white p-2 text-cyan-400 font-bold"
        }, {
            id: 3,
            title: "text-3xl text-black absolute top-8 left-20 w-48 font-semibold text-center",
            description: "text-sm text-black absolute top-32 left-24 w-40 text-center",
            image: { height: 180, width: 180, left: 20, bottom: 25, borderRadius: '50%' },
            cta: " absolute bottom-7 right-14 rounded-md bg-cyan-400 p-2 text-white font-bold",

        }, {
            id: 4,
            title: "text-3xl text-black absolute top-10 left-6 w-40 font-semibold",
            description: "text-sm text-black absolute top-36 left-6 w-40",
            image: { height: 220, width: 220, right: -40, bottom: -10, borderRadius: '50%' },
            cta: " absolute bottom-7 left-14 rounded-md bg-white p-2 text-yellow-500 font-bold "
        }
    ]

    const applyStyle = (styling.filter((s) => s.id === props.id))[0];

    return <div className="relative h-96 w-96 overflow-hidden" >

        <img src={props.background} className="h-96 w-96 absolute -z-10 top-0 left-0" />
        <div>
            {props.edit && <button className="h-8 w-8 border-2 flex justify-center items-center bg-black" onClick={props.edit}>
                <img src="/images/pen.png" className="h-5/6 " />
            </button>}

            <h1 className={applyStyle.title}>{props.title}</h1>
            <h3 className={applyStyle.description}>{props.description}</h3>

            <div className="bg-green-400 absolute overflow-hidden" style={applyStyle.image}>
                <img className="object-fill h-full w-full" src={props.image} />

            </div>

            <button className={applyStyle.cta}>{props.cta}</button>
        </div>
    </div>
}