import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input label="name" placeholder="Jane" />
        </CardSection>

        <CardSection>
          <Input label="Phone" placeholder="555-555-55555" />
        </CardSection>

        <CardSection />

        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    );
  }
}
export default EmployeeCreate;