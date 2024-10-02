import React from 'react';

const MobileWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className="md:hidden">{children}</div>;
};

export default MobileWrapper;
