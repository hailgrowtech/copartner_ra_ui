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


export const userAnalysis = [
  {
    id: 1,
    telegramIcon: telegramIcon,
    joined: 'Today',
    telegram: 'Telegram',
    totalVisit: 'Total Visit',
    totalVisitIs: '100',
    user: 'User',
    totalUser: '+40',
    noInterested: 'Not Interested',
    noInterestedIs: '60'
  },
  {
    id: 2,
    telegramIcon: telegramIcon,
    joined: 'Yesterday',
    telegram: 'Telegram',
    totalVisit: 'Total Visit',
    totalVisitIs: '400',
    user: 'User',
    totalUser: '+140',
    noInterested: 'Not Interested',
    noInterestedIs: '90'
  },
  {
    id: 3,
    telegramIcon: telegramIcon,
    joined: 'Yesterday',
    telegram: 'Telegram',
    totalVisit: 'Total Visit',
    totalVisitIs: '280',
    user: 'User',
    totalUser: '+170',
    noInterested: 'Not Interested',
    noInterestedIs: '45'
  },
  {
    id: 4,
    telegramIcon: telegramIcon,
    joined: 'Yesterday',
    telegram: 'Telegram',
    totalVisit: 'Total Visit',
    totalVisitIs: '580',
    user: 'User',
    totalUser: '+330',
    noInterested: 'Not Interested',
    noInterestedIs: '150'
  },
]

export const expertise_data = [
  {
    id: "1",
    icon: userBck,
    userImg: userImg,
    name: "Arun Kumar",
    title: "Commodity",
    ratingIcon: stars,
    rating: "4.4",
    experience: "Experience",
    totalExp: "7+",
    followers: "Followers",
    totalFollowers: "3.1k",
    content:
      "SEBI: 78r94865r130124253",
    telegram: telegramIcon,
    greet: "Telegram channel Link: https://web.telegram.org/k/",
    arrowIcon: arrow,
    basicTitle: 'Basic',
    price: '₹2,999',
    access: '1 Month Access',
    activeUser: 'Active User:',
    valueActiveUser: '60/1000',
  },
]

export const subscriptionData = [
  {
    date: "26/01/2024",
    subType: 'Futures & Options',
    plan: "Basic",
    duration: "1 month",
    amount: "₹1,999 ",
    activeUser: '2000',
    activeEdit: edit,
    activeDel: deleteIcon
  },
  {
    date: "26/01/2024",
    subType: 'Futures & Options',
    plan: "Standard",
    duration: "3 month",
    amount: "₹5,999 ",
    activeUser: '5000',
    activeEdit: edit,
    activeDel: deleteIcon
  },
]

export const walletData = [
  {
    transcationId: "#12324654685",
    date: "26/01/2024",
    subscription: "Service",
    planName: 'Futures & Option',
    name: "Rohit",
    amount: "₹1,999 ",
    invoice: invoiceImg,
  },
  {
    transcationId: "#12324654685",
    date: "26/01/2024",
    subscription: "Course",
    planName: 'Futures & Option',
    name: "Varun",
    amount: "₹1,999 ",
    invoice: invoiceImg,
  },
  {
    transcationId: "#12324654685",
    date: "26/01/2024",
    subscription: "Webinar",
    planName: 'Private Call',
    name: "Amit",
    amount: "₹1,999 ",
    invoice: invoiceImg,
  },
  {
    transcationId: "#12324654685",
    date: "26/01/2024",
    subscription: "Private Call",
    planName: 'Futures & Option',
    name: "Shivam",
    amount: "₹1,999 ",
    invoice: invoiceImg,
  },
  {
    transcationId: "#12324654685",
    date: "26/01/2024",
    subscription: "Service",
    planName: 'Private Call',
    name: "Vinit",
    amount: "₹1,999 ",
    invoice: invoiceImg,
  },
  {
    transcationId: "#12324654685",
    date: "26/01/2024",
    subscription: "Service",
    planName: 'Futures & Option',
    name: "Priyank",
    amount: "₹1,999 ",
    invoice: invoiceImg,
  },
];