import React from 'react';
import {
  ScrollView,
} from 'react-native';
import { NewDiaryEntry } from 'c-diary-rn';

interface Props { }
interface State {
}

class DiaryScreen extends React.Component<Props, State>{
  constructor(props: any) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (<ScrollView>
        <NewDiaryEntry />
    </ScrollView>
    );
  }
};

export default DiaryScreen;