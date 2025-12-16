export enum UserRole {
  USER = 'user',
  ADMIN = 'admin'
}

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  role: UserRole;
  balance: number;
  phone?: string;
  createdAt: number;
}

export interface Product {
  id: string;
  title: string;
  category: string; // 'free-fire-uid', 'weekly-monthly', 'airdrop', etc.
  price: number;
  originalPrice?: number;
  imageUrl: string;
  inputType: 'uid' | 'id_code' | 'none'; // What user needs to provide
  description?: string;
}

export enum OrderStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled'
}

export interface Order {
  id: string;
  userId: string;
  userEmail: string;
  productId: string;
  productTitle: string;
  amount: number;
  status: OrderStatus;
  paymentMethod: 'bkash_manual' | 'wallet';
  transactionId?: string; // For BKash
  senderNumber?: string; // For BKash
  playerInput: string; // UID or ID Code
  timestamp: number;
}

export interface WalletTransaction {
  id: string;
  userId: string;
  amount: number;
  type: 'credit' | 'debit';
  description: string;
  status: 'pending' | 'completed' | 'rejected';
  timestamp: number;
  bkashNumber?: string;
  transactionId?: string;
}

export interface AdminSettings {
  bkashNumber: string;
  notice: string;
  bannerUrl: string;
}