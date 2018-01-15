import React from 'react';
import { Collapse, Button, Dropdown, DropdownItem, DropdownMenu, DropdownItemProps, DropdownMenuProps, DropdownToggle } from 'reactstrap';
import Form from './Form.jsx';
import TransactionHistory from './TransactionHistory.jsx';
import PendingTransactions from './PendingTransactions.jsx';


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
    return (
      <div id="content">
        <div id="profile_pic" />
        <div id="head">
          <div id="name">
            <h1>{`Hello, ${this.props.user.name}`} </h1>
          </div>
          <br />
          <br />
          <br />
          <div className="balance">
            <h3>{`${this.props.user.balance}`}</h3>
          </div>
          
        </div>
        <div>
          <Collapse isOpen={this.state.dropdownOpen}>
            <div className="scrollingTransactions">
              <PendingTransactions
                transactionHist={this.props.transactionHist}
                user={this.props.user}
              />
            </div>
          </Collapse>
        </div>
        <div>
          <Collapse isOpen={this.state.collapse}>
            <Form
              user={this.props.user}
              renderUser={this.props.renderUser}
            />
          </Collapse>
        </div>
        <div className="scrollingTransactions">
          <TransactionHistory transactionHist={this.props.transactionHist} user={this.props.user} />
        </div>
      </div>
    );
  }
}

export default ProfilePage;
