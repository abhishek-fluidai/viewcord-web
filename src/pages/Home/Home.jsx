import React, {useEffect, useState} from "react";
import VideoCard from "../../components/utils/VideoCard/VideoCard";
import {getTrending} from "../../components/common/FetchFuctions";


const Home = () => {
  const [trending, setTrending] = useState([]);
  let data = [
    {
      url: "/watch?v=wmCOHX1D1gA",
      type: "stream",
      title:
        "Unstoppable with NBK S2 - Prabhas & Gopichand Episode Promo | Premieres December 30 | ahaVideoIN",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/wmCOHX1D1gA/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAJ4CQTq1BOFKaRVKygmkS1oTgNhw&host=i.ytimg.com",
      uploaderName: "aha videoIN",
      uploaderUrl: "/channel/UCmO-jDLU-KUcweCzktuDsbg",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/GFUWjOWQbynTe_WrZu11Jz2UUnzSOC9EC1GR33jvyusJyM2Ziy2aloGQrBSwPrNz-EgSz5nQ7w=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "1 day ago",
      shortDescription:
        "Everything you wanted to know and everyway you like him to be.. Darling #Prabhas at his witty and fun best with #NandamuriBalakrishna on\n#UnstoppableWithNBKS2. Premieres December 30.\n#PrabhasOnAHA...",
      duration: 226,
      views: 4331249,
      uploaded: 1671285600000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=RQplyeOHxjQ",
      type: "stream",
      title:
        '"Athidhi Devobhava" Latest Hindi Dubbed Full Movie 2022 {4k ULTRA HD} | Aadi Sai Kumar | Nuveksha',
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/RQplyeOHxjQ/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAwcM79LSccaqtciueGFvBQ_8oEeA&host=i.ytimg.com",
      uploaderName: "Aditya Movies",
      uploaderUrl: "/channel/UCX_uPA_dGf7wXjuMEaSKLJA",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/ytc/AMLnZu_HlCDPcBrBeXlAnO5LC-leTXM6vKi8ci1fQU7Uww=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "2 days ago",
      shortDescription:
        'Welcome To Aditya Movies Follow and Enjoy The Latest Hind Dubbed Movie "Athidhi Devobhava" Starring Aadi Saikumar, Nuveksha Exclusively on Aditya Movies. \n\n#athidhidevobhava #aadisaikumar #Hindimov...',
      duration: 6697,
      views: 4383829,
      uploaded: 1671199200000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=zscadYQCfyk",
      type: "stream",
      title:
        "1st Test - Day 4 | Hindi | Key Moments | India Tour Of Bangladesh | 17th December 2022",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/zscadYQCfyk/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA_18e_1xz0ZD_eOOtEN1MMBCSP6Q&host=i.ytimg.com",
      uploaderName: "Sony Sports Network",
      uploaderUrl: "/channel/UC_WKb6N9iTGc77hxwXLDrbA",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/LFmcJ26ZKfiWPiHCJ6y505E0VxGlQcj5DLjZDhCsNuc2bNNBoeB7hZVms2e028WwRVno1zp8=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "1 day ago",
      shortDescription:
        "On day 4 of the 1st Test match, Bangladesh openers continued their dominance and Zakir Hasan went on to score a century. However, India soon struck back and took six wickets which ended day...",
      duration: 898,
      views: 3471344,
      uploaded: 1671285600000,
      uploaderVerified: false,
      isShort: false,
    },
    {
      url: "/watch?v=fZ9Qzzybplo",
      type: "stream",
      title: "I Found The Dumbest Life Hacks and Actually Tried Them!!",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/fZ9Qzzybplo/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBHKfnhGwSYKuiDU0yxEIzscMW5OA&host=i.ytimg.com",
      uploaderName: "Triggered Insaan",
      uploaderUrl: "/channel/UCfLuT3JwLx8rvHjHfTymekw",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/ytc/AMLnZu8aodTgGOl1C8EM4hrHb8qoWuqQwmJcHGO60AVmPg=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "1 day ago",
      shortDescription:
        "In this video, Life Hacks and Food Hacks are Back.\n\nInstagram ► https://www.instagram.com/triggeredinsaan\n\nFacebook ► https://www.facebook.com/realtriggeredinsaan\n\nGaming Channel ► https://ww...",
      duration: 800,
      views: 2814036,
      uploaded: 1671285600000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=GNFy-Vrh-6M",
      type: "stream",
      title:
        "Yai Re | Yo Yo Honey Singh, Iulia Vantur | Mihir Gulati | Honey Singh Remake Songs | Party Song",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/GNFy-Vrh-6M/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAn4TQbvW-8-IuArVdi3h3itTRLrA&host=i.ytimg.com",
      uploaderName: "Tips Official",
      uploaderUrl: "/channel/UCJrDMFOdv1I2k8n9oK_V21w",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/N4WwfnhSIWuj9qUZVQ-feSK6unTk-_5nqs_vzw_MZmcfn6CwrCdOIZfKEdGDqSHCFreRERgWTg=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "23 hours ago",
      shortDescription:
        'The wait is finally over!! Watch Yo Yo Honey Singh\'s Party Song " Yai Re " Full Song, Vocals By Yo Yo Honey Singh & Iulia Vantur, Music, Rap & Lyrics by Yo Yo Honey Singh, Directed By Mihir...',
      duration: 264,
      views: 6334316,
      uploaded: 1671292211434,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=-VQTccqzmC4",
      type: "stream",
      title: "Hydroelectric Dam Part-2 | We Make Electricity From Water",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/-VQTccqzmC4/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC0hTRnwoD2hf5pJFk9s19Bjfx9mw&host=i.ytimg.com",
      uploaderName: "MR. INDIAN HACKER",
      uploaderUrl: "/channel/UCSiDGb0MnHFGjs4E2WKvShw",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/ytc/AMLnZu-z4g7mkmieQErx0X5MHDhDUt-GG3ux007oYgVNow=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "2 days ago",
      shortDescription:
        "Our Personal hydroelectric dam is 100% working. we successfully make electricity from it 220 volts ac and 24volts dc current. Our each power generator generate 24v dc 250 watt current and both...",
      duration: 1067,
      views: 7840246,
      uploaded: 1671199200000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=-IKts4pvt2o",
      type: "stream",
      title:
        "Kaisi Teri Khudgharzi Last Episode - 14th Dec 2022 (Eng Subtitles) ARY Digital",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/-IKts4pvt2o/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC7sG3pKvjunOVxpegdTl8Ks3l_Mg&host=i.ytimg.com",
      uploaderName: "ARY Digital HD",
      uploaderUrl: "/channel/UC4JCksJF76g_MdzPVBJoC3Q",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/iZB5BAdhP2sVtm05oYWPokLmUJ6fiEjO6eXXWpbHjB-yeN8DrA1WfKkvUQP6Cj_EQYWEo4ot=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "2 days ago",
      shortDescription:
        "To Watch Complete episode of 𝐊𝐚𝐢𝐬𝐢 𝐓𝐞𝐫𝐢 𝐊𝐡𝐮𝐝𝐠𝐡𝐚𝐫𝐳𝐢 Download 𝐀𝐑𝐘𝐙𝐀𝐏 𝐀𝐩𝐩 \nfrom here 👉🏻 https://l.ead.me/bb9zI...",
      duration: 2792,
      views: 5653631,
      uploaded: 1671199200000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=DyEDf2f0iiQ",
      type: "stream",
      title:
        "18 Pages Theatrical Trailer | Nikhil, Anupama | Sukumar | Surya Pratap | Gopi Sundar | Bunny Vas",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/DyEDf2f0iiQ/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCCWAVZtUl2bSe2GJx8lsXBrL3qwQ&host=i.ytimg.com",
      uploaderName: "Geetha Arts ",
      uploaderUrl: "/channel/UCiJfiEg1FImWsVuEu0L8X6Q",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/En68RVYWsAMGdVeCDnNU2NGE6Oz40e-kXnSecvd0DhjyL33WPpO3itLZM7rBoZkFo2lBOLmK=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "1 day ago",
      shortDescription:
        "18 Pages Theatrical Trailer | Nikhil, Anupama | Sukumar | Surya Pratap | Gopi Sundar \n\nWorldwide Grand Release in Theaters On 𝐃𝐄𝐂𝐄𝐌𝐁𝐄𝐑 𝟐𝟑, 𝟐𝟎𝟐𝟐 🦋❤️...",
      duration: 135,
      views: 6763707,
      uploaded: 1671285600000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=JL9MAic-fZA",
      type: "stream",
      title: "ONLINE CLASSES GONE RIGHT",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/JL9MAic-fZA/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDq73H3qczAyWG_UR_XV1yz1gjrqg&host=i.ytimg.com",
      uploaderName: "Tanmay Bhat",
      uploaderUrl: "/channel/UC0rE2qq81of4fojo-KhO5rg",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/ytc/AMLnZu-2T7Bjkq2hhsjgqkleRwlQV46ApvMDdYvO0l40FA=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "1 day ago",
      shortDescription:
        "FOLLOW:\n• Nishant Tanwar - https://www.instagram.com/nishanttanwar/?hl=en\n• Rohan Joshi - https://www.instagram.com/mojorojo/\n• Aaditya Kulshreshth - https://www.instagram.com/kullubaaazi/...",
      duration: 913,
      views: 1532932,
      uploaded: 1671285600000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=huxhqphtDrM",
      type: "stream",
      title:
        "Besharam Rang Song | Pathaan | Shah Rukh Khan, Deepika Padukone | Vishal & Sheykhar | Shilpa, Kumaar",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/huxhqphtDrM/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDXPCjfz6Q4iHnypPSO0IegccKl4A&host=i.ytimg.com",
      uploaderName: "YRF",
      uploaderUrl: "/channel/UCbTLwN10NoCU4WDzLf1JMOA",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/b42QCAmVJ0kzNNi10_HmhsdfPEATQATS80hbLyHVJcVm6drn5pKtC6MY6wTluXi5iZ8_is5Q_Q=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "6 days ago",
      shortDescription:
        "Nasha chadhne wala hai with this blockbuster jodi 🔥 Watch the song Besharam Rang NOW! Celebrate Pathaan with YRF50 only at a big screen near you on 25th January, 2023. Releasing in Hindi,...",
      duration: 194,
      views: 77149107,
      uploaded: 1670853600000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=zO0fW_sHc3w",
      type: "stream",
      title: "Filmymoji || Middle Class Madhu || Gruha Pravesam || MCM",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/zO0fW_sHc3w/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDjka_X9aFGRC_Zn66IHndJb5JoCg&host=i.ytimg.com",
      uploaderName: "Filmymoji",
      uploaderUrl: "/channel/UCjNVDW-rkDYR0aOKp3E-2wg",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/ytc/AMLnZu_WiTAPtdmrf1jfaVdZ71EZb_GnZIE17FRls6O8=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "1 day ago",
      shortDescription:
        "Filmymoji Middle Class Madhu Gruha Pravesam MCM\n\nIn this new Middle Class Madhu episode, Madhu strikes up a humorous chat with the milkman and her father arrives bearing a grocery list for...",
      duration: 1111,
      views: 1192258,
      uploaded: 1671285600000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=bT-TKkkNM28",
      type: "stream",
      title: "ZOMBIE - The Living Dead | EP-02 | Official Teaser | Round2Hell",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/bT-TKkkNM28/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD15kBDzr00oH2mPYVF1PzXWvZ7Jg&host=i.ytimg.com",
      uploaderName: "Round2hell Vlog",
      uploaderUrl: "/channel/UCOjRVCxaNntzhUhwUF-xCFA",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/ytc/AMLnZu-B_GdtkCp8K8TZhedHaJ7rxws2MMdSF-xKVaqdpQ=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "3 days ago",
      shortDescription:
        "This is the final and the official teaser of zombie the living dead ep02.\nWatch and share with your friends.\n\nFOR BETTER EXPERIENCE WATCH IT IN 4K \n\nTHANKS !\n\nFor more details and updates follow...",
      duration: 66,
      views: 5210349,
      uploaded: 1671112800000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=qUPqs82xCMI",
      type: "stream",
      title:
        "Bhagya Lakshmi | Premiere Ep 431 Preview - Dec 18 2022 | Before ZEE TV | Hindi TV Serial",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/qUPqs82xCMI/hqdefault.jpg?sqp=-oaymwE1CNIBEHZIVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGGUgUyhCMA8=&rs=AOn4CLCPHBy-GUh29rrZuEgi2FUgwClH1w&host=i.ytimg.com",
      uploaderName: "ZEE5",
      uploaderUrl: "/channel/UCXOgAl4w-FQero1ERbGHpXQ",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/ytc/AMLnZu-Bv7QZns2e8kfLZUgIZveoilTbam8rShEGIIlgQQ=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "1 day ago",
      shortDescription:
        "Watch tomorrow’s Premiere Episodes of ZEE TV serials today on ZEE5. Get the best of ZEE5 Originals, popular Alt Balaji shows, 1000+ superhit movies, favourite Zindagi shows, popular kids...",
      duration: 47,
      views: 853270,
      uploaded: 1671285600000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=SqmDMMNfB2Q",
      type: "stream",
      title:
        "Jetha And Friends का हुआ 'Fast' में बुरा हाल | Taarak Mehta Ka Ooltah Chashmah | Full Episodes",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/SqmDMMNfB2Q/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBzZJCZRDxUIE8SwcW6WUk_gb_YWw&host=i.ytimg.com",
      uploaderName: "LIV Comedy",
      uploaderUrl: "/channel/UCBIT1FSJW6yTlzqK-31FDWg",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/C8dX6T92VPU3AaY3ECmlTzZ4hFbHmPEt9JlL-zZOc4QWcKVdoCVrKrI_m8obNXU2b4I0sO8n=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "2 days ago",
      shortDescription:
        "Tapu Sena is collecting funds for Ganesh Utsav and Champaklal is giving them a helping hand. The women of Gokuldham are planning to keep a fast and the men have decided to accompany them. Jetha...",
      duration: 1225,
      views: 1692911,
      uploaded: 1671199200000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=pA1f__kYptg",
      type: "stream",
      title: "Buying iPhone 14 with Coins | Apple Store पे लड़ाई हो गयी",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/pA1f__kYptg/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAvHmydayrt492pezbA2GHFT5B2xQ&host=i.ytimg.com",
      uploaderName: "Crazy XYZ",
      uploaderUrl: "/channel/UCebC4x5l2-PQxg46Ucv9CsA",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/ytc/AMLnZu8k3JcOrFDsyLKTYPMQu2sLqDI1LXzrCjs7ov6Bqg=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "1 day ago",
      shortDescription:
        "Hello guys, is video me humne iphone 14 coins se khareeda hai.\n\nOur Unboxing Channel- https://www.youtube.com/channel/UCIcKN-VXhkZNpf5DRdHp9JA\nOur Shorts Channel- https://www.youtube.com/channel/UC...",
      duration: 1015,
      views: 3125778,
      uploaded: 1671285600000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=LH6ch0RHf9o",
      type: "stream",
      title:
        "1st Test - Day 2 | Hindi | Key Moments | India Tour Of Bangladesh | 15th December 2022",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/LH6ch0RHf9o/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC4P24FemU18LOLLHIyZoGydA4Wfg&host=i.ytimg.com",
      uploaderName: "Sony LIV",
      uploaderUrl: "/channel/UCOQNJjhXwvAScuELTT_i7cQ",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/a4AOsw2qHfuXAooYs7EMkwqJMmW_Wbqebpzm8Xmf2Rj_95QMLnAAFDNRNOJG-sSoairOXvQKrS8=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "3 days ago",
      shortDescription:
        "Click here to subscribe to Sony LIV Channel: https://www.youtube.com/user/sonyliv\n \nClick here to watch all Key Moments: https://bit.ly/3V8TM1y\n\nClick here to watch more: https://www.sonyliv.com/sp...",
      duration: 931,
      views: 7583071,
      uploaded: 1671112800000,
      uploaderVerified: false,
      isShort: false,
    },
    {
      url: "/watch?v=fZUDN0diKL4",
      type: "stream",
      title: "ഒരു സീരിയൽ ROAST !! - Part 2",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/fZUDN0diKL4/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAhVpPX2giw0VioOj0lFhf7nevVTA&host=i.ytimg.com",
      uploaderName: "Arjyou",
      uploaderUrl: "/channel/UC9I8DWhqm5q7U_4fhfDwZIw",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/ytc/AMLnZu8VSmKyjQa_VtK0TSo5aRgKXtAxmYzMb79-RZpRdQ=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "1 day ago",
      shortDescription:
        "https://l.apna.co/arjyou - No degree, no English, no problem. Just use my link and get direct job 100% free and genuine. Rs.20,000 - Rs.40,000 part time and full time job for all pan India,...",
      duration: 786,
      views: 514293,
      uploaded: 1671285600000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=shz8Uxo4gJw",
      type: "stream",
      title: "Meet Avadh Ojha Sir | Episode 70",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/shz8Uxo4gJw/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAvTpr1W7lBzNZKuGvagKtQQy6QWw&host=i.ytimg.com",
      uploaderName: "Sandeep Maheshwari",
      uploaderUrl: "/channel/UCBqFKDipsnzvJdt6UT0lMIg",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/W-LbQKXkf3HJsvau1PC8jnOoryI_7AjdGGORmmpWUO4Bdb3Alem-X4fasmV43aRXRydCy3gyAig=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "3 days ago",
      shortDescription:
        "YouTube Channel: https://www.youtube.com/@RAYAvadhOjha\n\nSandeep Maheshwari is a name among millions who struggled, failed and surged ahead in search of success, happiness and contentment. Just...",
      duration: 1539,
      views: 4394835,
      uploaded: 1671112800000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=cQhJ9eK5Y3k",
      type: "stream",
      title:
        "तेल | #Khesari Lal Yadav New Song | #Neha Raj | #Yamini Singh | Tel | Teaser",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/cQhJ9eK5Y3k/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAss8IJ5FESQG75HcvWTfH8NZrLOQ&host=i.ytimg.com",
      uploaderName: "Saregama Hum Bhojpuri",
      uploaderUrl: "/channel/UC0J8BQahplvTY6LjlnLf_NQ",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/eJ5wCnSSZ_PR-NvAHK-abJb9_NoZQRmLZTWCzZejysS6pDQifkQDFwY6L1k4hzdU2Nji7jg63w=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "1 day ago",
      shortDescription:
        "अब मनोरंजन से होगा असली मेल, क्योंकि #Trending Star #Khesari Lal & #Neha Raj लेकर आ रहे हैं अपना नया...",
      duration: 36,
      views: 1103524,
      uploaded: 1671285600000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=KCHid48VOo4",
      type: "stream",
      title:
        "अजितदादा बोलत होते, तेव्हा स्टेजवर सुषमा अंधारे काय करत होत्या? | Ajit Pawar | Sushma Andhare",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/KCHid48VOo4/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA2R0cRirJQ3vykRhdf4meyga1f-A&host=i.ytimg.com",
      uploaderName: "LOKMAT",
      uploaderUrl: "/channel/UC5MHSwQ2menwYF2DqKoJsZg",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/3C01jr0nYTDTlmAVtShPWT6PksvaDtAtAOyiopbU6JuCbU_ldd395mjyMp42sUvd3wshxVq7xA=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "1 day ago",
      shortDescription:
        "अजितदादा बोलत होते, तेव्हा स्टेजवर सुषमा अंधारे काय करत होत्या? | Ajit Pawar | Sushma...",
      duration: 185,
      views: 482278,
      uploaded: 1671285600000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=QGvsMphlfvY",
      type: "stream",
      title:
        "Dhamaka Telugu Movie Trailer | Ravi Teja | Sreeleela | Thrinadha Rao Nakkina | Bheems Ceciroleo",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/QGvsMphlfvY/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBxTD4VY6c8FGa9I7j3NdNQ1tqZFQ&host=i.ytimg.com",
      uploaderName: "People Media Factory",
      uploaderUrl: "/channel/UCrzx3ZPXEZpzEGLF1gIuORQ",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/ytc/AMLnZu_TghCbtN4P9iUpvZpu_GGT1ojg3W6Aut38b2asUw=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "3 days ago",
      shortDescription:
        "Dhamaka Telugu Movie Trailer on People Media Factory. Dhamaka Latest 2022 Telugu Movie starring Ravi Teja and Sreeleela in lead roles. Directed by Trinadha Rao Nakkina. Produced by TG Vishwa...",
      duration: 127,
      views: 9620453,
      uploaded: 1671112800000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=UAgoh0HwAH8",
      type: "stream",
      title:
        "Amma Anand Avakai || Episode - 2 || Soniya Singh || Pavan Sidhu || Infinitum Media",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/UAgoh0HwAH8/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB7Y3GOiTxxPYs2E8rAY8a6UFsFBQ&host=i.ytimg.com",
      uploaderName: "Vayyari Bhama",
      uploaderUrl: "/channel/UCruMs8kL2fHjxNIymX53VSw",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/3CGv2mJtl57tcNW3ADuIXGe6MsLnKPU6mUoxVzy_dcRMUw-D1bqIst3P_yx-_48jqA3CMT3BvA=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "1 day ago",
      shortDescription:
        "A Proven path to Get a Software Job of ₹4.5 to 9 LPA\n🔥 BOOK a FREE DEMO here 🔥:- https://bit.ly/CCBP_FREE_DEMO_SOFTWARE-JOBS_VBDV1\n\n👉 CCBP 4.0 Intensive program is for final years...",
      duration: 1318,
      views: 208423,
      uploaded: 1671285600000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=Nyz7suxlrI4",
      type: "stream",
      title:
        "Mission Majnu | Sidharth Malhotra, Rashmika Mandanna | Official Teaser | Netflix India",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/Nyz7suxlrI4/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDPw8YwaCY-IgF7bWw-kK_lQ4wtNw&host=i.ytimg.com",
      uploaderName: "Netflix India",
      uploaderUrl: "/channel/UCZSNzBgFub_WWil6TOTYwAg",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/zgMN9BuSQByG1SrpmLwcNB3MQhjDhS_pl9H1h7TaRievMfS4UpU7Z36j77z5_hnIW4N8uFX3NA=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "2 days ago",
      shortDescription:
        "Ek ansuni kahaani.\nEk anjaana jaanbaaz agent.\nEk maqsad – Bharat ki suraksha 🇮🇳\nJaaniye India ke iss Majnu ki kahaani, MISSION MAJNU mein.\nStarring Sidharth Malhotra, Rashmika Mandanna,...",
      duration: 80,
      views: 4171350,
      uploaded: 1671199200000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=7F6t-687s04",
      type: "stream",
      title:
        "Biggest Magic Tap In The World | ലോകത്തിലെ ഏറ്റവും വലിയ മാന്ത്രിക ടാപ്പ് കണ്ടിട്ടുണ്ടോ 😱 | M4 Tech |",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/7F6t-687s04/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCCg7RYy9xzO_dfRh-7E6CZ4Jcx2w&host=i.ytimg.com",
      uploaderName: "M4 Tech",
      uploaderUrl: "/channel/UClfll_TO6FpOPLUg4Aawhlw",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/Ybu5mW939QWZsOAxzsf1sOqHIFKf8QwY00Rt50hBLxJBjP5INAeD2zSnUMHn1uE6vf_rGwf2Wg=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "3 days ago",
      shortDescription: "Making Biggest Magic Tap",
      duration: 1024,
      views: 1853208,
      uploaded: 1671112800000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=eprOl2NVHYM",
      type: "stream",
      title: "||Celebrity Life & Normal Life||Comedy Video||",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/eprOl2NVHYM/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLASiD_641nb4wR89EDUqyIkXCv2Fg&host=i.ytimg.com",
      uploaderName: "Sanju and Lakshmy",
      uploaderUrl: "/channel/UC1hWVEOkra5LkP37qI6PVVg",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/ytc/AMLnZu-M6NBoM-qWImJRfUCAOXPSCSmSUfeUFOLPc6WF=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "2 days ago",
      shortDescription:
        "ഒരു സെലിബ്രിറ്റിയുടെ ജീവിതവും സാധാരണക്കാരന്റെ ജീവിതവും നമുക്ക് നേരിട്...",
      duration: 1008,
      views: 638994,
      uploaded: 1671199200000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=rXnoeasWHac",
      type: "stream",
      title:
        "NASI LEMAK | Malaysian Street Food | Bamboo And Coconut Milk Sticky Rice  Recipe | Village Food",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/rXnoeasWHac/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDCuQGlT1_w9zkrD1Qdg0-4rASBhg&host=i.ytimg.com",
      uploaderName: "Village Food Channel",
      uploaderUrl: "/channel/UCuSD-BXA1p8S3HfE8LsEkHA",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/ytc/AMLnZu-09N-rsBSeaN1rYIpEdkzYAKvwuTR3MN_CoSCwOQ=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "2 days ago",
      shortDescription:
        "Street Food In Malaysia - Ultimate Malaysin Food In Kuala Lumpur",
      duration: 915,
      views: 704974,
      uploaded: 1671199200000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=nEQLP5xy7sg",
      type: "stream",
      title:
        "Episode 225 | Part 2 | দেখুন অনুরাগেরছোঁয়া | সোম - শুক্র 9:30 PM",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/nEQLP5xy7sg/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAvSONA5218u3MQKRQ30t6oo-tvAg&host=i.ytimg.com",
      uploaderName: "Star Jalsha",
      uploaderUrl: "/channel/UCvMd32ON30vh2bd-_A5KA1A",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/8Ex39hGjdgzPY05MsPLajf7y312w5RtJA0ZwryXWg4u_ZSfT59rRc902bcbsO5Eh6O2JS_mUvQ=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "1 day ago",
      shortDescription:
        "দেখুন #অনুরাগেরছোঁয়া । সোম - শুক্র 9:30 PM\n#AnuragerChhowa #StarJalsha #স্টারজলসা",
      duration: 741,
      views: 1185126,
      uploaded: 1671285600000,
      uploaderVerified: false,
      isShort: false,
    },
    {
      url: "/watch?v=uz2jUmU1b7c",
      type: "stream",
      title:
        "A date with Boss || Part - 1 || Ravi Siva Teja || Viraajitha || Infinitum Media",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/uz2jUmU1b7c/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA_OZeoQBWQ2YrTdv2-3M_nipXnrg&host=i.ytimg.com",
      uploaderName: "Infinitum Theatre",
      uploaderUrl: "/channel/UCaooZvg_gT3gagtkbqJCxMw",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/SKmSwdZYrIx-2TdxawIpuFXtJGansrRwZqSk9s97lR95tmtIOIv0ncP5Jryq8pSIHuNXrZH2ZA=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "1 day ago",
      shortDescription:
        "Hello  Guys ,  Get a special welcome bonus of 26000INR  on your FIRST deposit! \n\nUse my PROMO code Team100x while making registration with 1xbet. \n\nTo make registration click on the link or...",
      duration: 889,
      views: 129563,
      uploaded: 1671285600000,
      uploaderVerified: false,
      isShort: false,
    },
    {
      url: "/watch?v=6Vyj-9dnl20",
      type: "stream",
      title: "Yes I Have a Girlfriend | The Bong Guy | @triggeredinsaan",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/6Vyj-9dnl20/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDNq9RGaihqK_7idiiWB0qFyMrR7A&host=i.ytimg.com",
      uploaderName: "The Bong Guy",
      uploaderUrl: "/channel/UCh5bICCatQ70Fx4-jwAmWKQ",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/ytc/AMLnZu9_TrGpUfu8Zcxra7qW4yJhw9dXYvPqq11uBcSKcA=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "2 days ago",
      shortDescription:
        "Hey guys, as shown in my video, I've been using an amazing perfume by the brand Phy. It's the Phy Social perfume which is my favourite. It smells amazing, long-lasting and absolute value for...",
      duration: 944,
      views: 820881,
      uploaded: 1671199200000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=CEbZhhZvC_s",
      type: "stream",
      title: "Avatar : The Way of Water | My Opinion | Malayalam",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/CEbZhhZvC_s/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAefuYFyX3XNnanhuEm9grSYAdd-w&host=i.ytimg.com",
      uploaderName: "LifeofShazzam",
      uploaderUrl: "/channel/UCNhaliLwhGH9wX3pe9bFTbA",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/qpFlgBO8EGpnnos6oXKTBLdenIhn3enCfJEagi8AjovUYLt9bauTY95BZas_oqJA7mDUfqmqxac=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "2 days ago",
      shortDescription: null,
      duration: 377,
      views: 483539,
      uploaded: 1671199200000,
      uploaderVerified: false,
      isShort: false,
    },
    {
      url: "/watch?v=wTkKofKau6s",
      type: "stream",
      title: "Kunali Ne Cup Tod Diya 😢",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/wTkKofKau6s/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDElurSaMua22sQpKPsf1Olvdm_ew&host=i.ytimg.com",
      uploaderName: "Sourav Joshi Vlogs",
      uploaderUrl: "/channel/UCjvgGbPPn-FgYeguc5nxG4A",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/f6BWKFJa-1DcnqCIqiGCqNl2daN4rSo21UogJbKcmPC6h_VkvlF3TQ1rF-I6hN66hZ6Dfjb-bA=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "12 hours ago",
      shortDescription:
        "For Donations- \n\nQR Code- https://drive.google.com/file/d/1X9lh6IPqJLSZAG-KTFAj4wllMtrKbH3j/view?usp=drivesdk\n\n\nFor Domestic transfer\nA/c name :Himalayan water service Tatha Avm Paryatan Sss...",
      duration: 488,
      views: 3332144,
      uploaded: 1671331811434,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=EbyAoYaUcVo",
      type: "stream",
      title:
        "WOH (Official Video) - Ikka x Dino James x Badshah | Def Jam India",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/EbyAoYaUcVo/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCNnPcmKwBVwAzS2-BcFWJV32bThg&host=i.ytimg.com",
      uploaderName: "Dino James",
      uploaderUrl: "/channel/UCtpDorOuxwQ1URGQ0WLIXmQ",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/ytc/AMLnZu-HIJ6Vm_i9QLz15XcBHaaKVzW187ilq8LP8J_oYGM=s88-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "3 days ago",
      shortDescription:
        "India’s Hip-Hop superstars Ikka, Dino James & Badshah come together to channel their inner hopeless romanticism on ‘Woh.’ The track captures the immense hurt, emotions and male vulnerability...",
      duration: 330,
      views: 4303498,
      uploaded: 1671112800000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=Q8_xaJWI4q0",
      type: "stream",
      title:
        "Backbenchers - College Life Trailer || Dorasai Teja || Varsha Dsouza || Tej India || Infinitum Media",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/Q8_xaJWI4q0/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCit6AyJAV6MB-6HZk51bC9yz1yyw&host=i.ytimg.com",
      uploaderName: "Tej India",
      uploaderUrl: "/channel/UCLcEgVo16evDiKEzl7zcQ_g",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/Oazw11tnwSahAg-Cvyttvs-Uee--0zrvCtKNWlmFAbPonkANkagjU7BlV9fA_mnlJvjLcD6cKw=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "3 days ago",
      shortDescription:
        'Backbenchers are back! But this time they\'re in the Intermediate with a bigger bang!!\n\n"Backbenchers - College Life" is a Sequel to backbenchers - School Life Featuring Dorasai Teja & @varshadsouza...',
      duration: 178,
      views: 808596,
      uploaded: 1671112800000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=7rqyCre3Htg",
      type: "stream",
      title:
        "Extra Jabardasth | 16th December 2022 |Full Episode| Rashmi,Kushboo,Krishna Bhagavaan,Auto Ramprasad",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/7rqyCre3Htg/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAcbmcm4OZxaYRzHDyDAZgTIqkRoQ&host=i.ytimg.com",
      uploaderName: "ETV Jabardasth",
      uploaderUrl: "/channel/UCnoqvTW4YZExfDeq7_Wmd-w",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/ytc/AMLnZu_wufoiNX3J1e7ZnTpYMwRsmb-4JbHIB6umsIk2SQ=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "1 day ago",
      shortDescription:
        "#extrajabardasth #telugucomedyshow #etvwin #sudigalisudheer #rashmi #immanuel #hyperaadi #anasuya #telugushow #jabardasth #autoramprasad #indraja #bulletbhasker #getupsrinu #mano #krishnabhagavan...",
      duration: 2388,
      views: 1329131,
      uploaded: 1671285600000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=qwg3zG_i0sY",
      type: "stream",
      title: "SO I LOST 1,700,000,000 in HYPIXEL, I AM SAD NOW 😭 | MINECRAFT",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/qwg3zG_i0sY/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBuVwMwPCojLpxtW5qLcaVvrPkhiQ&host=i.ytimg.com",
      uploaderName: "Chapati Hindustani Gamer",
      uploaderUrl: "/channel/UC3MTnx9PIs8_9w24mKADZiQ",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/ytc/AMLnZu_zHkl285e7fzQcNInBvlgfwlOwEdt70PnDi47-bQ=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "1 day ago",
      shortDescription:
        "SO I LOST 1,700,000,000 in HYPIXEL, I AM SAD NOW 😭 | MINECRAFT. Toh bhai logo please mujhe subscribe karna maat bhuliye ga.\n\nFollow Me:\n• Instagram - https://instagram.com/chapati_gamer...",
      duration: 899,
      views: 400757,
      uploaded: 1671285600000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=RPpCDNu-1ls",
      type: "stream",
      title:
        "Veera Simha Reddy - Suguna Sundari Lyrical Video | Nandamuri Balakrishna | Shruti Haasan | Thaman S",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/RPpCDNu-1ls/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC3f3izwooZaIiFOSRURrKjRKW4Zw&host=i.ytimg.com",
      uploaderName: "Sony Music South",
      uploaderUrl: "/channel/UCn4rEMqKtwBQ6-oEwbd4PcA",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/ytc/AMLnZu9XGUotiX-6NfTEUKwRbgMdi-9nSwgogsReo8FR0g=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "3 days ago",
      shortDescription:
        "Suguna Sundari\nSinger - Ram Miriyala & Snigdha Sharma \nLyrics - Ramjogayya sastry \nProgrammed And Arranged By Thaman S\nMusical Bands - Band Thamania & Gongura Band \nLive Percussions - Anandan...",
      duration: 250,
      views: 9093648,
      uploaded: 1671112800000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=ZyHm55m7t-4",
      type: "stream",
      title: "Dude Perfect's $100 Million Theme Park",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/ZyHm55m7t-4/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDrbni2OeoVdcSXZXZSqbO7VPCKCg&host=i.ytimg.com",
      uploaderName: "Dude Perfect",
      uploaderUrl: "/channel/UCRijo3ddMTht_IHyNSNXpNQ",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/ytc/AMLnZu90IH7DzDRUzWcW434S2eA__PfKGH3RQwf2--Dvsg=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "23 hours ago",
      shortDescription:
        "Our next HQ... is for YOU! We are PSYCHED to announce Dude Perfect World! Special thanks to PGA Tour 2K23 for sponsoring Get Crafty! \nClick HERE to get the game!  ► https://pgatour.2k.com/2k23/bu...",
      duration: 1395,
      views: 3715084,
      uploaded: 1671292211434,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=9CPp_f9EcyE",
      type: "stream",
      title:
        "Udhaya திரும்பவாடா.. ஏன் நான் பூவும், பொட்டும் வைக்கக்கூடாது..?  @UdhayaSumathiOfficial Emotional 😨",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/9CPp_f9EcyE/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBn0iJsWOgzQrMtfTV1MlaiPVgt-Q&host=i.ytimg.com",
      uploaderName: "Galatta Tamil | கலாட்டா தமிழ்",
      uploaderUrl: "/channel/UCSbUX_gKMur5FPcTbH2L5mA",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/ytc/AMLnZu-wHecPTQKNIIbonkTT5VFQCU8or7kSc5Mbu5MvJbc=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "2 days ago",
      shortDescription:
        "#udhayasumathi #sumathiudhaya #emotional #galattadigitalstar #digitalstaraward #awards #youtuber #galattatamil #sumathisecondmarriage \n\nUdhaya திரும்பவாடா.. ஏன்...",
      duration: 509,
      views: 514396,
      uploaded: 1671199200000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=hR0PZFfhgh0",
      type: "stream",
      title:
        "పనిమనిషి లేకుండా ఒక రోజు  || DIML || A Day in My life Without Maid || Mahishivan || Tamada Media",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/hR0PZFfhgh0/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCsRd8fIRrSjI51z89h7E6NwEdmVg&host=i.ytimg.com",
      uploaderName: "Mahishivan",
      uploaderUrl: "/channel/UCxuRUI3Z0f70BcYyyFg9mbw",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/t2HmJsC03Z3CjmyeFF_w_Ka4bMn7_ibg7Nag9WITQ3WXfpcP6YnVeLnRZRht36eQliEpzqdqfg=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "1 day ago",
      shortDescription:
        "Hello Everyone, This is Mahishivan a Telugu serial actress and i acted in Vadinamma, Sasirekha Parinayam, Ishmart Jodi Season 2 now am coming with my own YouTube channel to entertain you guys...",
      duration: 991,
      views: 195578,
      uploaded: 1671285600000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=9kH0dt4Bsu8",
      type: "stream",
      title:
        "I Got Married *PRANK* On My MOM | * Bhag Ke Shaadi Kar Li* 😭 | SAMREEN ALI",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/9kH0dt4Bsu8/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBepGBKmWOnoT1rXvAZgkmWeyKjhQ&host=i.ytimg.com",
      uploaderName: "Samreen Ali",
      uploaderUrl: "/channel/UC0cHVZAeY_qxI7Z-7nJFXkg",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/ytc/AMLnZu9p4AulbpRLxbEQo8jjgN0KsC703OgXa4H0zh9ipw=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "1 day ago",
      shortDescription:
        "I Got Married *PRANK* On My MOM | * Bhag Ke Shaadi Kar Li* 😭 | SAMREEN ALI \nSubscribe To My Vlog Channel: https://bit.ly/samreenalivlogs\nInstagram - https://www.instagram.com/samreenali142/...",
      duration: 750,
      views: 356056,
      uploaded: 1671285600000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=VzzJpIUpHe4",
      type: "stream",
      title:
        "மார்கழி மாதம் உங்கள் இல்லத்தில் ஒலிக்க வேண்டிய பாடல் ஆண்டாள் திருப்பாவை பாடல் வரிகளுடன் | Apoorva",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/VzzJpIUpHe4/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAWQ_txS60Fuo8-jluA79SJGl_mtQ&host=i.ytimg.com",
      uploaderName: "Apoorva Videos",
      uploaderUrl: "/channel/UCIXUddWWVlp7evIeFCMsBZQ",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/5Q1SXNM5wQX6ajX0Ce11XZ52e3RhjGEGStH3XqXFR4VXW5rf4YjJsVxM0nd7NuKa-oywJXALNPw=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "2 days ago",
      shortDescription:
        "அபூர்வா வீடியோ  பக்தியுடன் வழங்கும் மயிலை சகோதரிகள் பாடிய ஆண்டாள் திருப...",
      duration: 2031,
      views: 325440,
      uploaded: 1671199200000,
      uploaderVerified: false,
      isShort: false,
    },
    {
      url: "/watch?v=ZiHJC4CHLjk",
      type: "stream",
      title: "എനിക്കും കുറച്ച് പറയാനുണ്ട്. Vlog/#759",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/ZiHJC4CHLjk/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA9Q9AHMLs4KozwUI00WR7I-8kWmg&host=i.ytimg.com",
      uploaderName: "Mallu Family",
      uploaderUrl: "/channel/UCfbcbEIGrV8jWr4u9ejmKmg",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/ytc/AMLnZu8rYs58uC9SxFaKQ_GrwsHiKjHybwY_tn56ecKTyg=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "3 days ago",
      shortDescription:
        "2nd : Sujin Vlogs\n\nLink 👉https://youtube.com/c/SujinVlogsMallu\n\n3nd : Mallufamily Shorts\n\nLink 👉 https://youtube.com/channel/UCli_I8Ad5Yjos4BC21kfDmA\n\nFB   : Mallufamily \n\nLink 👉https://ww...",
      duration: 633,
      views: 392203,
      uploaded: 1671112800000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=qhn2utkimB4",
      type: "stream",
      title:
        "పెంటయ్య పేగులు కాలినయ్ || Bithiri sathi || Yerrolla Pentaiah || village story @comedy",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/qhn2utkimB4/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBtauoMCS-qSXVf-pVbIVjuFwt8jQ&host=i.ytimg.com",
      uploaderName: "Bithiri Sathi - Ravi Kumar",
      uploaderUrl: "/channel/UCIEMs8cqTR8UZqP9Egs6dAQ",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/ytc/AMLnZu_EpZLEiqJrqTCt-0khsVFxXdaeyqKhFrLcJh5l=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "1 day ago",
      shortDescription:
        "పెంటయ్య పేగులు కాలినయ్ || Bithiri sathi || yerrollapentaih || village story\n\nSubscribe Now : https://goo.gl/NyN3Ri\r\nFacebook :  https://www.facebook.com/Bith...",
      duration: 563,
      views: 283434,
      uploaded: 1671285600000,
      uploaderVerified: false,
      isShort: false,
    },
    {
      url: "/watch?v=WkZHyBc3Xnc",
      type: "stream",
      title: "World's Hardest Challenge!",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/WkZHyBc3Xnc/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCHrnuRC95zYSin8HEG9LsVcPQKDQ&host=i.ytimg.com",
      uploaderName: "MrBeast Gaming",
      uploaderUrl: "/channel/UCIPPMRA040LQr5QPyJEbmXA",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/ytc/AMLnZu8XR-Z3OFr_QoCNnfxNpj49gP_JVjBAWZEmeunuGQ=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "1 day ago",
      shortDescription:
        "I'm in Fortnite!! Check out how you can win $1,000,000 on Saturday here: fn.gg/mrbeast \nThanks to Epic Games for sponsoring this video!\n\nSUBSCRIBE OR YOU'LL HAVE BAD LUCK\n\nNew Merch - https://shopm...",
      duration: 870,
      views: 5326436,
      uploaded: 1671285600000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=kThpr2NUqBw",
      type: "stream",
      title:
        "Oh Meri Laila Official Trailer | Antony Varghese | Abhishek KS | Dr Paul Varghese",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/kThpr2NUqBw/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLADBxA-_7YgNqYACDf4bVOg1KIRBg&host=i.ytimg.com",
      uploaderName: "123Musix",
      uploaderUrl: "/channel/UC9AifK4X8HU47bac_Sy5JDw",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/ytc/AMLnZu82TAT8PBNGnw_s4rTvm_9eq3zNs0K3zxS6jgem=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "1 day ago",
      shortDescription:
        "Presenting The Official Trailer Of Oh Meri Laila Malayalam Movie Directed By Abhishek KS\n\nDirected By: Abhishek KS\nProduced By: Dr Paul Varghese\nWritten By : Anuraj OB\nDOP: Bablu Aju \nEditor:...",
      duration: 117,
      views: 261532,
      uploaded: 1671285600000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=KHUdQ60sQM8",
      type: "stream",
      title:
        "13th Wedding Anniversary Gift To Suhana 💝 | Basheer Bashi | Mashura",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/KHUdQ60sQM8/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDnpo55DI93ljf4LCFOO9KHPnpL3w&host=i.ytimg.com",
      uploaderName: "Basheer Bashi",
      uploaderUrl: "/channel/UCNyo-TZ7V2AHLnVYtUOXZVA",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/ytc/AMLnZu_RvFYc3puWg8dB_hLPNlMJbzzZOVrkUAVPQU_uVA=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "3 days ago",
      shortDescription:
        "ALL INDIA ROAD TRIP GIVE AWAY📱🎁 🥳👏👍💝 \n\nWorld Wide Giveaway 🎁🥳\n\n1st Prize 🎁😍\n\nBrand New Royal Enfield HUNTER 350 🏍\n\nReels - https://www.instagram.com/reel/Ci6gTIkIRN...",
      duration: 1187,
      views: 464926,
      uploaded: 1671112800000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=yiz49Iluweo",
      type: "stream",
      title: "Pei Paavangal | Parithabangal",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/yiz49Iluweo/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCtbdK8a-_FaNl-SJAJq1pa7UfQAQ&host=i.ytimg.com",
      uploaderName: "Parithabangal",
      uploaderUrl: "/channel/UCueYcgdqos0_PzNOq81zAFg",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/Z72n1HBCgory8N9NqnAIFAkJpSQrJ0zFpwax7h2ZGf3w5_CaL5DKOBD2j8m8PltqAlRvvrjXEA=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "3 days ago",
      shortDescription:
        'CONNECT \n"The Devil doesn’t leave quietly" \n\nIn theatres December 22!\n\nBook your Tickets Now on BookMyShow\nLink : https://bit.ly/3FvqNOv\n\nPresenting the official Trailer of ‘Connect’...',
      duration: 866,
      views: 1853093,
      uploaded: 1671112800000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=5OCl4nBWAI4",
      type: "stream",
      title: "AVATAR 2 The way of Water MOVIE REVIEW | Yogi Bolta Hai",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/5OCl4nBWAI4/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBrhA_rMgTDfXt2A6VMpx384CGgDQ&host=i.ytimg.com",
      uploaderName: "YOGI BOLTA HAI",
      uploaderUrl: "/channel/UCIihexFQucy1Sm7V7yvL_mA",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/swDfw3L0GFxS9umbLBPQs5p3pY8RUD8vLcB3dD3JAI2hh9BgBLgkx7J7oDMbGfjqevXJ4v-s=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "2 days ago",
      shortDescription:
        "Muuchstac SL Combo (SLO+SLFF):\nFlipkart : https://bit.ly/W12227fksloslff\n\nAmazon : https://bit.ly/W12227azsloslff\n\nMeesho : https://bit.ly/W12227mssloslff\n\nMuuchstac Herbal skin lightening...",
      duration: 266,
      views: 801249,
      uploaded: 1671199200000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=xGALfyFeo0w",
      type: "stream",
      title: "An Angry Reply To James Cameron | Avatar 2 Movie REVIEW |",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/xGALfyFeo0w/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCYhJjyY06YNv4Fe7MAav9Nwx0iSQ&host=i.ytimg.com",
      uploaderName: "Suraj Kumar",
      uploaderUrl: "/channel/UCd5Os4gT74gxngzUYqGUzzg",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/5CpKA4y-S934I4SQ98YVJab7yU_I1Ly-dY-eXunIVybs0VjqFpUPoBpbZHQzlDrBoAUHyhMRs2E=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "2 days ago",
      shortDescription:
        "Hello Everyone Welcome To The New Review On Avatar: The Way Of Water  Movie |\n Directed by James Cameron |\n \n\n\n( THIS VIDEO IS JUST FOR ENTERTAINMENT PURPOSE ONLY )\n\n\nAlso visit Our second...",
      duration: 337,
      views: 390802,
      uploaded: 1671199200000,
      uploaderVerified: true,
      isShort: false,
    },
    {
      url: "/watch?v=sqTyJpoTkoY",
      type: "stream",
      title: "Guess The Song By Emojis (Part 10)",
      thumbnail:
        "https://pipedproxy.kavin.rocks/vi/sqTyJpoTkoY/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDuOGNVBbFI8U3av9ARWZJrhZhX6Q&host=i.ytimg.com",
      uploaderName: "Live Insaan",
      uploaderUrl: "/channel/UCFwKgzKe-EdTz83r6wzhmOw",
      uploaderAvatar:
        "https://pipedproxy.kavin.rocks/ytc/AMLnZu_1GOJalXMvJr6sIGz8bqc98kNnQGRf4_CuMxbmxw=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
      uploadedDate: "3 days ago",
      shortDescription:
        "Playing Guess the Song by emojis again. Original Video by @MusicViadixit \n\nBecome a Channel Member ► https://www.youtube.com/channel/UCFwKgzKe-EdTz83r6wzhmOw/join\n\nInstagram ► https://www.insta...",
      duration: 716,
      views: 1979235,
      uploaded: 1671112800000,
      uploaderVerified: true,
      isShort: false,
    },
  ];

  useEffect(() => {
    getTrending('IN').then((data) => {
      // console.log(data);
      setTrending(data);
    }
    );
    // setTrending(data);
  }, []);
  
  return (
    <div className=" w-full  bg-transparent relative flex overflow-hidden md:flex-row flex-col-reverse justify-between">      
      <main className="max-w-full h-full flex relative overflow-y-hidden  justify-center">
        <div className="h-full max-w-[1920px]  w-full mx-2 p-2 flex flex-wrap items-start justify-center rounded-tl grid-flow-col auto-cols-max gap-3 md:gap-4 overflow-y-scroll">
            {trending.map((video) => (
              <VideoCard
                key={video.id}
                id={video.id}
                title={video.title}
                uploaderAvatar={video.uploaderAvatar}
                uploaderUrl={video.uploaderUrl}
                uploaderName={video.uploaderName}
                thumbnail={video.thumbnail}
                views={video.views}
                url={video.url}
                duration={video.duration}
                uploadedDate={video.uploadedDate}
                />
            ))}
        </div>
      </main>
    </div>
  );
};
export default Home;
