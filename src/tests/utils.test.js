/**
 * Added only basic test cases to test default behaviours. Would have to develop
 * further test cases to test different scenarios of different functions.
 */

const { getHighestSeverityRank, getHighestSeverityScore, normalizeVulnerabilityReport } = require('../utils.js');

describe('Utility class functions', () => {
  
  describe('getHighestSeverityRank', () => {
    test('should return CRITICAL when it exists in array', () => {
      const cves = [
        { severity: 'LOW' },
        { severity: 'CRITICAL' },
        { severity: 'HIGH' }
      ];
      expect(getHighestSeverityRank(cves)).toBe('CRITICAL');
    });

    test('should handle lowercase severity strings', () => {
      const cves = [
        { severity: 'critical' },
        { severity: 'low' }
      ];
      expect(getHighestSeverityRank(cves)).toBe('CRITICAL');
    });
  });

  describe('getHighestSeverityScore', () => {
    test('should return highest score from array', () => {
      const cves = [
        { score: 5.5 },
        { score: 9.8 },
        { score: 3.2 }
      ];
      expect(getHighestSeverityScore(cves)).toBe(9.8);
    });

    test('should return null for empty array', () => {
      expect(getHighestSeverityScore([])).toBe(null);
    });
  });
});
