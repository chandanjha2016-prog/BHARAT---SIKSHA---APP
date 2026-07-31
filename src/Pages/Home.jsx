
import { translations } from "../data/translations";

export default function Home({lang}) {
  const t = translations[lang];

  const features = {
    v1: [
      {name: "Student Desk", desc: "Class 1-12 Notes, NCERT, Career"},
      {name: "Guardian Corner", desc: "Routine + Support Guide"},
      {name: "Yojna Hub", desc: "Bihar + Kendra Schemes Step by Step"},
      {name: "1-Click Help", desc: "Problem likho, turant solution"},
      {name: "Offline PWA", desc: "Bina net ke bhi chale"}
    ],
    v1_1: [
      {name: "AI Doubt Solver", desc: "Photo bhejo, 10 sec jawab"},
      {name: "Daily Test + Quiz", desc: "Result ke saath"},
      {name: "Download Center", desc: "Sab PDF offline save"}
    ],
    v1_5: [
      {name: "Job + Skill Certificate", desc: "Free course + certificate"},
      {name: "Resume Builder", desc: "1 click me resume"},
      {name: "Govt Exam Alert", desc: "Notification + Last Date"}
    ],
    v2: [
      {name: "Form Auto-Fill", desc: "Yojna form yahi se bharo"},
      {name: "Voice Support", desc: "Bolo Bhojpuri/Maithili"},
      {name: "Officer Connect", desc: "Shikayat DM/BDO ko"},
      {name: "SMS Alert", desc: "Net na ho to bhi info"}
    ]
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="text-center my-8">
        <h2 className="text-4xl font-bold text-blue-700">{t.title}</h2>
        <p className="text-xl mt-2 text-gray-600">"{t.mission}"</p>
      </div>

      <h3 className="text-2xl font-bold mb-4">✨ {t.features} - V1.0 Live</h3>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {features.v1.map(f => (
          <div key={f.name} className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold">{f.name}</h4><p>{f.desc}</p>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-bold mb-4">🚀 V1.1 - {t.coming}</h3>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {features.v1_1.map(f => (
          <div key={f.name} className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500 opacity-80">
            <h4 className="font-bold">{f.name}</h4><p>{f.desc}</p>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-bold mb-4">🚀 V1.5 - Skill & Job</h3>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {features.v1_5.map(f => (
          <div key={f.name} className="bg-purple-100 p-4 rounded-lg border-l-4 border-purple-500 opacity-80">
            <h4 className="font-bold">{f.name}</h4><p>{f.desc}</p>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-bold mb-4">🚀 V2.0 - Smart Bharat</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {features.v2.map(f => (
          <div key={f.name} className="bg-orange-100 p-4 rounded-lg border-l-4 border-orange-500 opacity-80">
            <h4 className="font-bold">{f.name}</h4><p>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
