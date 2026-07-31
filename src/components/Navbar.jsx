
import { useState } from "react";

export default function Navbar({lang, setLang}) {
  const langs = {hi: "हिन्दी", en: "English", br: "भोजपुरी", ma: "मैथिली"}
  return (
    <nav className="bg-blue-700 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">🇮🇳 Bharat Siksha</h1>
        <div className="flex gap-2 mt-2 md:mt-0">
          {Object.keys(langs).map(key => (
            <button key={key} onClick={()=>setLang(key)}
              className={`px-3 py-1 rounded ${lang===key? 'bg-white text-blue-700' : 'bg-blue-600'}`}>
              {langs[key]}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
