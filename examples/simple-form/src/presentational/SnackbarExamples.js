import React, { PureComponent } from 'react';
import { Button, Textfield, Snackbar } from '../../../../components/react-material-design';
// import { Button, Textfield, Snackbar } from 'react-material-design';

class SnackbarExamples extends PureComponent {
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
    handleChange(e, name) {
        this.setState({
            [name]: e.target.value,
        });
    }
    render() {
        const { message, actionText } = this.state;
        return (
            <div>
                <Textfield
                    value={message}
                    onChange={e => this.handleChange(e, 'message')}
                    label="Message to display"
                    required
                />
                <Textfield
                    value={actionText}
                    onChange={e => this.handleChange(e, 'actionText')}
                    label="Action Button Value"
                    required
                />

                <Button label="Show Snackbar" onClick={this.showSnackbar} />
                <Snackbar ref={(s) => { this.snackBar = s; }} />
            </div>
        );
    }
}
export default SnackbarExamples;
