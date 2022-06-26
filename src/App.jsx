import {AppWrapper} from './components/common/App.styled';
import {UserProfile} from './components/userprofile/UserProfile';
import {Statistics} from './components/statistics/Statistics';
import {FriendList} from './components/friendlist/FriendList';
import {TransactionHistory} from './components/transaction/TransactionHistory';


export const App = () => {
  return (
    <AppWrapper>
      <UserProfile/>
      <Statistics />
      <FriendList />
      <TransactionHistory/>
    </AppWrapper>
  );
};
