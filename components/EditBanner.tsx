import { useState } from "react";
import { AdBanner } from "./AdBanner";

interface EditBannerProps {
    id: number,
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
    onSave: (data: any) => void;
}

export function EditBanner(props: EditBannerProps) {
    const [banner, setBanner] = useState({
        id: props.id,
        title: props.title,
        description: props.description,
        cta: props.cta,
        image: props.image,
        background: props.background
    })



    function handleChange(e) {
        setBanner({ ...banner, [e.target.name]: e.target.value });
    }

    function handleSubmit() {
        props.onSave(banner);
    }

    function handleFileChange(e) {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {

                setBanner({ ...banner, image: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    }

    return <div className="absolute top-0 left-0 h-screen w-screen flex justify-center items-center backdrop-blur-lg">
        <div className="w-1/4">

            <AdBanner id={banner.id} title={banner.title} description={banner.description} cta={banner.cta} image={banner.image} background={banner.background} ></AdBanner>
            <div className="flex flex-col items-center grow ">

                <p className="text-slate-800 text-center mt-2">Title</p>
                <input className="text-center w-11/12 p-1 rounded-md" type="text" name="title" value={banner.title} onChange={handleChange} />

                <p className="text-slate-800 text-center mt-2">Description</p>
                <input className="text-center w-11/12 p-1 rounded-md" type="text" name="description" value={banner.description} onChange={handleChange} />

                <p className="text-slate-800 text-center mt-2">Image</p>

                <input type="file" accept="image/*" onChange={handleFileChange} />

                <button onClick={handleSubmit} className="rounded-md bg-green-600 w-11/12 p-1 text-white text-lg mt-6">Save</button>
            </div>
        </div>
    </div>
}