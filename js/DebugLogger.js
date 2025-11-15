/**
 * Debug logging utility - only logs in debug builds
 * Production builds will have all console output disabled
 */

// Check if debug mode is enabled
const DEBUG_MODE = window.DEBUG_MODE !== undefined ? window.DEBUG_MODE : (
    // Enable debug in development (localhost or file://)
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.protocol === 'file:' ||
    // Enable debug if URL contains debug parameter
    new URLSearchParams(window.location.search).has('debug')
);

// Store original console methods
const originalConsole = {
    log: console.log,
    warn: console.warn,
    error: console.error,
    info: console.info,
    debug: console.debug
};

export const DebugLogger = {
    // Debug logging methods (only work in debug mode)
    log: DEBUG_MODE ? originalConsole.log.bind(console) : () => {},
    warn: DEBUG_MODE ? originalConsole.warn.bind(console) : () => {},
    info: DEBUG_MODE ? originalConsole.info.bind(console) : () => {},
    debug: DEBUG_MODE ? originalConsole.debug.bind(console) : () => {},

    // Error logging (always enabled for critical issues)
    error: originalConsole.error.bind(console),

    // Force logging (bypasses debug mode - use sparingly)
    forceLog: originalConsole.log.bind(console),

    // Get debug mode status
    isDebugMode: () => DEBUG_MODE,

    // Disable all console logging for production
    disableAllLogging: () => {
        console.log = () => {};
        console.warn = () => {};
        console.info = () => {};
        console.debug = () => {};
        // Keep console.error for critical issues
    }
};

// Auto-disable logging in production builds
if (!DEBUG_MODE) {
    DebugLogger.disableAllLogging();
}

// Export for global access
window.DebugLogger = DebugLogger;