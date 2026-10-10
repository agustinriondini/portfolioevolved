$(document).ready(function() {
    const VERSION_INFO = {
        release: 'public_release',
        version: 'v2.1.0',
        date: '2026-10-09',
        build: '#24'
    };

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
});
