import React from 'react'
import { Header, Icon, Image } from 'semantic-ui-react'

const AppHeader = () => (
  <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>Band Name Generator</Header.Content>
    </Header>
  </div>
)

export default AppHeader
