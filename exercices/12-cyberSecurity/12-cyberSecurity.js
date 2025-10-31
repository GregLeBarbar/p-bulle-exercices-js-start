/**
 * 💻 Contexte :
 * Tu travailles dans une équipe de cybersécurité chargée de surveiller un serveur.
 * Tu dois décider si une alerte doit être déclenchée ou non selon l'activité du système.
 */

/**
 * Détermine si une alerte de sécurité doit être déclenchée.
 *
 * Une alerte est nécessaire si :
 * - Le pare-feu est inactif ET il y a une activité suspecte détectée
 * - OU le système d’analyse comportementale est actif ET une connexion anormale est repérée
 *
 * @param {boolean} firewallActive - Le pare-feu est actif
 * @param {boolean} suspiciousActivityDetected - Activité suspecte détectée
 * @param {boolean} behaviorSystemActive - Le système d’analyse comportementale est actif
 * @param {boolean} abnormalLoginDetected - Une connexion anormale est détectée
 * @returns {boolean} - Vrai si une alerte doit être déclenchée
 */
export function shouldTriggerAlert(
  firewallActive,
  suspiciousActivityDetected,
  behaviorSystemActive,
  abnormalLoginDetected
) {
  throw new Error('À implémenter');
}
