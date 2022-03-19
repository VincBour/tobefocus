import * as React from 'react';

export interface MainModalProps {}

export const MainModal: React.FC<MainModalProps> = ({children}) => {
    return  <div id="defaultModal" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
    <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
        {children}
    </div>
</div>;
};

MainModal.displayName = "MainModal";