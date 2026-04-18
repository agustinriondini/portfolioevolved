$(document).ready(function() {
    // Centralized version information - Update this object for new releases
    const VERSION_INFO = {
        release: 'public_release',
        version: 'v2.0.0',
        date: '2024-12-01',
        build: '#23'
    };

    // Update DOM elements
    const elements = {
        '#release': VERSION_INFO.release,
        '#updateVer': VERSION_INFO.version,
        '#release_date': VERSION_INFO.date,
        '#build': VERSION_INFO.build
    };

    Object.entries(elements).forEach(([selector, value]) => {
        const el = $(selector);
        if (el.length) {
            el.text(value);
        }
    });

    //console.log('Version updated to:', VERSION_INFO); // For debugging
});
