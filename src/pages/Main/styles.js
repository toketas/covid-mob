import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#7159c1', '#9849c1'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  flex: 1,
})`
  overflow: scroll; 
`;

export const CountryPicker = styled.View``;

export const Chart = styled.View``;