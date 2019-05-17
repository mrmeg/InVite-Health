import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Font } from 'expo';
import Text from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';
import { Container, Card, Form, ListItem, Left, Right, Radio } from 'native-base';

export default class LinksScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Free Consultation',
      headerStyle: {
        backgroundColor: '#f34d25',
      },
      headerTintColor: '#fff',
    };
  };

state = {
  contactPreference: {},
  dietRating: {},
  prescriptions: {},
  allergies: {},
  exercise: {},
  issues: {},
  fontLoaded: false,
};

componentDidUpdate() {
  // console.warn(this.state)
}

  render() {
    return (
      <Container style={{marginHorizontal: 5}}>
      <ScrollView>

          <Card>
            <Text style={{fontSize: 16}}>
              You can receive a free personal nutritional consultation from a certified nutritionist or naturopathic physician, who are always available at all retail locations. 
              {'\n'}
              {'\n'}
              Our specialists can answer all your health and nutrition questions and design a customized supplement regimen that fits your unique health needs.
              {'\n'}
              {'\n'}
              Fill out the form below to help us better understand your nutritional needs!
            </Text>
          </Card>

          <View style={styles.divider} />

          <Form>

          <Card>
            <Text type='medium' style={styles.centeredText}>
              How would you like to be contacted for your complimentary consultation?
            </Text>

            <ListItem 
              onPress={() => {this.setState({contactPreference: {phone: true}})}}>
              <Left>
                <Text>Phone</Text>
              </Left>
              <Right>
                <Radio selected={this.state.contactPreference.phone}/>
              </Right>
            </ListItem>
            <ListItem
              onPress={() => {this.setState({contactPreference: {email: true}})}}>
              <Left>
                <Text>Email</Text>
              </Left>
              <Right>
                <Radio selected={this.state.contactPreference.email}/>
              </Right>
            </ListItem>
          </Card>

          <Card>
            <Text type='medium' style={styles.centeredText}>How would you rate your diet?</Text>

            <ListItem
              onPress={() => {this.setState({
                dietRating: {poor: true}}
              )}}>
              <Left>
                <Text>Poor</Text>
              </Left>
              <Right>
                <Radio selected={this.state.dietRating.poor}/>
              </Right>
            </ListItem>
            <ListItem 
              onPress={() => {this.setState({
                dietRating: {fair: true}}
              )}}>
              <Left>
                <Text>Fair</Text>
              </Left>
              <Right>
                <Radio selected={this.state.dietRating.fair}/>
              </Right>
            </ListItem>
            <ListItem 
              onPress={() => {this.setState({
                dietRating: {good: true}}
              )}}>
              <Left>
                <Text>Good</Text>
              </Left>
              <Right>
                <Radio selected={this.state.dietRating.good}/>
              </Right>
            </ListItem>
            <ListItem 
              onPress={() => {this.setState({
                dietRating: {excellent: true}}
              )}}>
              <Left>
                <Text>Excellent</Text>
              </Left>
              <Right>
                <Radio selected={this.state.dietRating.excellent}/>
              </Right>
            </ListItem>
          </Card>

          <Card>
            <Text type='medium' style={styles.centeredText}>Do you take any prescription medicine?</Text>

            <ListItem 
              onPress={() => {this.setState({
                prescriptions: {yes: true}}
              )}}>
              <Left>
                <Text>Yes</Text>
              </Left>
              <Right>
                <Radio selected={this.state.prescriptions.yes}/>
              </Right>
            </ListItem>
            <ListItem 
              onPress={() => {this.setState({
                prescriptions: {no: true}}
              )}}>
              <Left>
                <Text>No</Text>
              </Left>
              <Right>
                <Radio selected={this.state.prescriptions.no}/>
              </Right>
            </ListItem>
          </Card>

          <Card>
            <Text type='medium' style={styles.centeredText}>Do you have any allergies?</Text>

            <ListItem 
              onPress={() => {this.setState({
                allergies: {yes: true}}
              )}}>
              <Left>
                <Text>Yes</Text>
              </Left>
              <Right>
                <Radio selected={this.state.allergies.yes}/>
              </Right>
            </ListItem>
            <ListItem 
              onPress={() => {this.setState({
                allergies: {no: true}}
              )}}>
              <Left>
                <Text>No</Text>
              </Left>
              <Right>
                <Radio selected={this.state.allergies.no}/>
              </Right>
            </ListItem>
          </Card>

          <Card>
            <Text type='medium' style={styles.centeredText}>Do you exercise?</Text>

            <ListItem 
              onPress={() => {this.setState({
                exercise: {no: true}}
              )}}>
              <Left>
                <Text>No</Text>
              </Left>
              <Right>
                <Radio selected={this.state.exercise.no}/>
              </Right>
            </ListItem>
            <ListItem 
              onPress={() => {this.setState({
                exercise: {sometimes: true}}
              )}}>
              <Left>
                <Text>Sometimes</Text>
              </Left>
              <Right>
                <Radio selected={this.state.exercise.sometimes}/>
              </Right>
            </ListItem>
            <ListItem 
              onPress={() => {this.setState({
                exercise: {regularly: true}}
              )}}>
              <Left>
                <Text>Regularly</Text>
              </Left>
              <Right>
                <Radio selected={this.state.exercise.regularly}/>
              </Right>
            </ListItem>
          </Card>

          <Card>
            <Text type='medium' style={styles.centeredText}>Are you concerned about any specific health issues?</Text>

            <ListItem 
              onPress={() => {this.setState({
                issues: {yes: true}}
              )}}>
              <Left>
                <Text>Yes</Text>
              </Left>
              <Right>
                <Radio selected={this.state.issues.yes}/>
              </Right>
            </ListItem>
            <ListItem 
              onPress={() => {this.setState({
                issues: {no: true}}
              )}}>
              <Left>
                <Text>No</Text>
              </Left>
              <Right>
                <Radio selected={this.state.issues.no}/>
              </Right>
            </ListItem>
          </Card>

          </Form>

      </ScrollView>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  centeredText: {
    textAlign: 'center',
  },
  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    marginVertical: 10
  }
});