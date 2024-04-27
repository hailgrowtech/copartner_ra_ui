import {
  dashboardIcon,
  subscriptionIcon,
  webinarIcon,
  availableIcon,
  walletIcon,
  chatIcon,
  marketingIcon,
  settingIcon, telegramIcon,
  userImg, userBck,
  arrow, stars
} from "../assets";

export const sideBar = [
  {
    id: 'dashboard',
    icon: dashboardIcon,
    title: "Dashboard",
    path: '/', 
  },
  {
    id: 'subscription',
    icon: subscriptionIcon,
    title: "Subscription",
    path: '/subscription'
  },
  {
    id: 'webinar',
    icon: webinarIcon,
    title: "Webinar",
    path: '/webinar'
  },
  {
    id: 'availability',
    icon: availableIcon,
    title: "Availability",
    path: '/availability'
  },
  {
    id: 'wallet',
    icon: walletIcon,
    title: "Wallet",
    path: '/wallet'
  },
  {
    id: 'chats',
    icon: chatIcon,
    title: "Chats",
    path: '/chats'
  },
  {
    id: 'marketing',
    icon: marketingIcon,
    title: "Marketing",
    path: '/market'
  },
  {
    id: 'setting',
    icon: settingIcon,
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