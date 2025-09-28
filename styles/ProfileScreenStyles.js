import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#071127', 
    paddingTop: 40 
  },
  header: { 
    paddingHorizontal: 12 
  },
  center: { 
    alignItems: 'center', 
    marginTop: 8 
  },
  avatar: { 
    width: 110, 
    height: 110, 
    borderRadius: 55, 
    backgroundColor: '#15324a', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderWidth: 2, 
    borderColor: 'rgba(255,255,255,0.06)' 
  },
  name: { 
    color: '#fff', 
    fontSize: 20, 
    fontWeight: '700', 
    marginTop: 12 
  },
  sub: { 
    color: '#9bb', 
    marginTop: 6 
  },
  sectionTitle: { 
    color: '#fff', 
    marginTop: 20, 
    fontSize: 16, 
    alignSelf: 'flex-start', 
    marginLeft: 16 
  },
  badgeRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 8 
  },
});

export default styles;