import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiBox, FiBriefcase, FiHeart, FiShield, FiUser } from 'react-icons/fi';
import { FaCar, FaHardHat, FaMotorcycle, FaTruck, FaWalking } from 'react-icons/fa';
import { MdMedicalServices } from 'react-icons/md';

const icons = {
  car: FaCar,
  truck: FaTruck,
  motorcycle: FaMotorcycle,
  walking: FaWalking,
  hardhat: FaHardHat,
  falling: FiBriefcase,
  medical: MdMedicalServices,
  heart: FiHeart,
  box: FiBox,
  shield: FiShield,
};

export default function PracticeAreaCard({ area, index = 0 }) {
  const Icon = icons[area.icon] || FiUser;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="group border border-warm-dark bg-white p-6 transition-shadow hover:shadow-md"
    >
      <div className="mb-4 inline-flex rounded-sm bg-navy/5 p-3 text-gold transition-colors group-hover:bg-navy group-hover:text-gold">
        <Icon size={22} aria-hidden />
      </div>
      <h3 className="font-heading text-xl font-semibold text-navy">
        <Link to={`/practice-areas/${area.slug}`} className="hover:text-gold">
          {area.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate">{area.shortDescription}</p>
      <Link
        to={`/practice-areas/${area.slug}`}
        className="mt-4 inline-block text-sm font-semibold text-gold hover:underline"
      >
        Learn more →
      </Link>
    </motion.article>
  );
}
