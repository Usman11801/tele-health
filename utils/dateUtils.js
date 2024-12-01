// utils/dateUtils.js
export const formatDateTime = (isoString) => {
    const options = {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', hour12: true
    };
    return new Date(isoString).toLocaleString('en-US', options).replace(',', '');
};
