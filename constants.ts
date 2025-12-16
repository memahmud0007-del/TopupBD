import { Home, ShoppingBag, User, Gamepad2, Gift, Zap, ShieldCheck, Calendar, Wallet } from 'lucide-react';

export const CATEGORIES = [
  { id: 'free-fire-uid', title: 'Free Fire UID', icon: Gamepad2, color: 'text-orange-500' },
  { id: 'weekly-monthly', title: 'Weekly & Monthly', icon: Calendar, color: 'text-blue-500' },
  { id: 'evo-access', title: 'Evo Access', icon: ShieldCheck, color: 'text-purple-500' },
  { id: 'airdrop', title: 'Airdrop (ID Code)', icon: Gift, color: 'text-green-500' },
  { id: 'level-up', title: 'Level Up Pass', icon: Zap, color: 'text-yellow-500' },
];

export const NAV_ITEMS = [
  { label: 'Home', path: '/', icon: Home },
  { label: 'Add Money', path: '/add-money', icon: Wallet },
  { label: 'Orders', path: '/orders', icon: ShoppingBag },
  { label: 'Profile', path: '/profile', icon: User },
];

export const MOCK_ADMIN_EMAIL = "admin@topup.com";