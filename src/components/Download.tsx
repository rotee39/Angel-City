import { motion } from "motion/react";
import { Smartphone, Monitor, Download, CheckCircle, AlertCircle, RefreshCw } from "lucide-react";

export default function DownloadSection() {
  const mobileDownloads = [
    { 
      name: "รันเชอร์ V29", 
      desc: "ไฟล์ติดตั้งหลัก", 
      url: "https://www.mediafire.com/file/h76tnmgde921vnx/APK_angel_V29.apk/file",
      status: "available" 
    },
    { 
      name: "รันเชอร์ V48", 
      desc: "ไฟล์ติดตั้งหลัก (ล่าสุด)", 
      url: "https://www.mediafire.com/file/amnnaykq778epc8/APK+ANGGEL+V48.apk/file",
      status: "available" 
    },
  ];

  const pcDownloads = [
    { 
      name: "รันเชอร์ PC", 
      desc: "ไฟล์ติดตั้งหลัก", 
      url: "https://drive.google.com/file/d/1wYsfJ9-MXfipjCRk_G-xIYmZhZ4imCl-/view?usp=sharing",
      status: "available" 
    },
  ];

  const renderDownloadItem = (item: any) => (
    <div key={item.name} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-500">
          <Download size={24} />
        </div>
        <div>
          <h4 className="font-bold text-white">{item.name}</h4>
          <p className="text-xs text-gray-500">{item.desc}</p>
        </div>
      </div>
      
      <a 
        href={item.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-[0_0_10px_rgba(6,182,212,0.3)]"
      >
        <Download size={16} />
        ดาวน์โหลด
      </a>
    </div>
  );

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-cyan-500 mb-4"
          >
            ดาวน์โหลดทั้งหมด
          </motion.h2>
          <p className="text-gray-400">เลือกแพลตฟอร์มที่ต้องการดาวน์โหลด</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mobile Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 border-cyan-500/20 shadow-[0_0_40px_rgba(6,182,212,0.05)]"
          >
            <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                <Smartphone size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">สำหรับมือถือ</h3>
              <p className="text-gray-500 text-sm">Android Platform</p>
            </div>
            <div className="space-y-4">
              {mobileDownloads.map(renderDownloadItem)}
            </div>
          </motion.div>

          {/* PC Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-8 border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.05)]"
          >
            <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                <Monitor size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">สำหรับคอมพิวเตอร์</h3>
              <p className="text-gray-500 text-sm">Windows Platform</p>
            </div>
            <div className="space-y-4">
              {pcDownloads.map(renderDownloadItem)}
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 glass-card flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <CheckCircle className="text-green-500" size={32} />
            <div>
              <h4 className="font-bold">ตรวจสอบความพร้อม</h4>
              <p className="text-sm text-gray-400">กรุณาตรวจสอบสเปกเครื่องก่อนทำการติดตั้งเพื่อประสิทธิภาพสูงสุด</p>
            </div>
          </div>
          <button className="text-orange-500 font-bold hover:underline">อ่านคู่มือการติดตั้ง</button>
        </motion.div>
      </div>
    </div>
  );
}
