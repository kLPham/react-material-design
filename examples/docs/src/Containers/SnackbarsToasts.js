import React, { Component } from 'react';
import { Button, Textfield, Snackbar } from '../../../../components/react-material-design';
// import { Button, Textfield, Snackbar } from 'react-material-design';

class SnackbarsToasts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
        };
    }
    showSnackbar = () => {
        const { message, actionText } = this.state;
        const payload = {
            message,
            actionText,
            actionHandler: () => console.log('Action Handler Clicked!'),
        };
        this.snackBar.showSnackbar(payload);
    };
    handleChange(e, names) {
        const { target } = e;
        const { value } = target;
        this.setState({ [names]: value });
    }
    render() {
        const { message, actionText } = this.state;
        return (
            <div>
                <h1>Snackbars</h1>
                <h3>Enter a message and action text, and then click Shot Snackbar</h3>
                <Textfield
                    value={message}
                    name="message"
                    onChange={e => this.handleChange(e, 'message')}
                    label="Message to display"
                    required
                />
                <br />
                <Textfield
                    value={actionText}
                    onChange={e => this.handleChange(e, 'actionText')}
                    label="Action Button Value"
                    required
                />
                <br />
                <Button primary raised label="Show Snackbar" onClick={this.showSnackbar} />
                <Snackbar ref={(s) => { this.snackBar = s; }} />
            </div>
        );
    }
}
export default SnackbarsToasts;