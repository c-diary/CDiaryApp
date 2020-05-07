
import React from 'react';
import {
    View,
} from 'react-native';

import { DP3T, DP3TStatus } from 'c-diary-rn';

interface Props { }
interface State {
    backendAppId: string,
    publicKeyBase64: string
}

class DP3TScreen extends React.Component<Props, State>{
    constructor(props: any) {
        super(props);
        this.state = {
            backendAppId: 'org.dpppt.demo',
            publicKeyBase64:
                'LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0R' +
                'RZ0FFSndKMkErS2taR0p6QlMzM3dEOUUyaEI1K3VNYgpZcitNU2pOUGhmYzR6Q2w2amdSWkFWVHBKbE' +
                '0wSmI4RERqcDNRUDZhK2VEK1I1SFYyNzhROVN0SUhnPT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0t'
        };
    }

    render() {
        const { backendAppId, publicKeyBase64 } = this.state;
        return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <DP3T
                backendAppId={backendAppId}
                publicKeyBase64={publicKeyBase64}
            />
            <DP3TStatus />
        </View>
        );
    }
};

export default DP3TScreen;