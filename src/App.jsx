import {Container} from './styleConfig/App.styled';
import {UserProfile} from './components/userprofile/UserProfile';
import {Statistics} from './components/statistics/Statistics';
import {FriendList} from './components/friendlist/FriendList';
import {TransactionHistory} from './components/transaction/TransactionHistory';


export const App = () => {
  return (
    <Container>
      <UserProfile/>
      <Statistics />
      <FriendList />
      <TransactionHistory/>
    </Container>
  );
};
