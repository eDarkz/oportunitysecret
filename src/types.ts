export interface OpportunityReport {
  id: string;
  guestName: string;
  roomNumber: string;
  reservationNumber: string;
  reportedBy: string;
  department: 'frontdesk' | 'concierge' | 'club preferred' | 'telefonos' | 'room service' | 'servicio de ayb' | 'otro';
  arrivalDate: string;
  departureDate: string;
  incidentReport: string;
  guestMood: 'tranquilo' | 'enojado';
  updates: Array<{ text: string; timestamp: string }>;
  status: 'abierto' | 'en proceso' | 'cerrado';
  agency: string; // Nuevo campo
  createdAt: string; // Nuevo campo para la fecha y hora de creación
}