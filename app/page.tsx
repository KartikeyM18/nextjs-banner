'use client'
import { AdBanner } from "@/components/AdBanner";
import { EditBanner } from "@/components/EditBanner";
import adbanners from '@/public/data/adbanners.json';
import { useState } from "react";


export default function Home() {

  const [banners, setBanners] = useState(adbanners);
  const [editingBanner, setEditingBanner] = useState(null);

  function handleEdit(banner) {
    setEditingBanner(banner);
  }

  function handleSave(newBanner) {

    setBanners(banners.map((b) => b.id === newBanner.id ? newBanner : b));
    setEditingBanner(null);
  }

  return (
    <div >
      <div className="bg-blue-600 -z-50 absolute top-0 left-0 h-screen w-screen"></div>
      <div className="flex justify-center items-center">

        <div className="grid grid-cols-2 w-1/2 gap-4" >

          {
            banners.map((b) => (<AdBanner key={b.id} id={b.id} title={b.title} description={b.description} cta={b.cta} image={b.image} background={b.background} edit={() => handleEdit(b)}></AdBanner>))
          }
        </div>
      </div>

      {editingBanner && <EditBanner {...editingBanner} onSave={handleSave}></EditBanner>}
    </div>
  );
}
