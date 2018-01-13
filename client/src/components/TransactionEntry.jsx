import React from 'react';
import { Card, CardBody, CardSubtitle, CardTitle, CardText, Button } from 'reactstrap'
const moment = require('moment');

// const moment = x => x

// const TransactionEntry = props => (
//   <div>
//     Entry
//   </div>
// );
const capitalize = function (string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
};


class TransactionEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { transaction, user } = this.props;
    const sender = capitalize(transaction.sender_name === user.name ? 'you' : transaction.sender_name);
    const receiver = capitalize(transaction.receiver_name === user.name ? 'you' : transaction.receiver_name);

    const timestamp = transaction.resolved_timestamp;
    const text = (sender === 'you')
      ? `${sender} paid ${receiver} ${transaction.amount}`
      : `${receiver} charged ${sender} ${transaction.amount}`;

    // if (transaction.type === 'payment') {
    //   text = `${sender} paid ${receiver} ${transaction.amount}`;
    //   timestamp = transaction.resolved_timestamp;
    // } else if (transaction.type === 'request') {
    //   text = `${receiver} charged ${sender} ${transaction.amount}`;
    //   timestamp = transaction.created_timestamp;
    // }

    return (
        <div id="transactionCard">
    <Card>
      <CardBody>
        <CardTitle>Transaction:</CardTitle>
        <CardSubtitle>{moment(timestamp).format('lll')}</CardSubtitle>
        <CardText>
          {text}
        </CardText>
        <Button>View Profile</Button>
      </CardBody>
    </Card>
  </div>
    )
  }
}

export default TransactionEntry;
