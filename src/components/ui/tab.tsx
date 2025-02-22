// @/components/ui/tab.tsx
import React from 'react';

interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ active, children, ...props }) => {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-lg cursor-pointer ${
        active
          ? 'bg-blue-600 text-white'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {children}
    </button>
  );
};

export default Tab;