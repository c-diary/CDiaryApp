
import React from 'react';
import {
    View,
    Switch
} from 'react-native';

import { Text } from 'react-native-elements';

import styles from "./styles/settings.scss";

import { Wallet, DP3TSwitch } from 'c-diary-rn';



interface Props { }
interface State {
    contactTracing: boolean
}

class SettingsScreen extends React.Component<Props, State>{
    constructor(props: any) {
        super(props);
        this.state = {
            contactTracing: false
        };
    }

    toggleContactTracing() {
        this.setState({ contactTracing: !this.state.contactTracing })
    }

    render() {
        console.log(styles);
        return (<View style={styles.View}>
            <Text h3>Settings</Text>
            <Wallet />
            <DP3TSwitch backendAppId={'org.dpppt.demo'}
                publicKeyBase64={
                    'LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0R' +
                    'RZ0FFSndKMkErS2taR0p6QlMzM3dEOUUyaEI1K3VNYgpZcitNU2pOUGhmYzR6Q2w2amdSWkFWVHBKbE' +
                    '0wSmI4RERqcDNRUDZhK2VEK1I1SFYyNzhROVN0SUhnPT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0t'
                } />
        </View>
        );
    }
};

export default SettingsScreen;