import { motion } from "motion/react";
import { Home, Download, CreditCard, ShoppingBag, MessageSquare, LogIn, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'หน้าแรก', icon: Home },
    { id: 'download', label: 'ดาวน์โหลด', icon: Download },
    { id: 'topup', label: 'เติมเงิน', icon: CreditCard },
    { id: 'shop', label: 'ร้านค้า', icon: ShoppingBag },
    { id: 'discord', label: 'Discord', icon: MessageSquare, href: 'https://discord.gg/bUbhzwkx' },
    { id: 'login', label: 'ล็อกอิน', icon: LogIn },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.href) {
      window.open(item.href, '_blank');
    } else {
      setActiveSection(item.id);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-lg border-bottom border-white/5">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setActiveSection('home')}
        >
          <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase">Angel City</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`nav-link ${activeSection === item.id ? 'active' : 'text-gray-400'}`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-gray-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/90 border-t border-white/5 p-4 flex flex-col gap-2"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`nav-link w-full justify-start ${activeSection === item.id ? 'active' : 'text-gray-400'}`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
