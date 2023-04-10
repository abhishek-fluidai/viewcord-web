import React, {useEffect, useState} from 'react';
import { getLocal } from '../../components/utils/StorageUtils';
import { Post, Get } from '../../components/common/FetchFuctions';
import {SubscriptionCard} from '../../components/utils/ContentCards/ChannelCard/ChannelCard';
import Loader from '../../components/utils/Loader/Loader';
import MetaHelmet from '../../components/common/MetaHelmet';

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getSubscriptionsData = async () => {
      if (!getLocal("token")) {
        setIsLoading(false);
        return;
      }
      try {
        const res = await Get(1,"subscriptions",{});
        console.log(res);
        setSubscriptions(res.data);
      }
      catch (err) {
        console.log(err);
      }
      finally {
        setIsLoading(false);
      }
    }
    getSubscriptionsData();
  }, [])

 const handleSubscription = async (url) => {
    const channelId = url.split("/")[2];
    const res = await Post(1,"unsubscribe", {
      channelId: channelId,
    });
    if (res.status === 200) {
      alert("Unsubscribed");
    //  setSubscriptions(prev => prev.filter(channel => channel.id !== channelId));
    }
  }
  return (
    <>
    <MetaHelmet title="Subscriptions" />
    <div>
      <h1
      className="text-5xl font-bold text-gray-800 text-center md:text-left my-6 ml-4 dark:text-white/80"
      >Subscriptions</h1>
      <div className="grid lg:grid-cols-5 gap-4 m-4">
        {isLoading && <Loader />}
        {!isLoading && subscriptions?.map((channel) => (
          <SubscriptionCard key={channel.id} {...channel}
          handleSubscription={() =>  handleSubscription(channel.url)}
            isSubscriptionPage={true} />
        ))}
      </div>
    </div>
    </>
  );
}

export default Subscriptions;