import React, { useEffect, useState } from "react";
import Loader from "../../components/common/Loader/Loader";
import { getChannel } from "../../components/common/FetchFuctions";
import { VideoCard }from "../../components/utils/VideoCard/VideoCard";

const Channel = () => {
  const [channelData, setChannelData] = useState([]);
  const [loading, setLoading] = useState(true);

  let data = {
    id: "UCmO-jDLU-KUcweCzktuDsbg",
    name: "aha videoIN",
    avatarUrl:
      "https://pipedproxy.kavin.rocks/GFUWjOWQbynTe_WrZu11Jz2UUnzSOC9EC1GR33jvyusJyM2Ziy2aloGQrBSwPrNz-EgSz5nQ7w=s48-c-k-c0x00ffffff-no-rw?host=yt3.googleusercontent.com",
    bannerUrl:
      "https://pipedproxy.kavin.rocks/a6Hp30KLjGGAG_BvoZRNmLTvqg2dSs6GgaKMNpPrpeA1olKhrtjcpnhyq1UAPlSxWff85vC8Vw=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rw?host=yt3.ggpht.com",
    description:
      "aha is a 100% Telugu entertainment platform with an extensive range of movies and original web series just a click away.\n\nWith content curated specially for viewers with varied preferences and choices, aha brings you one step closer to full-fledged entertainment with its broad library of movies ranging from old blockbusters to originals.\n\n- Selection of genres\n- Intuitive Video Player to stream videos\n- Sign up option to watch paid content\n- Multiple payment options\n- Download option\n- Account Settings available\n\nInstall the app and get going with your favourite content, with free selected content available and premium paid subscription.\n\nSubscribe Now! Stream your favourite Telugu movies and originals now.\n\nWrite to us at support@aha.video for any feedback and queries.",
    nextpage:
      '{"url":"https://www.youtube.com/youtubei/v1/browse?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8&prettyPrint=false","id":null,"ids":["aha videoIN","https://www.youtube.com/channel/UCmO-jDLU-KUcweCzktuDsbg"],"cookies":null,"body":"eyJjb250ZXh0Ijp7ImNsaWVudCI6eyJobCI6ImVuLUdCIiwiZ2wiOiJHQiIsImNsaWVudE5hbWUiOiJXRUIiLCJjbGllbnRWZXJzaW9uIjoiMi4yMDIyMTIxNS4wNC4wMSIsIm9yaWdpbmFsVXJsIjoiaHR0cHM6Ly93d3cueW91dHViZS5jb20iLCJwbGF0Zm9ybSI6IkRFU0tUT1AifSwicmVxdWVzdCI6eyJpbnRlcm5hbEV4cGVyaW1lbnRGbGFncyI6W10sInVzZVNzbCI6dHJ1ZX0sInVzZXIiOnsibG9ja2VkU2FmZXR5TW9kZSI6ZmFsc2V9fSwiY29udGludWF0aW9uIjoiNHFtRnNnS2pBUklZVlVOdFR5MXFSRXhWTFV0VlkzZGxRM3ByZEhWRWMySm5Hb1lCT0dkYVprZHNNVFpYZDNCWVEyazVSbG95T1VwT1JGSk1UVlJrVG1Sc1NuVlpNSEJ3VXpCU1NtUXdSbFZhTWxaU1dqTk9TbU5IU2tsUFZ6VkNWMVpGZWs0d09WUmFWbFp1VVd4V1FsRlNTV3RPYWs1cVRtcE5NRmxVVlhSTlJFRjNUVU13ZVU1RVRUVk1WR2hyV2tkTmRFMVVVWGxOYWs1cFdWZFZNRTlFVm1oSFFVVWxNMFElM0QifQ=="}',
    subscriberCount: 2060000,
    verified: true,
    relatedStreams: [
      {
        url: "/watch?v=yLu-tBIU58Q",
        type: "stream",
        title:
          "1 Crore Views  for promo| Unstoppable With NBK S2 |  #NBK #Prabhas & Gopichand | #ahaVideoIN",
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/yLu-tBIU58Q/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGEUgVChlMA8=&rs=AOn4CLBvGDfXTnO45DSY1EOGFESQOodbbQ&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "5 hours ago",
        shortDescription:
          "1❤️❤️❤️❤️❤️❤️❤️ views across Digital 🤩. \n\nRaining love from Darling fans. We assure the episode will make you travel to Vintage days of Rebel start 💥.\n\n#Unstoppabl...",
        duration: 53,
        views: 431169,
        uploaded: 1671369301370,
        uploaderVerified: true,
        isShort: false,
      },
      {
        url: "/watch?v=uxoRPlU2q8Y",
        type: "stream",
        title:
          "Asif & Raju Full Video | Future Choreography | Dance IKON | Ohmkar | ahaVideoIN",
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/uxoRPlU2q8Y/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBNZQMVDGGgSwO4OMWle2mSG-Glpg&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "9 hours ago",
        shortDescription:
          "Concept : Future Choreography!  \nBudget: Rs. 50,000/-\nBrief: \nThe Choreographer has to show his expertise by shooting a Full length dance video in the given budget and showcase it in the Round...",
        duration: 284,
        views: 32504,
        uploaded: 1671354901370,
        uploaderVerified: true,
        isShort: false,
      },
      {
        url: "/watch?v=pXrsWiRzw1Q",
        type: "stream",
        title:
          "Ee December mana aha lo !!  #UnstoppableWithNBKS2, #Masooda #CSE #KDrama and more.. | ahaVideoIN",
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/pXrsWiRzw1Q/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGH8gOigjMA8=&rs=AOn4CLBAuWc75OKuMBfZdVJhJqgyfP78iw&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "13 hours ago",
        shortDescription:
          "Ee holiday season enjoy with aha entertainment😉 \nCoz we have the biggest bahubali episode to horror to k-drama for the first time in Telugu and a lot more!\n\nFamily tho holiday, Aha tho Entertain...",
        duration: 57,
        views: 15160,
        uploaded: 1671340501370,
        uploaderVerified: true,
        isShort: false,
      },
      {
        url: "/watch?v=wmCOHX1D1gA",
        type: "stream",
        title:
          "Unstoppable with NBK S2 - Prabhas & Gopichand Episode Promo | Premieres December 30 | ahaVideoIN",
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/wmCOHX1D1gA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCeze1rS5WaZK95-gPvNCqCL2Bucg&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "1 day ago",
        shortDescription:
          "Everything you wanted to know and everyway you like him to be.. Darling #Prabhas at his witty and fun best with #NandamuriBalakrishna on\n#UnstoppableWithNBKS2. Premieres December 30.\n#PrabhasOnAHA...",
        duration: 226,
        views: 4526454,
        uploaded: 1671300000000,
        uploaderVerified: true,
        isShort: false,
      },
      {
        url: "/watch?v=v3TydJN1BEw",
        type: "stream",
        title:
          "Arundhati Full Dance Performance | Future Choreography | Dance IKON | Ohmkar | ahaVideoIN",
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/v3TydJN1BEw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAmGBmCgnrufmOCFal7bOaE0hQWPw&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "1 day ago",
        shortDescription:
          "Concept : Future Choreography!  \nBudget: Rs. 50,000/-\nBrief: \nThe Choreographer has to show his expertise by shooting a Full length dance video in the given budget and showcase it in the Round...",
        duration: 190,
        views: 13854,
        uploaded: 1671300000000,
        uploaderVerified: true,
        isShort: false,
      },
      {
        url: "/watch?v=2nEHsKXq8Rg",
        type: "stream",
        title:
          "Masooda | Trailer | Premieres Dec 21 | Sangitha, Thiruveer, Kavya | ahaVideoIN",
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/2nEHsKXq8Rg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBz73srK74YC7gbKG5jtOMtfjngmw&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "2 days ago",
        shortDescription:
          "Cast:\n Sangitha, Thiruveer, Kavya Kalyanram, Subhalekha Sudhakar, Akhila Ram, Bandhavi Sridhar, Satyam Rajesh, Satya Prakash, Surya Rao, Surabhi Prabhavathi, Krishna Teja, Karthik Adusumilli....",
        duration: 141,
        views: 105757,
        uploaded: 1671213600000,
        uploaderVerified: true,
        isShort: false,
      },
      {
        url: "/watch?v=d_vBbqFsHhg",
        type: "stream",
        title:
          "Vennala Kishore Cheppina mata mana Sree Vintada?? Urvasivo Rakshasivo | ahaVideoIN",
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/d_vBbqFsHhg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAlwRF28WDaU7LtobTP_ZMq5CiaPg&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "2 days ago",
        shortDescription:
          "Live in relation ante powerplay lo batting lantidhi anukunnadu papam mana Sree. Sindhu gap lekunda vese bouncerlani yorkerlani ela face chesado theluskovalante Urvashivo Rakshasivo chuseyyandi....",
        duration: 22,
        views: 6694,
        uploaded: 1671213600000,
        uploaderVerified: true,
        isShort: false,
      },
      {
        url: "/watch?v=r_G2LXUqwf0",
        type: "stream",
        title:
          "Comedy Scenes from Wanted Pandugod | Brahmanandam, Sunil, Sudigali Sudheer | ahaVideoIN",
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/r_G2LXUqwf0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA55-wA5AdHl2yifSOd6qljAg5zDw&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "2 days ago",
        shortDescription:
          "#wantedpandugod #ahavideoin #sunil #anasuya #sudigalisudheer #vennelakishore #sapthagiri #brahmanandam #deepikapilli #raghubabu \n\nWanted Pandu God Trailer: Our Most notorious criminal is on...",
        duration: 239,
        views: 13271,
        uploaded: 1671213600000,
        uploaderVerified: true,
        isShort: false,
      },
      {
        url: "/watch?v=r-2H2If3pEU",
        type: "stream",
        title:
          "⚡️⭐️ Who is the Next big star in Unstoppable With NBK S2 | ahaVideoIN",
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/r-2H2If3pEU/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGH8gQiggMA8=&rs=AOn4CLDB08XGxYloosYAUegjtQoxBosE-Q&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "3 days ago",
        shortDescription:
          "#UnstoppableWithNBKS2 #nandamuribalakrishna \n#ahavideoin #unstoppablewithnbks2 #nbk108  #blockbuster \n\nHost: Nandamuri Balakrishna \n\n\nSeason 2:\nPresenting Sponsor: Mansion House\nCo-Presented...",
        duration: 16,
        views: 94534,
        uploaded: 1671127200000,
        uploaderVerified: true,
        isShort: false,
      },
      {
        url: "/watch?v=wDOWxrt8QuQ",
        type: "stream",
        title:
          "Unstoppable with NBK S2 | Prabhas & Gopichand | Gopichand Glimpse | Promo Soon | ahaVideoIN",
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/wDOWxrt8QuQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA4LqRU-TT2l7inxl2MGcbquZ0Jiw&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "3 days ago",
        shortDescription:
          "Mana Macho Star Gopi Chand ni ila eppudu chusi undaru...\nShot glimpse of the treat you all are in for is here.\nDo not miss this MASSIVE episode of #UnstoppableWithNBKS2  \nPromo coming soon....",
        duration: 57,
        views: 2852069,
        uploaded: 1671127200000,
        uploaderVerified: true,
        isShort: false,
      },
      {
        url: "/watch?v=PJwCT_c49Ck",
        type: "stream",
        title:
          "Sankranti Allullu Parahushaar | Comedy Stock Exchange | Anil Ravipudi, Sudigali Sudheer | ahaVideoIN",
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/PJwCT_c49Ck/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCK2dJ20J_FGLfm1hkZdGEdjDMY9w&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "3 days ago",
        shortDescription:
          "Watch #ComedyStockExchange - Episodes 1-2 Streaming now on @ahavideo .\n\n#anilravipudi  \n#sudigalisudheer #deepikapilli  #ahavideoin #mukkuavinash #saddam #yadammaraju #venu #gyaneshwar \n\nChairman:...",
        duration: 240,
        views: 235707,
        uploaded: 1671127200000,
        uploaderVerified: true,
        isShort: false,
      },
      {
        url: "/watch?v=AU6NnKVZlc0",
        type: "stream",
        title:
          "Urvasivo Rakshasivo | Streaming Now | Allu Sirish, Anu Emanuel, Sunil, Vennala Kishore | ahaVideoIN",
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/AU6NnKVZlc0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDn2gdHsMStcfND4IsICuVoe0dEAg&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "3 days ago",
        shortDescription:
          "Bold live-in relationship\nBeautiful family message\nYouthful entertainers yandhu Urvashivo Rakshasivo veraya.\n\nStreaming Now.\n#UrvasivoRakshasivoOnAHA\n\n\nUrvasivo Rakshasivo Starring Allu Sirish,...",
        duration: 26,
        views: 7361,
        uploaded: 1671127200000,
        uploaderVerified: true,
        isShort: false,
      },
      {
        url: "/watch?v=M-65xvqKlqs",
        type: "stream",
        title:
          "Full Video Song ft. Saumya Kamble, Govind | Future Choreography |  Dance IKON | Ohmkar | ahaVideoIN",
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/M-65xvqKlqs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLApD5ZGeL-GK3IzlYuz5JflQR7DKg&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "4 days ago",
        shortDescription:
          'Such grandeur and grace!\nIn this round of Future Choreography, Saumya & Govind has chosen this song "Dheera" from the Movie "Magadheera" and in the budget of Rs 50,000/- they have created this...',
        duration: 232,
        views: 21899,
        uploaded: 1671040800000,
        uploaderVerified: true,
        isShort: false,
      },
      {
        url: "/watch?v=lohG6zJ4Jyk",
        type: "stream",
        title:
          "Taking the Highway | Fun and Kashtalu | Anand Devarakonda, Manasa, KV Guhan | ahaVideoIN",
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/lohG6zJ4Jyk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCQWi-4N44vQ9R4fkqwc3pUaF0IiA&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "4 days ago",
        shortDescription:
          "#ananddeverakonda #KVGuhan #HighwayOnAHA Streaming Now!\n\nSome meetings leads to journeys…\nSome journeys leads to disasters...\nPresenting a nerve-wrenching psycho-thriller. \n\nNorthStar Entertainme...",
        duration: 235,
        views: 14793,
        uploaded: 1671040800000,
        uploaderVerified: true,
        isShort: false,
      },
      {
        url: "/watch?v=qdUXtL5CwFE",
        type: "stream",
        title:
          "Rebel Star #Prabhas on #UnstoppableWithNBKS2 | Glimpse | ahaVideoIN",
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/qdUXtL5CwFE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDTLOo-fzbE1vZNercQfUH_HwhT9A&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "5 days ago",
        shortDescription:
          "Darlings,\nHere's the most awaited and anticipated glimpse from #UnstoppableWithNBKS2.  Idhi chinna glimpse matrame. Main promo thvaralo...\n#NBKWithPrabhas\n\n#UnstoppableWithNBKS2 #prabhas #nandamuri...",
        duration: 59,
        views: 3146066,
        uploaded: 1670954400000,
        uploaderVerified: true,
        isShort: false,
      },
      {
        url: "/watch?v=WpF1651kdzw",
        type: "stream",
        title:
          "Saddam as Bus Conductor | Comedy Stock Exchange | Anil Ravipudi, Sudigali Sudheer | ahaVideoIN",
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/WpF1651kdzw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAE6lvdiIGYP2oqGfTpjhqSIsjU8g&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "5 days ago",
        shortDescription:
          "Eppudaina meeku bus lo prayaninchetappudu.. ee chillara baadha ochindha?? \nMi experiences.. Comment cheyyandi.. \n\n#anilravipudi  \n#sudigalisudheer #deepikapilli  #ahavideoin #mukkuavinash #saddam...",
        duration: 353,
        views: 574426,
        uploaded: 1670954400000,
        uploaderVerified: true,
        isShort: false,
      },
      {
        url: "/watch?v=xXcF_yJ3TcE",
        type: "stream",
        title:
          "Raani | Movie Trailer | Premieres Dec 16 |  Swetaa Varma, Prawin Raghavendra Katari | ahaVideoIN",
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/xXcF_yJ3TcE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCzJEJ-KQyi7l2ErXsjCQKVa93g8A&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "5 days ago",
        shortDescription:
          "Story Log line: \nSangeetha is a Middle class girl coming from a family in which the cultural values and tradition are strong. Boldness and courage were taught to Sangeetha and she was always...",
        duration: 126,
        views: 23823,
        uploaded: 1670954400000,
        uploaderVerified: true,
        isShort: false,
      },
      {
        url: "/watch?v=GBPIlbaE_mQ",
        type: "stream",
        title:
          "Prati Prema lo ive kashtalu.. | 1996 Dharmapuri |Sekhar Master | Movie Streaming Now | ahaVideoIN",
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/GBPIlbaE_mQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAOnlwsKTzLuJsnKoIu9_SfSFdBLg&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "6 days ago",
        shortDescription:
          "Prati Prema lo ive kastalu.. Modatlo Premani Ammai ki cheppadam.. aa tarvata.. ade prema gurinchi intlo cheppi oppinchadam! \nee master plan chusara mari?? \n\n1996  Dharmapuri presented by Sekhar...",
        duration: 144,
        views: 5496,
        uploaded: 1670868000000,
        uploaderVerified: true,
        isShort: false,
      },
      {
        url: "/watch?v=WbCoRRqmiE4",
        type: "stream",
        title:
          "Valliddari Madhya | Trailer | Neha Krishna, Viraj Ashwin, V.N Aditya | ahaVideoIN",
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/WbCoRRqmiE4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDrTWFaBPeioRc3ahJS0qTztSzfBQ&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "6 days ago",
        shortDescription:
          "Story:\nValliddari Madhya is a Telugu language love story between a conservative man and modern women. The story revolves around their struggle to find love between them and elsewhere. With...",
        duration: 96,
        views: 179045,
        uploaded: 1670868000000,
        uploaderVerified: true,
        isShort: false,
      },
      {
        url: "/watch?v=2R0wT5FQOlY",
        type: "stream",
        title:
          "Arudhati's Grand FInale Full Dance Performance with Sanketh | Dance IKON | Ohmkar | ahaVideoIN",
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/2R0wT5FQOlY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBQ-myt1C4hUzPkJAkQFsKE4-7a3g&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "6 days ago",
        shortDescription:
          "GRAND FINALE of DANCE IKON.. \n\nHave you watched this Dance by Arundhati and Sanketh Yet?? \n#Arundhati #Sanket .. Goosebumps for sure.\n\nSouth India's Biggest Dance Show \n#danceIkonOnAHA \nClick...",
        duration: 665,
        views: 37801,
        uploaded: 1670868000000,
        uploaderVerified: true,
        isShort: false,
      },
      {
        url: "/watch?v=yWyOm-Frq_U",
        type: "stream",
        title:
          "Nepotism in Tollywood by Allu Aravind & Suresh Babu | UnstoppableWithNBKS2 | ahaVideoIN",
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/yWyOm-Frq_U/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBc0B-gu39cQLwke7RoRMyM18dUPg&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "7 days ago",
        shortDescription:
          "Eppatnuncho nadusthunna panchayithi ki Allu Aravind garu thana style lo thana ideology tho full stop pettaru. Meeru ayana arguments ni angeekaristhara?\n\n#ahavideoin #unstoppablewithnbks2 #nandamuri...",
        duration: 176,
        views: 195819,
        uploaded: 1670781600000,
        uploaderVerified: true,
        isShort: false,
      },
      {
        url: "/watch?v=ATWudAchs8g",
        type: "stream",
        title:
          "Pellichoopula Pesaratta?? Swathimuthyam | Bellamkonda Ganesh, Vennala Kishore | ahaVideoIN",
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/ATWudAchs8g/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA2M3S7wkPL3M4CWjKTHjxMUs6BWw&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "7 days ago",
        shortDescription:
          "In this hilarious scene, the conversation between vennala Kishore and the hero Ganesh Bellamkonda is fun about the tragic pellichupulu.. \n\n#Swathimuthyam  | Ganesh, Varsha Bollamma | Lakshman...",
        duration: 233,
        views: 5308,
        uploaded: 1670781600000,
        uploaderVerified: true,
        isShort: false,
      },
      {
        url: "/watch?v=6jpHNPb0EYk",
        type: "stream",
        title:
          '"The Bahubali" episode of Unstoppable Season 2 with Prabhas | Coming soon | ahaVideoIN',
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/6jpHNPb0EYk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBiC_98kaxtqz3IoG2qtyr6ZxHJ3w&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "7 days ago",
        shortDescription:
          "The pan Indian boss of masses with the God of masses.🔥🔥 \nThe Bahubali of all Unstoppable episodes is coming soon 😉\nWatch out the space for more updates ✌🏻\n#UnstoppableWithNBKS2...",
        duration: 67,
        views: 1922424,
        uploaded: 1670781600000,
        uploaderVerified: true,
        isShort: false,
      },
      {
        url: "/watch?v=H05mUxERo88",
        type: "stream",
        title:
          "Comedy Stock Exchange Episode 3 PROMO | Anil Ravipudi, Sudigali Sudheer, Deepika Pilli | ahaVideoIN",
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/H05mUxERo88/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGHIgSShGMA8=&rs=AOn4CLCLYEj0qe3DBacavINPEZNZtKqJfA&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "7 days ago",
        shortDescription:
          'This weeks Theme: Mana Life to Television (TV)\n\nEntertainment ki mugimpu undadhu, konasagimpu matrame. Comedy Stock Exchange Episode 3, mee mundhuki rabothundhi oka most relatable theme "Mana...',
        duration: 199,
        views: 645685,
        uploaded: 1670781600000,
        uploaderVerified: true,
        isShort: false,
      },
      {
        url: "/watch?v=94yNzMsc3fY",
        type: "stream",
        title:
          "Urvasivo Rakshasivo ft Allu Sirish & Sunil | Streaming  Now | ahaVideoIN",
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/94yNzMsc3fY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAF7eC9sidivBUvIt9TKlk8lPYHOg&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "8 days ago",
        shortDescription:
          "Oka abbai life premalo padakamundhu premalo padda tarwatha ani define cheyyochantaru. Mana Sree story dhanigga perfect ga saripothundhi. Watch him fall, climb and crawl in love in Urvashivo...",
        duration: 141,
        views: 6191,
        uploaded: 1670695200000,
        uploaderVerified: true,
        isShort: false,
      },
      {
        url: "/watch?v=LWv1kVbJcSo",
        type: "stream",
        title:
          "Sardar mission modhaledithe war one side ainatte! Karthi, Raashi Khanna | ahaVideoIN",
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/LWv1kVbJcSo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAhB4K070l3ByvPpZJkCQ1reSX7VQ&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "8 days ago",
        shortDescription:
          "Sardar mission modhaledithe war one side ainatte!\n\n#SardarOnAHA @karthi_offl @RedGiantMovies_ @Psmithran @gvprakash @laila_laughs @rajishavijayan @raashiikhanna @george_dop @livingstonruben...",
        duration: 58,
        views: 4133,
        uploaded: 1670695200000,
        uploaderVerified: true,
        isShort: false,
      },
      {
        url: "/watch?v=VfUzH4xvPvM",
        type: "stream",
        title:
          "Mr Pellam Episodes 9 - 12 | PROMO | Amardeep Chowdary, Pooja Murthy, Soniya | ahaVideoIN",
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/VfUzH4xvPvM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCJGVwJsRMCmHbi4oJvCCntoXk4NA&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "8 days ago",
        shortDescription:
          "Watch #MrPellamOnAHA 😁\n\nStreaming Now!! New Episodes Everyday!! Monday to Thursday at 2PM. \nALL EPISODES ARE FREE!! Download Now & Watch!!\n\nClick Here to Watch Mr Pellam on AHA for FREE!!...",
        duration: 123,
        views: 7952,
        uploaded: 1670695200000,
        uploaderVerified: true,
        isShort: false,
      },
      {
        url: "/watch?v=Lyl6eB3oOX0",
        type: "stream",
        title:
          "Pakka Settlement ante idi | Pakka Commercial | Gopichand | Raashi Khanna | ahaVideoIN",
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/Lyl6eB3oOX0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCMVFEBfCgUJPqTE2c288SeyKrbfg&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "9 days ago",
        shortDescription:
          "#Gopichand #RaashiKhanna #PakkaCommercial #Sathyaraj #PakkaCommercialTrailer #ahavideoin \n\nIntha Commercial ga settlement inka evaraina cheyyagalara?? \nkindha comments lo rayandi.. \n\nMovie...",
        duration: 204,
        views: 4183,
        uploaded: 1670608800000,
        uploaderVerified: true,
        isShort: false,
      },
      {
        url: "/watch?v=uC59ocJT4x8",
        type: "stream",
        title:
          "Balayya Questions Ye Kaadu, Counters Kuda Khallas Chesthai | Unstoppable With NBK S2 | ahaVideoIN",
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/uC59ocJT4x8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD7MMQaXHv8nUso_F9kMDO4ixJBsw&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "9 days ago",
        shortDescription:
          "Balayya Questions Ye Kaadu, Counters Kuda Khallas Chesthai.\nWatch #UnstoppableWithNBKS2 Episodes- 1-5 #streamingnow \n #OnlyOnAHA\n#ahavideoin \n\n#ahavideoin #unstoppablewithnbks2 #nandamuribalakrishn...",
        duration: 71,
        views: 34948,
        uploaded: 1670608800000,
        uploaderVerified: true,
        isShort: false,
      },
      {
        url: "/watch?v=YoR2jL2NQWM",
        type: "stream",
        title:
          "Live-in kashtalu | Urvasivo Rakshasivo Premieres Tonight | Allu Sirish, Sunil | ahaVideoIN",
        thumbnail:
          "https://pipedproxy.kavin.rocks/vi/YoR2jL2NQWM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD9I1YZu0RynpAGAHjVGiP9nDfYJw&host=i.ytimg.com",
        uploaderName: "aha videoIN",
        uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
        uploaderAvatar: null,
        uploadedDate: "10 days ago",
        shortDescription:
          "Pitch bagundhi kadha picchekkidhamanukunnadu papam mana Sree. Sindhu vesina yorker ki first ball ke duck out ayyi ela venakkocchado chudandi...\n\n#UrvasivoRakshasivoOnAHA Premieres Tonight.!...",
        duration: 106,
        views: 13636,
        uploaded: 1670522400000,
        uploaderVerified: true,
        isShort: false,
      },
    ],
    tabs: [
      {
        name: "shorts",
        data: '{"originalUrl":"https://www.youtube.com/UCmO-jDLU-KUcweCzktuDsbg/shorts","url":"https://www.youtube.com/UCmO-jDLU-KUcweCzktuDsbg/shorts","id":"UCmO-jDLU-KUcweCzktuDsbg","contentFilters":["shorts"],"sortFilter":"","baseUrl":"https://www.youtube.com"}',
      },
      {
        name: "livestreams",
        data: '{"originalUrl":"https://www.youtube.com/UCmO-jDLU-KUcweCzktuDsbg/streams","url":"https://www.youtube.com/UCmO-jDLU-KUcweCzktuDsbg/streams","id":"UCmO-jDLU-KUcweCzktuDsbg","contentFilters":["livestreams"],"sortFilter":"","baseUrl":"https://www.youtube.com"}',
      },
      {
        name: "playlists",
        data: '{"originalUrl":"https://www.youtube.com/UCmO-jDLU-KUcweCzktuDsbg/playlists","url":"https://www.youtube.com/UCmO-jDLU-KUcweCzktuDsbg/playlists","id":"UCmO-jDLU-KUcweCzktuDsbg","contentFilters":["playlists"],"sortFilter":"","baseUrl":"https://www.youtube.com"}',
      },
      {
        name: "channels",
        data: '{"originalUrl":"https://www.youtube.com/UCmO-jDLU-KUcweCzktuDsbg/channels","url":"https://www.youtube.com/UCmO-jDLU-KUcweCzktuDsbg/channels","id":"UCmO-jDLU-KUcweCzktuDsbg","contentFilters":["channels"],"sortFilter":"","baseUrl":"https://www.youtube.com"}',
      },
    ],
  };
  useEffect(() => {
    const channel_id = window.location.pathname.split("/")[2];
    setLoading(true);
    getChannel(channel_id)
      .then((data) => {
        console.log(data);
        setChannelData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert("Error Fetching channel");
      });
    // setChannelData(data);
    setLoading(false);
  }, []);
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <main className="w-full md:my-4 overflow-hidden  justify-center items-center">
          <div
            className=" md:max-w-7xl md:w-[96%] flex items-center justify-center relative"
            style={{ margin: "0 auto" }}
          >
            <img
              src={channelData.bannerUrl}
              className="w-full h-fit min-h-full object-cover md:rounded-lg"
              alt="channel banner"
            />
          </div>

          <div className="channel__details w-full relative flex items-center justify-center my-[5px] lg:my-4">
            <div className="flex flex-row justify-between md:max-w-7xl w-full md:w-[96%] my-2 relative md:border-[2.8px] md:border-slate-400 transition-all md:hover:border-slate-600 rounded-lg md:p-4">
              <div className="channel-header__left flex flex-row gap-4 md:gap-6  py-2  justify-start items-center ml-4 md:ml-8">
                <img
                  src={channelData.avatarUrl}
                  className="md:w-24 md:h-24  rounded-full object-contain ring-2 md:ring-4 ring-slate-500 p-1 shadow-lg"
                  alt="channel avatar"
                />
                <div className="channel-header__left__details ">
                  <h1
                    className="md:text-[28px] text-lg  text-black"
                    style={{ fontWeight: "500" }}
                  >
                    {channelData.name}
                  </h1>
                  <p className="text-xs md:text-sm  text-slate-800">
                    {channelData.subscriberCount > 1000000000
                      ? (channelData.subscriberCount / 1000000000).toFixed(1) +
                        "B"
                      : channelData.subscriberCount > 1000000
                      ? (channelData.subscriberCount / 1000000).toFixed(1) + "M"
                      : channelData.subscriberCount > 1000
                      ? (channelData.subscriberCount / 1000).toFixed(1) + "K"
                      : channelData.subscriberCount}{" "}
                    subscribers
                  </p>
                  {/* <p className="text-sm text-slate-800 channel__description">
                    {channelData.description}
                  </p> */}
                </div>
              </div>
              <div className="channel-header__right flex items-center justify-center mr-4 md:mr-8">
                <button
                  type="button"
                  onClick={() => alert("Feature Coming soon!")}
                  className="text-white bg-gray-800 hover:bg-gray-900  font-medium rounded-full text-xs md:text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700  dark:border-gray-700"
                >
                  subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="channel__tabs w-full relative flex items-center justify-center px-32">
            <div className="flex flex-row justify-between w-full my-2 relative  p-4">
             
             </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Channel;
