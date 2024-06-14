import {
  dashboardIconactive,
  dashboardIconInactive,
  subscriptionIconactive,
  subscriptionIconInactive,
  webinarIcon,
  availableIcon,
  walletIconInactive,
  walletIconactive,
  chatIcon,
  marketingIcon,
  settingIconactive,
  settingIconInactive, telegramIcon,
  userImg, userBck,
  arrow, stars,
  edit, deleteIcon,
  invoiceImg,
  hdfc, kotak, icici,
  googlepay, paytm, phonepe,
} from "../assets";

export const sideBar = [
  {
    id: 'dashboard',
    activeIcon: dashboardIconactive,
    inactiveIcon: dashboardIconInactive,
    title: "Dashboard",
    path: '/', 
  },
  {
    id: 'subscription',
    activeIcon: subscriptionIconactive,
    inactiveIcon: subscriptionIconInactive,
    title: "Subscription",
    path: '/subscription'
  },
  // {
  //   id: 'webinar',
  //   icon: webinarIcon,
  //   title: "Webinar",
  //   path: '/webinar'
  // },
  // {
  //   id: 'availability',
  //   icon: availableIcon,
  //   title: "Availability",
  //   path: '/availability'
  // },
  {
    id: 'wallet',
    activeIcon: walletIconactive,
    inactiveIcon: walletIconInactive,
    title: "Wallet",
    path: '/wallet'
  },
  // {
  //   id: 'chats',
  //   icon: chatIcon,
  //   title: "Chats",
  //   path: '/chats'
  // },
  // {
  //   id: 'marketing',
  //   icon: marketingIcon,
  //   title: "Marketing",
  //   path: '/market'
  // },
  {
    id: 'setting',
    activeIcon: settingIconactive,
    inactiveIcon: settingIconInactive,
    title: "Setting",
    path: '/setting'
  },
];

export const subscriptionCourse = [
  {
    date: "26/01/2024",
    courseName: 'Trade Mastery',
    duration: "1 hrs",
    session: "3",
    amount: "₹1,999 ",
    level: 'Medium',
    activeUser: '80',
    activeEdit: edit,
    activeDel: deleteIcon
  },
  {
    date: "02/03/2024",
    courseName: 'Trading Empire',
    duration: "3 hrs",
    session: "6",
    amount: "₹2,999 ",
    level: 'Beginner',
    activeUser: '160',
    activeEdit: edit,
    activeDel: deleteIcon
  },
  {
    date: "20/04/2024",
    courseName: 'Leanrn Trading',
    duration: "8 hrs",
    session: "10",
    amount: "₹5,999 ",
    level: 'Beginner',
    activeUser: '20',
    activeEdit: edit,
    activeDel: deleteIcon
  },
]