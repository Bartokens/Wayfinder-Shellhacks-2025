import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#071127' 
  },
  back: { 
    color: '#007AFF', 
    fontSize: 18, 
    marginBottom: 10 
  },
  title: { 
    fontSize: 22, 
    fontWeight: "bold", 
    marginBottom: 20, 
    color: '#fff' 
  },
  noBadges: { 
    color: '#fff' 
  },
  badge: { 
    padding: 10, 
    marginBottom: 10, 
    backgroundColor: "#15324a", 
    borderRadius: 8 
  },
  badgeName: { 
    fontSize: 18, 
    fontWeight: "600", 
    color: '#fff' 
  },
  badgeAddress: { 
    fontSize: 14, 
    color: "#bbb" 
  },
});

export default styles;