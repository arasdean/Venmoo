import React from 'react';
import { Collapse, Button } from 'reactstrap';
import Form from './Form.jsx';
import TransactionHistory from './TransactionHistory.jsx';
import PendingTransactions from './PendingTransactions.jsx';
import { capitalize, insertBreaks } from './../helpers.jsx';


class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.dropdown = this.dropdown.bind(this);
    this.state = {
      collapse: false,
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  dropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  render() {
    const { user, transactionHist, renderUser} = this.props;

    return (
      <div id="content">
        <div id="profile_pic" />
        <div id="head">
          <div id="name">
            <h1>{`Hello, ${capitalize(user.name)}`} </h1>
          </div>
          {insertBreaks(3)}
          <div className="balance">
            <h3>{`${user.balance}`}</h3>
          </div>
          <div>
            <div >
              <Button
                className="toggleFormButton"
                color="primary"
                onClick={this.toggle}>
                <img height="40px" width="40px" src="./moneysign.svg" />
              </Button>
            </div>
            <div>
              <Button
                className="dropdown"
                color="primary"
                onClick={this.dropdown}>
                <img height="40px" width="40px" src="https://images.vexels.com/media/users/3/136206/isolated/preview/5f90ffe408b2e0f7eaa65ad491dc7fa9-hourglass-dollar-icon-by-vexels.png" />
              </Button>
            </div>
          </div>
        </div>
        <div>
          <Collapse isOpen={this.state.dropdownOpen}>
            <div className="scrollingTransactions">
              <PendingTransactions
                transactionHist={this.props.transactionHist}
                user={this.props.user}
                updateState={this.props.updateState}
              />
            </div>
          </Collapse>
        </div>
        <div>
          <Collapse isOpen={this.state.collapse}>
            <Form
              user={user}
              renderUser={renderUser}
              updateState={this.props.updateState}
            />
          </Collapse>
        </div>
        <div className="scrollingTransactions">
          <TransactionHistory transactionHist={transactionHist} user={user} />
        </div>
      </div>
    );
  }
}

export default ProfilePage;
