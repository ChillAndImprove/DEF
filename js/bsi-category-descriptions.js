/**
 * BSI IT-Grundschutz Category Descriptions
 *
 * BSI (Bundesamt für Sicherheit in der Informationstechnik / Federal Office for Information Security)
 * IT-Grundschutz Kompendium organizes security modules into categories.
 *
 * Each BSI code follows the format: PREFIX.X.Y
 * Example: APP.3.4 means Application (APP) category, module 3.4
 */

const BSI_CATEGORIES = {
  // Core Technical Categories
  "APP": {
    shortName: "APP",
    fullName: "Anwendungen",
    englishName: "Applications",
    description: "Security requirements for software applications and services",
    examples: ["Office products", "Web applications", "SAP", "Email clients", "Directory services"]
  },

  "SYS": {
    shortName: "SYS",
    fullName: "IT-Systeme",
    englishName: "Systems",
    description: "Security requirements for operating systems and IT systems",
    examples: ["Windows servers", "Linux systems", "Clients", "Mobile devices", "Containers"]
  },

  "NET": {
    shortName: "NET",
    fullName: "Netze und Kommunikation",
    englishName: "Networks and Communication",
    description: "Security requirements for network infrastructure and communication",
    examples: ["Firewalls", "Routers", "Switches", "VPN", "WLAN"]
  },

  "INF": {
    shortName: "INF",
    fullName: "Infrastruktur",
    englishName: "Infrastructure",
    description: "Security requirements for physical infrastructure and facilities",
    examples: ["Server rooms", "Data centers", "Buildings", "Cabling", "Home office"]
  },

  // Process and Organization Categories
  "ISMS": {
    shortName: "ISMS",
    fullName: "ISMS (Information Security Management System)",
    englishName: "ISMS",
    description: "Security management and governance processes",
    examples: ["Security policies", "Risk management", "Security organization"]
  },

  "ORP": {
    shortName: "ORP",
    fullName: "Organisation und Personal",
    englishName: "Organization and Personnel",
    description: "Security requirements for organizational processes and personnel management",
    examples: ["Security awareness", "Personnel security", "Third-party management", "Change management"]
  },

  "CON": {
    shortName: "CON",
    fullName: "Konzeption und Vorgehensweise",
    englishName: "Concept and Planning",
    description: "Security concepts, strategies, and planning approaches",
    examples: ["Cryptography concepts", "Data protection", "Archiving", "Network segmentation"]
  },

  "OPS": {
    shortName: "OPS",
    fullName: "Betrieb",
    englishName: "Operations",
    description: "Security requirements for IT operations and system administration",
    examples: ["Patch management", "Backup", "Logging", "System monitoring", "Remote maintenance"]
  },

  "DER": {
    shortName: "DER",
    fullName: "Detektion und Reaktion",
    englishName: "Detection and Response",
    description: "Security incident detection, response, and forensics",
    examples: ["Security monitoring", "Incident response", "Forensics", "Security event logging"]
  },

  // Specialized Categories
  "IND": {
    shortName: "IND",
    fullName: "Industrielle IT",
    englishName: "Industrial IT / ICS",
    description: "Security requirements for industrial control systems and OT (Operational Technology)",
    examples: ["SCADA systems", "ICS components", "OT networks", "Industrial automation"]
  }
};

/**
 * Get category description for a BSI code
 * @param {string} bsiCode - BSI code (e.g., "APP.3.4", "DER.3.1")
 * @returns {object|null} Category information or null if not found
 */
function getBSICategoryInfo(bsiCode) {
  if (!bsiCode) return null;

  const prefix = bsiCode.split('.')[0];
  return BSI_CATEGORIES[prefix] || null;
}

/**
 * Get a formatted description for a BSI code
 * @param {string} bsiCode - BSI code (e.g., "APP.3.4")
 * @param {string} headline - BSI headline (optional)
 * @returns {string} Formatted description
 */
function formatBSIDescription(bsiCode, headline = "") {
  const category = getBSICategoryInfo(bsiCode);

  if (!category) {
    return `${bsiCode}${headline ? ': ' + headline : ''}`;
  }

  return `${category.shortName} (${category.englishName}): ${bsiCode}${headline ? ' - ' + headline : ''}`;
}

/**
 * Get all categories as an array for UI display
 * @returns {Array} Array of category objects
 */
function getAllBSICategories() {
  return Object.keys(BSI_CATEGORIES).map(key => ({
    code: key,
    ...BSI_CATEGORIES[key]
  }));
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    BSI_CATEGORIES,
    getBSICategoryInfo,
    formatBSIDescription,
    getAllBSICategories
  };
}
