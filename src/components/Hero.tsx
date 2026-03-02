import { motion } from "motion/react";
import { Rocket, Users, Star, Shield, Clock, Zap } from "lucide-react";

export default function Hero({ onStart }: { onStart: () => void }) {
  const subStats = [
    { label: "7/4", value: "เปิดบริการ", color: "bg-cyan-500/10 border-cyan-500/20" },
    { label: "75%", value: "Uptime", color: "bg-blue-500/10 border-blue-500/20" },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://ais-pre-tccqz4u4slh7n4z2sjhfg7-453659618323.asia-southeast1.run.app/api/proxy?url=https://raw.githubusercontent.com/user-attachments/assets/6b3b3b3b-3b3b-3b3b-3b3b-3b3b3b3b3b3b" 
          alt="Angel City Background"
          className="w-full h-full object-cover opacity-40 scale-105"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback if the specific user image isn't directly accessible via simple proxy
            (e.target as HTMLImageElement).src = "https://picsum.photos/seed/angelcity/1920/1080?blur=2";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
      </div>

      <div className="relative z-10 max-w-5xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-500 font-bold tracking-[0.3em] uppercase mb-4">ยินดีต้อนรับเข้าสู่เว็บไซต์ของเรา</p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-2 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            ANGEL <span className="text-cyan-500">CITY</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            ประเทศของเราเป็นแนว FiveM เน้นระบบล้ำสมัย ทันสมัย และไม่เหมือนใคร
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button 
              onClick={onStart}
              className="btn-primary text-xl px-12 py-4"
            >
              <Zap className="fill-current" />
              เข้าสู่ระบบ
            </button>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {subStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className={`px-10 py-4 rounded-xl border ${stat.color} flex flex-col items-center`}
            >
              <span className="text-2xl font-black text-white">{stat.label}</span>
              <span className="text-xs uppercase tracking-widest text-gray-400">{stat.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
