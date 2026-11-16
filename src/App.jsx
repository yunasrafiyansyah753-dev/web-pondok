import React, { useState, useEffect } from 'react';
import { BookOpen, Users, Award, MapPin, Phone, Mail, ChevronRight, Menu, X, Star, CheckCircle, MessageCircle, Image as ImageIcon, HelpCircle, Quote, Clock, FileText, CheckSquare, HeartHandshake, Package, Sparkles } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ nama: '', asal: '', noHp: '' });
  const [submitted, setSubmitted] = useState(false);
  const [activeTabGaleri, setActiveTabGaleri] = useState('Semua');
  
  // State untuk Efek Mengetik (Typewriter)
  const [typedText, setTypedText] = useState('');
  const fullText = "Membangun Generasi Qurani,";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nama && formData.noHp) {
      const nomorWa = "6285956151322"; 
      const pesan = `Assalamu'alaikum, saya ingin mendaftarkan calon santri baru:%0A` +
                    `- Nama: ${formData.nama}%0A` +
                    `- Asal Sekolah: ${formData.asal}%0A` +
                    `- No. HP Wali: ${formData.noHp}`;
      window.open(`https://wa.me/${nomorWa}?text=${pesan}`, '_blank');
      setSubmitted(true);
    }
  };

 // DATA GALERI (Tanpa deskripsi panjang)
  const listGaleri = [
    { judul: "Kegiatan Pramuka & Kepemimpinan", kategori: "Pramuka", foto: "kegiatan/pramuka1.jpg" },
    { judul: "Kegiatan Pramuka & Kepemimpinan", kategori: "Pramuka", foto: "kegiatan/pramuka2.jpg" },
    { judul: "Kegiatan Pramuka & Kepemimpinan", kategori: "Pramuka", foto: "kegiatan/pramuka3.jpg" },
    { judul: "Kegiatan Pramuka & Kepemimpinan", kategori: "Pramuka", foto: "kegiatan/pramuka4.jpg" },
    { judul: "Kegiatan Pramuka & Kepemimpinan", kategori: "Pramuka", foto: "kegiatan/pramuka5.jpg" },
    { judul: "Kegiatan Pramuka & Kepemimpinan", kategori: "Pramuka", foto: "kegiatan/pramuka6.jpg" },
    { judul: "Kegiatan Pramuka & Kepemimpinan", kategori: "Pramuka", foto: "kegiatan/pramuka7.jpg" },
    { judul: "Kegiatan Pramuka & Kepemimpinan", kategori: "Pramuka", foto: "kegiatan/pramuka8.jpg" },
    { judul: "Kegiatan Pramuka & Kepemimpinan", kategori: "Pramuka", foto: "kegiatan/pramuka9.jpg" },
    { judul: "Halaqah Tahfidz Al-Quran", kategori: "Tahfidz", foto: "kegiatan/tahfiz1.jpg" },
    { judul: "Praktik Pidato 3 Bahasa", kategori: "Akademik", foto: "kegiatan/pidato1.jpg" },
    { judul: "Kegiatan Hadroh", kategori: "Ekstrakurikuler", foto: "kegiatan/hadroh1.jpg" },
    { judul: "Kegiatan Olahraga", kategori: "Ekstrakurikuler", foto: "kegiatan/olahraga1.jpg" },
    { judul: "Kegiatan Olahraga", kategori: "Ekstrakurikuler", foto: "kegiatan/olahraga2.jpg" },
    { judul: "Kegiatan Olahraga", kategori: "Ekstrakurikuler", foto: "kegiatan/olahraga3.jpg" },
    { judul: "Kegiatan Olahraga", kategori: "Ekstrakurikuler", foto: "kegiatan/olahraga4.jpg" },
    { judul: "Kegiatan Olahraga", kategori: "Ekstrakurikuler", foto: "kegiatan/olahraga5.jpg" },
    { judul: "Kegiatan Olahraga", kategori: "Ekstrakurikuler", foto: "kegiatan/olahraga6.jpg" },
    { judul: "Kegiatan Olahraga", kategori: "Ekstrakurikuler", foto: "kegiatan/olahraga7.jpg" },
    { judul: "Kegiatan Olahraga", kategori: "Ekstrakurikuler", foto: "kegiatan/olahraga8.jpg" },
    { judul: "Kegiatan Olahraga", kategori: "Ekstrakurikuler", foto: "kegiatan/olahraga9.jpg" },
    { judul: "Pembelajaran Akademik", kategori: "Akademik", foto: "kegiatan/akademik1.jpg" },
    { judul: "Pembelajaran Akademik", kategori: "Akademik", foto: "kegiatan/akademik2.jpg" },
    { judul: "Pembelajaran Akademik", kategori: "Akademik", foto: "kegiatan/akademik3.jpg" },
    { judul: "Pembelajaran Akademik", kategori: "Akademik", foto: "kegiatan/akademik4.jpg" },
    { judul: "Potret Bersama", kategori: "Bersama", foto: "kegiatan/bersama1.jpg" },
    { judul: "Potret Bersama", kategori: "Bersama", foto: "kegiatan/bersama2.jpg" },
    { judul: "Potret Bersama", kategori: "Bersama", foto: "kegiatan/bersama3.jpg" },
    { judul: "Potret Bersama", kategori: "Bersama", foto: "kegiatan/bersama4.jpg" },
    { judul: "Potret Bersama", kategori: "Bersama", foto: "kegiatan/bersama5.jpg" },
    { judul: "Potret Bersama", kategori: "Bersama", foto: "kegiatan/bersama6.jpg" },
  ];

  const galeriFiltered = activeTabGaleri === 'Semua' 
    ? listGaleri 
    : listGaleri.filter(item => item.kategori === activeTabGaleri);

  // DATA DEWAN PEMBINA (2 Orang)
  const listPembina = [
    { nama: "KH. Embay Mulya Syarief", jabatan: "Dewan Pembina", foto: "orang/embay.jpg" },
    { nama: "Drs. H. Jarkasih, M.Pd.", jabatan: "Dewan Pembina", foto: "orang/jarkasih.jpg" }
  ];

  // DATA PENGGAGAS PESANTREN (4 Orang)
  const listPenggagas = [
    { nama: "Drs. KH. Jarkasih, M.Pd.", jabatan: "Penggagas Pesantren", foto: "orang/jarkasih.jpg" },
    { nama: "Alm. Dra. Hj. Yayat Nurhayati", jabatan: "Penggagas Pesantren", foto: "orang/yayat.jpg" },
    { nama: "Nyai Titi H. Suari", jabatan: "Penggagas Pesantren", foto: "orang/titi.jpg" },
    { nama: "Alm. Engkong Hamzah H. Kejo", jabatan: "Penggagas Pesantren", foto: "orang/hamzah.jpg" }
  ];

  // DATA GABUNGAN DEWAN PENGAJAR & USTADZ/USTADZAH PENGABDIAN
  const listUstadz = [
    { nama: "Al-Ustadz Dr. Syarifudin Hamzah, S.Pd.I., M.Pd.", jabatan: "Khodimul Ma'had", foto: "orang/pimpinan.jpg" },
    { nama: "Al-Ustadz Dr. Amirudin Hamzah, Lc., MA.", jabatan: "Dewan Pengajar", foto: "orang/amir.jpg" },
    { nama: "Al-Ustadz Ahmad Zainudin Hamzah, S.H.", jabatan: "Dewan Pengajar", foto: "orang/njay.jpg" },
    { nama: "Al-Ustadzah Intan Fajri Nurul Ilmi, S.K.M.", jabatan: "Khodimul Ma'had", foto: "orang/bunda.jpg" },
    { nama: "Al-Ustadz Muhamad Udas, S.Pd.I.", jabatan: "Dewan Pengajar", foto: "orang/udas.jpg" },
    { nama: "Al-Ustadzah Khotifah Hartati, S.H.I.", jabatan: "Dewan Pengajar", foto: "orang/khotifah.jpg" },
    { nama: "Al-Ustadz Tb. Zulia, M.Pd.", jabatan: "Dewan Pengajar", foto: "orang/zulia.jpg" },
    { nama: "Al-Ustadz Ahmad Sudira, S.H.", jabatan: "Dewan Pengajar", foto: "orang/dira.jpg" },
    { nama: "Al-Ustadz Yunas Rafiyansyah", jabatan: "Dewan Pengajar", foto: "orang/yunas.jpg" },
    { nama: "Al-Ustadz Tubagus Adnan", jabatan: "Dewan Pengajar", foto: "orang/adnan.jpg" },
    { nama: "Al-Ustadz Mardian", jabatan: "Dewan Pengajar", foto: "orang/mardian.jpg" },
    { nama: "Al-Ustadz Delvin Hanif Pramudita", jabatan: "Dewan Pengajar", foto: "orang/delvin.jpg" },
    { nama: "Al-Ustadz Galih Satrya Wibawa", jabatan: "Dewan Pengajar", foto: "orang/galih.jpg" },
    { nama: "Al-Ustadz Akbar Hidayat", jabatan: "Dewan Pengajar", foto: "orang/akbar.jpg" },
    { nama: "Al-Ustadz Rizky Adam Rafael", jabatan: "Dewan Pengajar", foto: "orang/adam.jpg" },
    { nama: "Al-Ustadz Muhammad Faizal Ramadhan", jabatan: "Dewan Pengajar", foto: "orang/faizal.jpg" },
    { nama: "Al-Ustadz Naufal Nabawi Albantani", jabatan: "Dewan Pengajar", foto: "orang/naufal.jpg" },
    { nama: "Al-Ustadzah Nurasiyah", jabatan: "Dewan Pengajar", foto: "orang/nurasiyah.jpg" },
    { nama: "Al-Ustadzah Regita Putri Azzahra", jabatan: "Dewan Pengajar", foto: "orang/regita.jpg" },
    { nama: "Al-Ustadzah Shireen Tsamrotul Puadah", jabatan: "Dewan Pengajar", foto: "orang/siren.jpg" },
    { nama: "Al-Ustadzah Bunga Ramadhani", jabatan: "Dewan Pengajar", foto: "orang/bunga.jpg" },
    { nama: "Al-Ustadzah Azzaira Kamilia Ramadhani", jabatan: "Dewan Pengajar", foto: "orang/rara.jpg" }
  ];

  // DATA TESTIMONI
  const listTestimoni = [
    { nama: "Bapak H. Suhendi", sebagai: "Wali Santri Kelas VII", pesan: "Alhamdulillah, anak kami banyak perubahan positif semenjak masuk di Daar el Ilmi. Hafalan Qurannya makin lancar dan karakternya mandiri." },
    { nama: "Ibu Hj. Raniah", sebagai: "Wali Santri Kelas VIII", pesan: "Lingkungan pondoknya asri, ustadz-ustadznya telaten membimbing. Kombinasi ilmu agama dan teknologinya sangat pas untuk masa depan anak." },
    { nama: "Bapak M. Hasan", sebagai: "Wali Santri Kelas X (MA)", pesan: "Program pembiasaan bahasa asing dan disiplinnya luar biasa. Kami sangat bersyukur mempercayakan pendidikan anak kami di sini." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 relative selection:bg-amber-400 selection:text-emerald-950">
      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/6285956151322" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 animate-bounce border-2 border-white"
        title="Chat WhatsApp Panitia"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-emerald-950 text-xs sm:text-sm font-bold py-2 px-4 text-center shadow-sm flex items-center justify-center space-x-2">
        <Sparkles className="w-4 h-4 animate-spin" />
        <span>Pendaftaran Santri Baru (PSB) Tahun Ajaran 2027/2028 Telah Dibuka! Amankan Kursi Putra-Putri Anda Sekarang.</span>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md text-slate-800 shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="bg-emerald-50 p-1.5 rounded-2xl border border-emerald-200 shadow-sm w-12 h-12 flex items-center justify-center overflow-hidden">
              <img src="/logo.png" alt="Logo Pondok" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="font-extrabold text-base sm:text-lg block tracking-wider text-emerald-900 leading-tight">PONPES MODERN</span>
              <span className="text-[10px] sm:text-xs text-amber-600 tracking-widest font-bold">DAAR EL ILMI IBNU TITI HAMZAH</span>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6 items-center font-semibold text-sm text-slate-600">
            <a href="#beranda" className="hover:text-emerald-700 transition">Beranda</a>
            <a href="#tentang" className="hover:text-emerald-700 transition">Tentang</a>
            <a href="#program" className="hover:text-emerald-700 transition">Program</a>
            <a href="#brosur" className="hover:text-emerald-700 transition">Info Brosur</a>
            <a href="#kegiatan" className="hover:text-emerald-700 transition">Jadwal</a>
            <a href="#ustadz" className="hover:text-emerald-700 transition">Asatidz</a>
            <a href="#galeri" className="hover:text-emerald-700 transition">Galeri</a>
            <a href="#biaya" className="hover:text-emerald-700 transition">Biaya</a>
            <a href="#pendaftaran" className="bg-emerald-800 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-full shadow transition">Daftar</a>
          </nav>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-3 font-semibold text-slate-700 shadow-xl">
            <a href="#beranda" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-emerald-700">Beranda</a>
            <a href="#tentang" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-emerald-700">Tentang</a>
            <a href="#program" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-emerald-700">Program</a>
            <a href="#brosur" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-emerald-700">Info Brosur</a>
            <a href="#kegiatan" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-emerald-700">Jadwal Harian</a>
            <a href="#ustadz" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-emerald-700">Asatidz</a>
            <a href="#galeri" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-emerald-700">Galeri</a>
            <a href="#biaya" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-emerald-700">Biaya</a>
            <a href="#pendaftaran" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-center bg-emerald-800 text-white font-bold rounded-xl shadow">Daftar Santri</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="beranda" className="relative bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-800 text-white py-28 px-4 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6 relative z-10 pt-4">
          <span className="bg-amber-400 text-emerald-950 text-xs sm:text-sm font-extrabold px-5 py-2 rounded-full uppercase inline-block shadow-md">
            ✨ Merawat Tradisi, Merespons Modernisasi | Education For All
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            {typedText}<span className="border-r-4 border-amber-400 animate-pulse mr-2"></span> <br className="hidden sm:block" />
            <span className="text-amber-300 drop-shadow">Berilmu & Berakhlak Mulia</span>
          </h1>
          <p className="text-base sm:text-lg text-emerald-50 max-w-2xl mx-auto font-light leading-relaxed">
            Pondok Pesantren Modern Daar el Ilmi Ibnu Titi Hamzah (Dibawah Yayasan Daar el-Ilmi Nusantara, Khodimul Ma'had Dr. Syarifudin Hamzah, S.Pd.I., M.Pd).
          </p>
          <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#pendaftaran" className="bg-amber-400 hover:bg-amber-500 text-emerald-950 font-extrabold px-9 py-4 rounded-2xl shadow-xl transition transform hover:-translate-y-1">Daftar Sekarang</a>
            <a href="#brosur" className="bg-emerald-900/60 hover:bg-emerald-900 text-white font-bold px-9 py-4 rounded-2xl border border-emerald-500/50 shadow-lg transition transform hover:-translate-y-1">Lihat Info Brosur</a>
          </div>
        </div>
      </section>

      {/* Sekilas Tentang Pesantren */}
      <section id="tentang" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-emerald-700 font-bold uppercase text-xs tracking-widest bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">Sekilas Tentang Pesantren</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">Mendidik dengan Hati, Mencetak Saintis yang Hafal Al-Qur'an</h2>
            <p className="text-slate-600 leading-relaxed text-justify text-sm sm:text-base">
              Pondok Pesantren Daar el-Ilmi Ibnu Titi Hamzah di bawah Yayasan Daar el-Ilmi Nusantara beroperasional izin sejak Desember 2018, dipimpin oleh Al-Ustadz Dr. Syarifudin Hamzah, S.Pd.I., M.Pd. (Alumni Pondok Pesantren Daar el Qolam 2 Gintung Jayanti Tangerang), dengan Dewan Pembina Pesantren KH. Embay Mulya Syarief dan Drs. KH. Jarkasih, M.Pd.
            </p>
            <p className="text-slate-600 leading-relaxed text-justify text-sm sm:text-base">
              Bermula dari pengajian ibu-ibu dan masyarakat pada tahun 2021, didirikanlah Pesantren Daar el-Ilmi ITH di Kp. Karang Jahe, Pancanegara, Pabuaran, Serang. Dalam kegiatan belajar mengajar, memadukan sistem Pondok Modern Darussalam Gontor dan Kementerian Agama, serta mengintegrasikan program Tahfidz Al-Qur'an 30 Juz dan kajian kitab salafi guna menciptakan generasi muda Islam yang mu'min, muttaqin, dan rasikh fil 'ilmi.
            </p>
          </div>
          <div className="bg-emerald-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl border border-emerald-800 space-y-6">
            <h3 className="text-2xl font-bold text-amber-300">Visi & Karakter Utama</h3>
            <ul className="space-y-4 text-emerald-100 text-sm">
              <li className="flex items-start space-x-3"><Star className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" /><span>Khodimul Ma'had: Dr. Syarifudin Hamzah, S.Pd.I., M.Pd.</span></li>
              <li className="flex items-start space-x-3"><Star className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" /><span>Dewan Pembina: KH. Embay Mulya Syarief & Drs. KH. Jarkasih, M.Pd.</span></li>
              <li className="flex items-start space-x-3"><Star className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" /><span>Mencetak santri yang menguasai sains, teknologi, serta bahasa Arab & Inggris.</span></li>
              <li className="flex items-start space-x-3"><Star className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" /><span>Siap menghadapi tantangan kehidupan pada masanya.</span></li>
            </ul>
          </div>
        </div>

        {/* Program Khusus Yatim Piatu & Dhuafa */}
        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center gap-6 shadow-sm">
          <div className="bg-emerald-700 text-white p-4 rounded-2xl shadow-sm shrink-0">
            <HeartHandshake className="w-10 h-10" />
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-emerald-900">Program Khusus Yatim Piatu & Dhuafa</h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Pesantren Daar el-Ilmi ITH Serang Banten memiliki <b>program khusus gratis</b> bagi santriwan dan santriwati yatim piatu serta dhuafa yang memenuhi persyaratan yang ditentukan oleh yayasan.
            </p>
          </div>
        </div>
      </section>

      {/* Program & Jenjang Pendidikan */}
      <section id="program" className="py-24 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-emerald-700 font-bold uppercase text-xs tracking-widest bg-emerald-100 px-3.5 py-1.5 rounded-full">Kurikulum Unggulan</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Program & Jenjang Pendidikan</h2>
            <p className="text-slate-600">Pilihan jalur pendidikan formal terbaik untuk masa depan buah hati Anda.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg border border-slate-200 space-y-4">
              <div className="bg-emerald-100 text-emerald-800 w-16 h-16 rounded-2xl flex items-center justify-center font-bold"><BookOpen className="h-8 w-8" /></div>
              <h3 className="text-2xl font-bold text-slate-900">1. Program Reguler (6 Tahun)</h3>
              <p className="text-slate-600 text-sm">Khusus lulusan SD/MI wajib mukim:</p>
              <ul className="list-disc list-inside text-slate-700 text-sm space-y-1.5 font-medium">
                <li>Madrasah Tsanawiyah (MTs) - 3 Tahun</li>
                <li>Madrasah Aliyah (MA) - 3 Tahun</li>
              </ul>
            </div>
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg border border-slate-200 space-y-4">
              <div className="bg-amber-100 text-amber-800 w-16 h-16 rounded-2xl flex items-center justify-center font-bold"><Award className="h-8 w-8" /></div>
              <h3 className="text-2xl font-bold text-slate-900">2. Program Takhasus (3 Tahun)</h3>
              <p className="text-slate-600 text-sm">Khusus lulusan MTs/SMP:</p>
              <ul className="list-disc list-inside text-slate-700 text-sm space-y-1.5 font-medium">
                <li>Program Madrasah Aliyah (MA) 3 Tahun</li>
                <li>1 Semester fokus penyetaraan Bahasa Arab & Inggris serta Tahsin Al-Qur'an</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Info Brosur */}
      <section id="brosur" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 bg-white">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-emerald-700 font-bold uppercase text-xs tracking-widest bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">Informasi Resmi Brosur</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Fasilitas, Syarat & Ekstrakurikuler</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-200 space-y-4">
            <div className="bg-teal-100 text-teal-800 w-14 h-14 rounded-2xl flex items-center justify-center font-bold"><MapPin className="h-7 w-7" /></div>
            <h3 className="text-xl font-bold text-slate-900">Fasilitas Pesantren</h3>
            <ul className="text-slate-600 text-sm space-y-2">
              <li>• Asrama dengan kamar mandi di dalam</li>
              <li>• Musholla & Gedung Sekolah</li>
              <li>• Lapangan Olahraga & Saung</li>
              <li>• Koperasi/Kantin & Wartel</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-200 space-y-4">
            <div className="bg-amber-100 text-amber-800 w-14 h-14 rounded-2xl flex items-center justify-center font-bold"><FileText className="h-7 w-7" /></div>
            <h3 className="text-xl font-bold text-slate-900">Syarat Berkas Masuk</h3>
            <ul className="text-slate-600 text-sm space-y-2">
              <li>• Datang bersama orang tua/wali</li>
              <li>• Salinan Ijazah dilegalisir (3 lbr)</li>
              <li>• Salinan NISN & Akta Kelahiran</li>
              <li>• Pas foto 3x4 (5 lembar)</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-200 space-y-4">
            <div className="bg-emerald-100 text-emerald-800 w-14 h-14 rounded-2xl flex items-center justify-center font-bold"><CheckSquare className="h-7 w-7" /></div>
            <h3 className="text-xl font-bold text-slate-900">Ekstrakurikuler & Praktik</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Khutbah Jumat, memandikan & menshalatkan jenazah, imam shalat, tahfidz, pidato 3 bahasa, pramuka, karate, kaligrafi, letter, janur, lukis, sablon, drumband, band, nasyid, qosidah, marawis, menjahit, jurnalistik, teater, renang, dan olahraga lengkap.
            </p>
          </div>
        </div>

        {/* Perlengkapan Santri */}
        <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-200 space-y-6 max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 border-b pb-6">
            <div className="bg-emerald-100 text-emerald-800 p-3.5 rounded-2xl">
              <Package className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Perlengkapan Wajib Santri</h3>
              <p className="text-slate-500 text-xs sm:text-sm">Kelengkapan atribut dan barang yang harus dimiliki santri untuk tinggal di pesantren.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
            <div className="space-y-3">
              <div className="flex items-start space-x-2.5">
                <span className="font-bold text-amber-600">1.</span>
                <span><b>Lemari:</b> Dibeli di pesantren untuk keseragaman ukuran dan bentuk.</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <span className="font-bold text-amber-600">2.</span>
                <span><b>Kasur:</b> Ukuran 180 x 70 (dapat dibeli di pesantren atau di luar pesantren).</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <span className="font-bold text-amber-600">3.</span>
                <span><b>Seragam Sekolah:</b> Dibuat di tempat jahit pesantren atau tempat lain sesuai ketentuan seragam.</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <span className="font-bold text-amber-600">4.</span>
                <span><b>Buku Pelajaran:</b> Untuk 2 semester (dibeli di pesantren).</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-2.5">
                <span className="font-bold text-amber-600">5.</span>
                <span><b>Seragam Olahraga:</b> Dibeli di pesantren.</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <span className="font-bold text-amber-600">6.</span>
                <span><b>Seprei:</b> Dibeli di pesantren.</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <span className="font-bold text-amber-600">7.</span>
                <span><b>Tas Sandal:</b> Dibeli di pesantren.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jadwal Kegiatan Harian Santri */}
      <section id="kegiatan" className="py-24 bg-emerald-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-amber-300 font-bold uppercase text-xs tracking-widest bg-emerald-800 px-4 py-1.5 rounded-full">Disiplin & Ketaturan Pesantren</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Jadwal Kegiatan Harian Santri</h2>
            <p className="text-emerald-100 text-sm">Rutinitas harian santri mukim dari pagi hingga malam hari.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-emerald-700 p-6 sm:p-10 space-y-4 text-sm text-emerald-50">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 py-3 border-b border-emerald-700 font-bold text-amber-300">
              <div className="sm:col-span-1 flex items-center gap-2"><Clock className="w-4 h-4"/> Waktu</div>
              <div className="sm:col-span-3">Agenda Kegiatan</div>
            </div>

            {[
              { jam: "03.40 - 04.00", kegiatan: "Sholat tahajud dan Persiapan Sholat subuh berjama'ah" },
              { jam: "04.30 - 05.00", kegiatan: "Sholat Subuh berjama'ah dan membaca al-Qur'an" },
              { jam: "05.00 - 05.50", kegiatan: "Kegiatan bahasa (Lughotul Mufradat & Mubadatsah), olahraga dan pengajian kitab salaf (klasik)" },
              { jam: "05.50 - 06.50", kegiatan: "Sarapan pagi, mandi, sholat dhuha dan persiapan masuk kelas" },
              { jam: "06.50 - 12.05", kegiatan: "KBM (Kegiatan Belajar Mengajar) dengan jeda istirahat pertama (08.30) dan kedua (10.30)" },
              { jam: "12.05 - 14.20", kegiatan: "Sholat dzuhur berjama'ah, makan siang, dan istirahat" },
              { jam: "14.20 - 15.45", kegiatan: "KBM lanjutan & Sholat ashar berjama'ah" },
              { jam: "15.45 - 17.00", kegiatan: "Free time, olahraga, ekstrakurikuler, dll." },
              { jam: "17.00 - 18.00", kegiatan: "Makan sore, mandi, persiapan sholat magrib, & ibadah amaliyah di musholla" },
              { jam: "18.00 - 19.45", kegiatan: "Sholat magrib berjama'ah, pengajian al-Qur'an per-kelompok, & Sholat isya" },
              { jam: "20.00 - 22.00", kegiatan: "Belajar malam (informal) di luar kamar" },
              { jam: "22.00 - 03.30", kegiatan: "Istirahat dan tidur malam" }
            ].map((jadwal, idx) => (
              <div key={idx} className="grid grid-cols-1 sm:grid-cols-4 gap-2 py-3 border-b border-emerald-700/50 items-center hover:bg-emerald-800/30 px-3 rounded-xl transition-colors">
                <div className="sm:col-span-1 font-bold text-amber-300">{jadwal.jam}</div>
                <div className="sm:col-span-3">{jadwal.kegiatan}</div>
              </div>
            ))}
            <div className="pt-4 text-xs text-amber-200 italic bg-emerald-950/60 p-5 rounded-2xl border border-emerald-700">
              *Catatan Hari Ahad (Libur): Kuliah subuh, kegiatan pengembangan bahasa & olahraga pagi, serta waktu bebas untuk ekstrakurikuler santri.
            </div>
          </div>
        </div>
      </section>

      {/* Pimpinan, Dewan Pembina, Penggagas & Pengajar */}
      <section id="ustadz" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white space-y-20">
        
        {/* 1. Dewan Pembina (2 Orang) */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-amber-600 font-bold uppercase text-xs tracking-widest bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200">Struktur Kelembagaan</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Dewan Pembina Pesantren</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {listPembina.map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-3xl overflow-hidden shadow-md border border-slate-200 text-center hover:shadow-xl transition flex flex-col group">
                <div className="h-48 bg-gradient-to-br from-emerald-800 to-emerald-950 flex flex-col items-center justify-center text-white p-4 relative overflow-hidden">
                  {item.foto ? (
                    <img src={item.foto} alt={item.nama} className="w-32 h-32 rounded-full border-4 border-amber-400 object-cover object-top shadow-md mb-2 group-hover:scale-105 transition" />
                  ) : (
                    <div className="w-32 h-32 bg-emerald-700 border-4 border-amber-400 rounded-full flex items-center justify-center text-4xl font-bold text-amber-300 mb-2 shadow-md group-hover:scale-105 transition">
                      {item.nama.charAt(3) || 'P'}
                    </div>
                  )}
                </div>
                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <h3 className="font-bold text-slate-900 text-base leading-snug">{item.nama}</h3>
                  <p className="text-xs font-semibold text-amber-600 pt-2 border-t border-slate-200">{item.jabatan}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Penggagas Pesantren (4 Orang) */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Penggagas Pesantren</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {listPenggagas.map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-3xl overflow-hidden shadow-md border border-slate-200 text-center hover:shadow-xl transition flex flex-col group">
                <div className="h-40 bg-gradient-to-br from-emerald-800 to-emerald-950 flex flex-col items-center justify-center text-white p-4 relative overflow-hidden">
                  {item.foto ? (
                    <img src={item.foto} alt={item.nama} className="w-28 h-28 rounded-full border-4 border-amber-400 object-cover object-top shadow-md mb-2 group-hover:scale-105 transition" />
                  ) : (
                    <div className="w-28 h-28 bg-emerald-700 border-4 border-amber-400 rounded-full flex items-center justify-center text-3xl font-bold text-amber-300 mb-2 shadow-md group-hover:scale-105 transition">
                      {item.nama.charAt(0) || 'P'}
                    </div>
                  )}
                </div>
                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">{item.nama}</h4>
                  <p className="text-xs font-semibold text-amber-600 pt-2 border-t border-slate-200">{item.jabatan}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Dewan Pengajar & Asatidz */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-emerald-700 font-bold uppercase text-xs tracking-widest bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">Asatidz & Pengasuh</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Khodimul Ma'had & Dewan Pengajar</h3>
            <p className="text-slate-600 text-sm">Dibimbing langsung oleh para ustadz dan asatidz berpengalaman.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {listUstadz.map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-3xl overflow-hidden shadow-md border border-slate-200 text-center hover:shadow-xl transition flex flex-col group">
                <div className="h-48 bg-gradient-to-br from-emerald-800 to-emerald-950 flex flex-col items-center justify-center text-white p-4 relative overflow-hidden">
                  {item.foto ? (
                    <img src={item.foto} alt={item.nama} className="w-32 h-32 rounded-full border-4 border-amber-400 object-cover object-top shadow-md mb-2 group-hover:scale-105 transition" />
                  ) : (
                    <div className="w-32 h-32 bg-emerald-700 border-4 border-amber-400 rounded-full flex items-center justify-center text-4xl font-bold text-amber-300 mb-2 shadow-md group-hover:scale-105 transition">
                      {item.nama.charAt(11) || 'U'}
                    </div>
                  )}
                </div>
                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <h4 className="font-bold text-slate-900 text-base leading-snug">{item.nama}</h4>
                  <p className="text-xs font-semibold text-amber-600 pt-2 border-t border-slate-200">{item.jabatan}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Galeri Kegiatan */}
      <section id="galeri" className="py-24 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <div className="space-y-3 max-w-3xl mx-auto">
            <span className="text-emerald-700 font-bold uppercase text-xs tracking-widest bg-emerald-100 px-3.5 py-1.5 rounded-full">Dokumentasi</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Galeri Kegiatan Santri</h2>
          </div>
          <div className="flex justify-center gap-2 flex-wrap">
            {['Semua', 'Pramuka', 'Tahfidz', 'Akademik', 'Ekstrakurikuler', 'Bersama'].map((kat) => (
              <button
                key={kat}
                onClick={() => setActiveTabGaleri(kat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition shadow-sm ${activeTabGaleri === kat ? 'bg-emerald-800 text-white shadow-md' : 'bg-white border border-slate-200 text-slate-700 hover:bg-emerald-50'}`}
              >
                {kat}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            {galeriFiltered.map((item, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition flex flex-col group">
                <div className="h-56 bg-slate-100 relative overflow-hidden">
                  {item.foto ? (
                    <img src={item.foto} alt={item.judul} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300 bg-emerald-50">
                      <ImageIcon className="w-14 h-14 opacity-40 text-emerald-800" />
                    </div>
                  )}
                </div>
                <div className="p-8 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest bg-amber-100 text-amber-800 px-3 py-1 rounded-full">{item.kategori}</span>
                    <h3 className="font-bold text-slate-900 text-xl">{item.judul}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-emerald-700 font-bold uppercase text-xs tracking-widest bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">Kepercayaan Wali Santri</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Apa Kata Mereka?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {listTestimoni.map((testi, index) => (
              <div key={index} className="bg-slate-50 p-8 sm:p-10 rounded-3xl shadow-md border border-slate-200 flex flex-col justify-between relative overflow-hidden hover:shadow-lg transition">
                <Quote className="absolute top-4 right-4 w-20 h-20 text-slate-200 pointer-events-none" />
                <div className="space-y-4 relative z-10">
                  <div className="flex space-x-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">"{testi.pesan}"</p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-200 relative z-10">
                  <h4 className="font-bold text-emerald-900 text-base">{testi.nama}</h4>
                  <p className="text-xs text-slate-500 font-medium">{testi.sebagai}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rincian Biaya */}
      <section id="biaya" className="py-24 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-emerald-700 font-bold uppercase text-xs tracking-widest bg-emerald-100 px-3.5 py-1.5 rounded-full">Informasi Resmi PSB 2027/2028</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Rincian Biaya Pendaftaran & Bulanan</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg border border-slate-200 space-y-6">
              <div className="border-b pb-4">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase">Sekali Bayar (Awal Masuk)</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2">Biaya Pendaftaran</h3>
              </div>
              <ul className="space-y-3.5 text-slate-700 text-sm">
                <li className="flex justify-between py-1.5 border-b border-dashed"><span>Pendaftaran dan Tes</span><span className="font-semibold text-slate-900">Rp 50.000</span></li>
                <li className="flex justify-between py-1.5 border-b border-dashed"><span>Infaq Pembangunan</span><span className="font-semibold text-slate-900">Rp 700.000</span></li>
                <li className="flex justify-between py-1.5 border-b border-dashed"><span>Pemeliharaan, Kasur, Lemari & Meja</span><span className="font-semibold text-slate-900">Rp 800.000</span></li>
              </ul>
              <div className="pt-2 flex justify-between items-center bg-emerald-50 p-5 rounded-2xl border border-emerald-200">
                <span className="font-bold text-slate-900">Total Awal Masuk</span>
                <span className="font-extrabold text-xl text-emerald-800">Rp 1.550.000</span>
              </div>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg border border-slate-200 space-y-6">
              <div className="border-b pb-4">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full uppercase">Rutinitas</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2">Iuran Bulanan</h3>
              </div>
              <ul className="space-y-3.5 text-slate-700 text-sm">
                <li className="flex justify-between py-1.5 border-b border-dashed"><span>Makan 3X Sehari</span><span className="font-semibold text-slate-900">Rp 300.000</span></li>
                <li className="flex justify-between py-1.5 border-b border-dashed"><span>SPP, Listrik, Air, dan Asrama</span><span className="font-semibold text-slate-900">Rp 200.000</span></li>
              </ul>
              <div className="pt-2 flex justify-between items-center bg-amber-50 p-5 rounded-2xl border border-emerald-200">
                <span className="font-bold text-slate-900">Total Per Bulan</span>
                <span className="font-extrabold text-xl text-amber-700">Rp 500.000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Pendaftaran Langsung WhatsApp */}
      <section id="pendaftaran" className="py-24 bg-emerald-900 text-white relative overflow-hidden">
        <div className="max-w-2xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12 space-y-3">
            <span className="bg-amber-400 text-emerald-950 text-xs font-extrabold px-4 py-1.5 rounded-full uppercase inline-block">Pendaftaran Online</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Formulir Pra-Pendaftaran</h2>
            <p className="text-emerald-100 text-sm">Isi data singkat untuk terhubung otomatis ke WhatsApp Panitia.</p>
          </div>
          <div className="bg-white text-slate-800 p-8 sm:p-10 rounded-3xl shadow-2xl border border-emerald-800">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-bold text-slate-900">Alhamdulillah, Berhasil!</h3>
                <p className="text-slate-600 text-sm">WhatsApp panitia pondok telah terbuka otomatis untuk data <b>{formData.nama}</b>.</p>
                <button onClick={() => setSubmitted(false)} className="bg-emerald-800 text-white px-8 py-3 rounded-xl text-sm font-semibold shadow hover:bg-emerald-700 transition">Isi Lagi</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Nama Calon Santri</label>
                  <input type="text" required placeholder="Contoh: Ahmad" value={formData.nama} onChange={(e) => setFormData({...formData, nama: e.target.value})} className="w-full px-4.5 py-3.5 rounded-2xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition shadow-sm text-slate-800" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Asal Sekolah</label>
                  <input type="text" required placeholder="Contoh: MTsN 1" value={formData.asal} onChange={(e) => setFormData({...formData, asal: e.target.value})} className="w-full px-4.5 py-3.5 rounded-2xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition shadow-sm text-slate-800" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Nomor WhatsApp Wali</label>
                  <input type="tel" required placeholder="Contoh: 08123456789" value={formData.noHp} onChange={(e) => setFormData({...formData, noHp: e.target.value})} className="w-full px-4.5 py-3.5 rounded-2xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition shadow-sm text-slate-800" />
                </div>
                <button type="submit" className="w-full bg-amber-400 hover:bg-amber-500 text-emerald-950 font-extrabold py-4 rounded-2xl shadow-lg transition transform hover:scale-[1.01]">Kirim Pendaftaran via WhatsApp</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-slate-800 pb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-emerald-800 p-1.5 rounded-2xl border border-emerald-700 w-12 h-12 flex items-center justify-center overflow-hidden">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-extrabold text-lg text-white tracking-wide">PONPES DAAR EL ILMI</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-sm text-slate-300">
                <MapPin className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                <span>Kp. Karang Jahe, Pancanegara, Pabuaran, Serang - Banten</span>
              </div>
              <div className="pt-2">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Pondok+Pesantren+Modern+Daar+El+Ilmi+Ibnu+Titi+Hamzah+2+Pancanegara+Serang" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-amber-400 hover:bg-amber-500 text-emerald-950 font-bold px-4.5 py-2.5 rounded-xl shadow transition text-xs"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Buka Titik Lokasi di Google Maps</span>
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-300 pt-2">
                <Phone className="h-5 w-5 text-amber-400 shrink-0" />
                <span>0859-5615-1322 / 0812-8486-7512</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-300">
                <Mail className="h-5 w-5 text-amber-400 shrink-0" />
                <span>info@daarelilmi.sch.id</span>
              </div>
            </div>

            {/* Tombol Tautan Media Sosial Resmi */}
            <div className="pt-4 space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-400">Ikuti Media Sosial Resmi Kami:</p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://youtube.com/@elilmiith2337?si=8NbF1fFnumlzNYjw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-xl shadow transition flex items-center space-x-2"
                >
                  <span>YouTube Resmi</span>
                </a>
                <a 
                  href="https://www.instagram.com/daarelilmi_ith?xtok=MTUxbms3bThub3Yx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white text-xs font-bold px-4 py-2 rounded-xl shadow transition flex items-center space-x-2"
                >
                  <span>Instagram Resmi</span>
                </a>
                <a 
                  href="https://www.tiktok.com/@daar_elilmi_ith?_r=1&_t=ZS-9BJkyJaFAZB" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-xl shadow transition flex items-center space-x-2 border border-slate-700"
                >
                  <span>TikTok Resmi</span>
                </a>
              </div>
            </div>

          </div>
          
          <div className="w-full h-56 md:h-full rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.866042456455!2d106.0931374!3d-6.177003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e41f954e76a2613%3A0x457f6fde8f72ec33!2sPondok%20Pesantren%20Modern%20Daar%20El%20Ilmi%20Ibnu%20Titi%20Hamzah%202!5e1!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
        <div className="text-center pt-8 text-xs text-slate-400 font-medium">
          <p>&copy; 2026 Pondok Pesantren Modern Daar el Ilmi Ibnu Titi Hamzah. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
