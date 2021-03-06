import React from 'react';
import ReactDOM from 'react-dom';
import scriptLoader from 'react-async-script-loader';
import PropTypes from 'prop-types';

class PaypalButton extends React.Component {
    constructor(props) {
        super(props);
        window.React = React;
        window.ReactDOM = ReactDOM;
        this.state = {
            showButton: false
        }
    }

    componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
        if (!this.state.show) {
            if (isScriptLoaded && !this.props.isScriptLoaded) {
                if (isScriptLoadSucceed) {
                    this.setState({ showButton: true });
                } else {
                    this.props.onError();
                }
            }
        }
    }

    componentDidMount() {
        const { isScriptLoaded, isScriptLoadSucceed } = this.props;
        if (isScriptLoaded && isScriptLoadSucceed) {
            this.setState({ showButton: true });
        }
    }

    render() {
        let payment = () => {
            return paypal.rest.payment.create(this.props.env, this.props.client, {
                transactions: [
                    { amount: { total: this.props.total, currency: this.props.currency } }
                ]
            }, {
                input_fields: {
                    no_shipping: 1
                }
            });
        }

        const onAuthorize = (data, actions) => {
            return actions.payment.execute().then(() => {
                const payment = Object.assign({}, this.props.payment);
                payment.paid = true;
                payment.cancelled = false;
                payment.payerID = data.payerID;
                payment.paymentID = data.paymentID;
                payment.paymentToken = data.paymentToken;
                payment.returnUrl = data.returnUrl;
                this.props.onSuccess(payment);
            })
        }

        let ppbtn = '';
        if (this.state.showButton) {
            ppbtn = <paypal.Button.react
                env={this.props.env}
                client={this.props.client}
                style={this.props.style}
                payment={payment}
                commit={true}
                onAuthorize={onAuthorize}
                onCancel={this.props.onCancel}
            />
        }
        return <div>{ppbtn}</div>;
    }
}

PaypalButton.propTypes = {
    currency: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    client: PropTypes.object.isRequired,
    style: PropTypes.object
}

PaypalButton.defaultProps = {
    env: 'sandbox',
    shipping: 1,
    onSuccess: (payment) => {
        if(confirm("Thank you for joining! We will soon be in contact!")){
        }
    },
    onCancel: (data) => {
        alert("An error occured!")
    },
    onError: (err) => {
        alert("An error occured!")
    }
};

export default scriptLoader('https://www.paypalobjects.com/api/checkout.js')(PaypalButton);
