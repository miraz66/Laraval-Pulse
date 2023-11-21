import ExtensionCard from '@/components/ExtensionCard'

// All Card Images hare
import applicationImages from '@/assets/card/cardImges/usage-8ef6ea5c.png'
import serverImages from '@/assets/card/cardImges/stats-c326efa3.png'
import QueueImages from '@/assets/card/cardImges/queues-6e358c0e.png'
import PerformanceImages from '@/assets/card/cardImges/queues-6e358c0e.png'
import TrendingImages from '@/assets/card/cardImges/exceptions-c2473600.png'
import BringImages from '@/assets/card/cardImges/byo-bdf30fc4.png'

export const Data = [
  <ExtensionCard
    key={1}
    label="Application Usage"
    cardTypes="purple-card"
    description="Uncover the users who make the most requests, engage with the slowest endpoints, and dispatch the most jobs throughout your Laravel applications."
    images={applicationImages}
  />,
  <ExtensionCard
    key={2}
    label="Server Stats"
    cardTypes="rose-card"
    description="Monitor your server's CPU, memory, and disk usage. Running multiple servers? No sweat. Pulse can monitor all your servers in the one place."
    images={serverImages}
  />,
  <ExtensionCard
    key={3}
    label="Queue Monitoring"
    cardTypes="purple-card"
    description="Take the guesswork out of optimizing your queue workers. See real-time and historical stats for how many jobs are pending, how many failed, and how many processed successfully."
    images={QueueImages}
  />,
  <ExtensionCard
    key={4}
    label="Performance"
    cardTypes="rose-card"
    description="See a high-level overview of your applications performance bottlenecks. View the slowest endpoints, queries, jobs, and outgoing requests that are impacting users."
    images={PerformanceImages}
  />,
  <ExtensionCard
    key={5}
    label="Trending Exceptions"
    cardTypes="purple-card"
    description="Get an overview of the exceptions happening in your application. Having your exceptions side-by-side with your application's complete health overview helps you find anomalies across your whole stack."
    images={TrendingImages}
  />,
  <ExtensionCard
    key={6}
    label="Bring Your Own"
    cardTypes="rose-card"
    description="Craft custom cards for yourself or create shareable cards for the Laravel community. You can even customize the layout of the Pulse dashboard."
    images={BringImages}
  />,
]
