
import React from 'react';
import {
    View,
} from 'react-native';

import { Wallet } from 'c-diary-rn';

interface Props { }
interface State {
}

class SettingsScreen extends React.Component<Props, State>{
    constructor(props: any) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Wallet />
        </View>
        );
    }
};

export default SettingsScreen;