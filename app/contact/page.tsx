"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Send,
  ArrowUpRight,
   Loader2,
   Camera,
} from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ParallaxBackground } from "@/components/ui/ParallaxBackground";




export default function ContactPage() {

const [form, setForm] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const [errors, setErrors] = useState<any>({});
const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);
const [toast, setToast] = useState<string | null>(null);

const validate = () => {
  const e: any = {};
  if (!form.name.trim()) e.name = "Please enter your name";
  if (!form.email.trim()) e.email = "Email is required";
  else if (!/^\S+@\S+\.\S+$/.test(form.email))
    e.email = "Invalid email address";
  if (!form.message.trim()) e.message = "Message cannot be empty";

  setErrors(e);
  return Object.keys(e).length === 0;
};

const handleSubmit = async (ev: any) => {
  ev.preventDefault();
  if (!validate()) return;

  setLoading(true);
  setToast(null);

  await new Promise((r) => setTimeout(r, 1800)); // fake async

  setLoading(false);
  setSuccess(true);
  setToast("Message sent successfully 🚀");

  setForm({ name: "", email: "", subject: "", message: "" });

  setTimeout(() => setSuccess(false), 2500);
};
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <ParallaxBackground />

      {/* HERO */}
     <section className="py-20 sm:py-28 md:py-32 px-5 sm:px-6">
  <div className="max-w-6xl mx-auto">

    <motion.p
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-accent tracking-[0.35em] text-[10px] sm:text-xs mb-4 sm:mb-6"
    >
      CONTACT
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 }}
      className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight"
    >
      Let’s <span className="text-accent">Connect</span>
    </motion.h1>

    <div className="w-20 sm:w-24 h-px bg-gradient-to-r from-accent/70 to-transparent my-6 sm:my-10" />

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed"
    >
      Have a project, idea, or opportunity?  
      I’m always open to meaningful conversations and collaborations.
    </motion.p>

  </div>
</section>

      {/* DETAILS + SOCIALS */}
     <section className="px-5 sm:px-6 pb-16 sm:pb-20">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-10">

    {/* DETAILS */}
    <div>
      <SectionLabel>Details</SectionLabel>
      <div className="space-y-3 sm:space-y-4">

        <ContactCard
          icon={<Mail size={18} />}
          label="Email"
          value="contact@sonurajeugale.com"
          href="mailto:contact@sonurajeugale.com"
        />

        {/* <ContactCard
          icon={<Phone size={18} />}
          label="Phone"
          value="+91 98811 87722"
          href="tel:+919881187722"
        /> */}

        <ContactCard
          icon={<MapPin size={18} />}
          label="Location"
          value="Pune, India"
          href="https://maps.google.com/?q=Pune,India"
        />

      </div>
    </div>

    {/* SOCIALS */}
    <div>
      <SectionLabel>Socials</SectionLabel>
      <div className="space-y-3 sm:space-y-4">

        <ContactCard
          icon={<Github size={18} />}
          label="GitHub"
          value="@csprl1"
          href="https://github.com/csprl1"
        />

        <ContactCard
          icon={<Linkedin size={18} />}
          label="LinkedIn"
          value="/in/prathamesh-ugale-1aa536138"
          href="https://www.linkedin.com/in/prathamesh-ugale-1aa536138/"
        />

        <ContactCard
          icon={<Instagram size={18} />}
          label="Instagram"
          value="@sonurajeugale"
          href="https://instagram.com/sonurajeugale"
        />

        <ContactCard
          icon={<Twitter size={18} />}
          label="X (Twitter)"
          value="@sonurajeugale"
          href="https://x.com/sonurajeugale?s=21"
        />
        <ContactCard
  icon={<Camera size={18} />}
  label="Unsplash"
  value="@sonurajeugale"
  href="https://unsplash.com/@sonurajeugale"
/>

      </div>
    </div>

  </div>
</section>

      {/* FORM */}
     <section className="px-5 sm:px-6 pb-20 sm:pb-28">
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="
      max-w-6xl mx-auto
      rounded-3xl
      border border-white/10
      bg-gradient-to-b from-white/[0.05] to-white/[0.01]
      backdrop-blur-2xl
      p-5 sm:p-8 md:p-12
      shadow-[0_30px_120px_rgba(0,0,0,0.7)]
    "
  >
    <h3 className="
  text-lg sm:text-xl
  font-semibold
  mb-5 sm:mb-8
  tracking-tight
  text-center sm:text-left
">
  Send a Message
</h3>

    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4 sm:gap-6">

      <Input
        label="Name"
        value={form.name}
        onChange={(v: string) => setForm({ ...form, name: v })}
        error={errors.name}
      />

      <Input
        label="Email"
        value={form.email}
        onChange={(v: string) => setForm({ ...form, email: v })}
        error={errors.email}
      />

      <div className="md:col-span-2">
        <Input
          label="Subject"
          value={form.subject}
          onChange={(v: string) => setForm({ ...form, subject: v })}
        />
      </div>

      <div className="md:col-span-2">
        <Textarea
          label="Message"
          value={form.message}
          onChange={(v: string) => setForm({ ...form, message: v })}
          error={errors.message}
        />
      </div>

      <div className="md:col-span-2 pt-2 sm:pt-4 flex justify-center">

        <button
          type="submit"
          disabled={loading}
          className="
            inline-flex items-center gap-2
            px-6 sm:px-8
            py-3 sm:py-3.5
            rounded-full
            bg-accent text-black
            text-sm font-medium
            sm:hover:scale-[1.04]
            active:scale-[0.98]
            transition-all duration-200
            shadow-[0_12px_50px_rgba(255,180,0,0.35)]
            disabled:opacity-50
          "
        >
          {loading ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send size={16} />
            </>
          )}
        </button>

        <AnimatePresence>
          {success && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-green-400 text-sm mt-2"
            >
              Message delivered successfully
            </motion.p>
          )}
        </AnimatePresence>

      </div>

    </form>
  </motion.div>
