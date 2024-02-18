export interface User {
  id: string;
  fullName: string;
  email: string;
}

export interface History {
  id: string;
  promo: string | null;
  user: User;
  payment: {
    id: string;
  };
  paymentStatus: string;
  classType: string;
  genderType: string;
  fullname: string;
  email: string;
  phoneNumber: string;
  totalPrice: number;
  expiredAt: string;
  createdAt: string;
}

export interface HistoryData {
  reservationId: string;
  price: number;
  date: string;
  time: string;
  status: string;
}

export interface HistoryGroup {
  title: string;
  data: HistoryData[];
}

