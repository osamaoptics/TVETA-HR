
export enum EmployeeType {
  TEACHER = 'TEACHER',
  ADMIN = 'ADMIN',
  TRAINER = 'TRAINER',
  TECHNICIAN = 'TECHNICIAN',
}

export enum WorkUnitType {
  SCHOOL = 'SCHOOL',
  EDU_DEPT = 'EDU_DEPT',
  DIRECTORATE = 'DIRECTORATE',
  OTHER = 'OTHER',
}

export enum UserRole {
  ACAD_ADMIN = 'ACAD_ADMIN', // Admin of the Academy/System
  EDU_MANAGER = 'EDU_MANAGER', // Manager of a specific Work Unit
  EMPLOYEE = 'EMPLOYEE', // Regular Employee
}

// New Enums for Personal Data
export enum Nationality {
  EGY = 'EGY',
  OTH = 'OTH',
}

export enum Religion {
  MUS = 'MUS',
  CHR = 'CHR',
  OTH = 'OTH',
}

export enum MaritalStatus {
  SIN = 'SIN',
  MAR = 'MAR',
  DIV = 'DIV',
  WID = 'WID',
}

export interface WorkUnit {
  id: number;
  unit_type: WorkUnitType;
  name_ar: string;
  governorate: string;
  parent_unit_id?: number;
  manager_national_id?: string; // Foreign Key to Employee (Manager)
}

export interface TeacherDetails {
  specialization: string;
  educational_stage: string;
  is_certified: boolean;
}

export interface Employee {
  national_id: string; // Primary Key
  employee_code?: string; // HR Code
  full_name_ar: string;
  birth_date: string;
  phone_number: string;
  email: string;
  profile_picture?: string; // URL or Base64 string
  
  // New Personal Data
  nationality?: Nationality;
  religion?: Religion;
  marital_status?: MaritalStatus;

  job_title: string;
  
  // New Job Details
  group_type?: string; // المجموعة النوعية
  work_status?: string; // الموقف من العمل

  // Dates
  employment_date: string; // تاريخ التعيين
  actual_appointment_date?: string; // تاريخ التعيين الفعلي
  work_start_date?: string; // تاريخ استلام العمل
  deemed_date?: string; // التاريخ الاعتباري
  last_promotion_date?: string; // تاريخ آخر ترقية
  
  work_place_id: number;
  employee_type: EmployeeType;
  teacher_details?: TeacherDetails; // OneToOne relation
}

export interface User {
  id: number;
  email: string;
  is_staff: boolean;
  is_active: boolean;
  role: UserRole;
  employee_national_id?: string; // Link to Employee
  work_unit_id?: number; // For Edu Managers, restricts them to this unit
  name?: string; // Helper for UI
}

// Helper for UI
export const EmployeeTypeLabels: Record<EmployeeType, string> = {
  [EmployeeType.TEACHER]: 'معلم',
  [EmployeeType.ADMIN]: 'إداري',
  [EmployeeType.TRAINER]: 'مدرب',
  [EmployeeType.TECHNICIAN]: 'فني',
};

export const WorkUnitTypeLabels: Record<WorkUnitType, string> = {
  [WorkUnitType.SCHOOL]: 'مدرسة',
  [WorkUnitType.EDU_DEPT]: 'إدارة تعليمية',
  [WorkUnitType.DIRECTORATE]: 'مديرية',
  [WorkUnitType.OTHER]: 'أخرى',
};

export const NationalityLabels: Record<Nationality, string> = {
  [Nationality.EGY]: 'مصري',
  [Nationality.OTH]: 'أخرى',
};

export const ReligionLabels: Record<Religion, string> = {
  [Religion.MUS]: 'مسلم',
  [Religion.CHR]: 'مسيحي',
  [Religion.OTH]: 'أخرى',
};

export const MaritalStatusLabels: Record<MaritalStatus, string> = {
  [MaritalStatus.SIN]: 'أعزب',
  [MaritalStatus.MAR]: 'متزوج',
  [MaritalStatus.DIV]: 'مطلق',
  [MaritalStatus.WID]: 'أرمل',
};