'use client';

import React, { useState } from 'react';
import MegaMenu from './MegaMenu';
import { MenuCategory } from '@/lib/types';

interface MegaMenuWrapperProps {
  categories: MenuCategory[];
}

const MegaMenuWrapper: React.FC<MegaMenuWrapperProps> = ({ categories }) => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const handleCategoryHover = (categoryId: string) => {
    setHoveredCategory(categoryId);
  };

  return (
    <MegaMenu 
      categories={categories}
      onCategoryHover={handleCategoryHover}
    />
  );
};

export default MegaMenuWrapper;