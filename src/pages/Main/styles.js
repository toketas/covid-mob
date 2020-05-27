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

export const Footer = styled.View`
  align-items: center;
  justify-content: center;
  background: transparent;
  height: 30px;
`;

export const FooterText = styled.Text`
  color: #fff;
`;