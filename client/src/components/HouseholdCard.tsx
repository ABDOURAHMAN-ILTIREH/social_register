import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Phone, MapPin, Users } from 'lucide-react';
import { Household } from '../contexts/DataContext'

interface HouseholdCardProps {
  household: Household;
}

const HouseholdCard: React.FC<HouseholdCardProps> = ({ household }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className={`h-2 ${household.residenceType === 'urban' ? 'bg-blue-600' : 'bg-green-600'}`}></div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {household.headName}
        </h3>
        
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center">
            <Users size={16} className="mr-2 text-gray-400" />
            <span>Taille du ménage: {household.size}</span>
          </div>
          
          <div className="flex items-center">
            <Phone size={16} className="mr-2 text-gray-400" />
            <span>{household.phone}</span>
          </div>
          
          <div className="flex items-center">
            <Home size={16} className="mr-2 text-gray-400" />
            <span>{household.housingSituation.housingType}</span>
          </div>
          
          <div className="flex items-center">
            <MapPin size={16} className="mr-2 text-gray-400" />
            <span className="flex items-center">
              <span className={`inline-block w-2 h-2 rounded-full mr-1 ${household.residenceType === 'urban' ? 'bg-blue-600' : 'bg-green-600'}`}></span>
              {household.residenceType === 'urban' ? 'Urbain' : 'Rural'}
            </span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
          <Link 
            to={`/households/${household.id}`}
            className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            Voir détails →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default HouseholdCard;