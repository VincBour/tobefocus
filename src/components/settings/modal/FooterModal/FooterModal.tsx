import * as React from 'react';

export interface FooterModalProps {}

export const FooterModal: React.FC<FooterModalProps> = ({children}) => {
    return <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
    {children}
</div>;
};

FooterModal.displayName = "FooterModal";