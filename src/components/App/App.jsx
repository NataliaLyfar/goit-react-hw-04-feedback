import css from './App.module.css'
import {UserProfile} from '../userprofile/UserProfile';
import user from 'data/user.json';
import {Statistics} from '../statistics/Statistics';
import data from 'data/data.json';
import {FriendList} from '../friendlist/FriendList';
import friends from 'data/friends.json';
import {TransactionHistory} from '../transaction/TransactionHistory';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <div className={css.appWrapper}>
  <UserProfile userData={user}/>
  <Statistics title="Upload stats" stats={data}/>
  <FriendList friends={friends}/>
  <TransactionHistory items={transactions}/>
    </div>
  );
};
