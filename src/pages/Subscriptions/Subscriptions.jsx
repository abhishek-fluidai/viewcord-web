import React, {useEffect, useState} from 'react';
import { getLocal } from '../../components/utils/StorageUtils';
import { getSubscriptions } from '../../components/common/FetchFuctions';
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
      const data = await getSubscriptions(getLocal("token"));
      // console.log(data);
      setSubscriptions(data);
      setIsLoading(false);
    }
    getSubscriptionsData();
  }, [])

  return (
    <>
    <MetaHelmet title="Subscriptions" />
    <div>
      <h1
      className="text-5xl font-bold text-gray-800 text-center md:text-left my-6 ml-4 dark:text-white/80"
      >Subscriptions</h1>
      <div className="grid">
        {isLoading && <Loader />}
        {!isLoading && subscriptions.map((channel) => (
          <SubscriptionCard key={channel.id} {...channel} isSubscriptionPage={true} />
        ))}
      </div>
    </div>
    </>
  );
}

export default Subscriptions;