</section>

      {/* AVAILABILITY */}
     <section className="px-5 sm:px-6 pb-20 sm:pb-36">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="
      relative
      max-w-6xl mx-auto rounded-3xl
      border border-white/10
      bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent
      backdrop-blur-xl
      px-5 sm:px-10 md:px-12
      py-8 sm:py-10
      text-center
      shadow-[0_25px_100px_rgba(0,0,0,0.55)]
      overflow-hidden
    "
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,180,0,0.12),transparent_60%)] pointer-events-none" />

    <p className="text-[10px] sm:text-xs tracking-[0.35em] text-accent mb-2 sm:mb-3">
      ● AVAILABLE FOR WORK
    </p>

    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 tracking-tight">
      Let’s Build Something Meaningful
    </h3>

    <p className="text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
      Currently available for freelance projects, long-term collaborations,
      and select full-time opportunities.
    </p>

    <div className="mt-4 sm:mt-6 flex justify-center">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="
          text-sm text-accent
          hover:text-white
          transition-colors duration-200
          active:scale-[0.98]
        "
      >
        Start a conversation →
      </button>
    </div>

  </motion.div>
</section>
      <AnimatePresence>
  {toast && (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 30, opacity: 0 }}
      className="
fixed bottom-6 right-6
bg-white/[0.05]
backdrop-blur-xl
border border-white/10
px-5 py-3 rounded-xl
shadow-[0_10px_40px_rgba(0,0,0,0.4)]
text-sm
"
    >
      {toast}
    </motion.div>
  )}
</AnimatePresence>

      <Footer />
    </main>
  );
}

/* ---------------- SMALL COMPONENTS ---------------- */

function SectionLabel({ children }: any) {
  return (
    <h3 className="text-sm text-gray-500 mb-4 tracking-wide">
      {children}
    </h3>
  );
}

// function ContactCard({ icon, label, value }: any) {
//   return (
//     <motion.div
//       whileHover={{ y: -3 }}
//       transition={{ type: "spring", stiffness: 250, damping: 18 }}
//       className="
//         group relative flex items-center justify-between
//         rounded-2xl border border-white/10
//         bg-gradient-to-b from-white/[0.05] to-white/[0.01]
//         backdrop-blur-xl px-5 py-4
//         hover:border-accent/30
//         hover:shadow-[0_10px_40px_rgba(255,180,0,0.08)]
//         transition
//       "
//     >
//       <div className="flex items-center gap-3">
//         <div className="text-accent">{icon}</div>
//         <div>
//           <p className="text-[11px] text-gray-500 uppercase tracking-wider">
//             {label}
//           </p>
//           <p className="text-sm text-gray-200">{value}</p>
//         </div>
//       </div>

//       <ArrowUpRight
//         size={16}
//         className="opacity-30 group-hover:opacity-100 transition"
//       />
//     </motion.div>
//   );
// }
function ContactCard({ icon, label, value, href }: any) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className="
        group relative flex items-center justify-between
        rounded-2xl border border-white/10
        bg-gradient-to-b from-white/[0.05] to-white/[0.01]
        backdrop-blur-xl px-5 py-4
        hover:border-accent/30
        hover:shadow-[0_10px_40px_rgba(255,180,0,0.08)]
        transition cursor-pointer
      "
    >
      <div className="flex items-center gap-3">
        <div className="text-accent">{icon}</div>
        <div>
          <p className="text-[11px] text-gray-500 uppercase tracking-wider">
            {label}
          </p>
          <p className="text-sm text-gray-200">{value}</p>
        </div>
      </div>

      <ArrowUpRight
        size={16}
        className="opacity-30 group-hover:opacity-100 transition"
      />
    </motion.a>
  );
}

function Input({ label, placeholder, value, onChange, error }: any) {
  return (
    <div>
      <div className="relative">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder=" "
          className="
  peer w-full px-4 py-3.5 rounded-xl
  bg-black/50
  border border-white/10
  text-sm text-white
  transition-all duration-200
  focus:outline-none
  focus:border-accent/50
  focus:bg-black/70
  focus:shadow-[0_0_0_3px_rgba(255,180,0,0.08)]
"
        />
        <label
  className={`
    absolute left-4
    transition-all duration-200
    pointer-events-none
    bg-[#0a0a0a] px-1.5

    ${value ? "top-[-7px] text-xs text-accent" : "top-3.5 text-sm text-gray-500"}

    peer-focus:top-[-7px]
    peer-focus:text-xs
    peer-focus:text-accent
  `}
>
  {label}
</label>
      </div>

      {error && (
        <p className="text-red-400 text-xs mt-1">{error}</p>
      )}
    </div>
  );
}
function Textarea({ label, placeholder, value, onChange, error }: any) {
  return (
    <div>
      <div className="relative">
        <textarea
          rows={5}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder=" "
          className="
peer w-full px-4 py-3.5 rounded-xl
bg-black/50
border border-white/10
text-sm text-white
transition-all duration-200
focus:outline-none
focus:border-accent/50
focus:bg-black/70
focus:shadow-[0_0_0_3px_rgba(255,180,0,0.08)]
resize-none
"
        />
        <label
          className="
            absolute left-4 top-3 text-sm text-gray-500
            transition-all
            peer-placeholder-shown:top-3
            peer-focus:top-1.5
            peer-focus:text-xs
            peer-focus:text-accent
          "
        >
          {label}
        </label>
      </div>

      {error && (
        <p className="text-red-400 text-xs mt-1">{error}</p>
      )}
    </div>
  );
}