import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#071127', 
    paddingTop: 40 
  },
  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 12 
  },
  title: { 
    color: '#fff', 
    fontSize: 20, 
    fontWeight: '700', 
    marginLeft: 12 
  },
  section: { 
    padding: 16 
  },
  row: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingVertical: 12 
  },
  label: { 
    color: '#fff' 
  },
  dangerButton: { 
    marginTop: 30, 
    backgroundColor: '#2a2a2a', 
    padding: 12, 
    borderRadius: 8, 
    alignItems: 'center' 
  },
  dangerText: { 
    color: '#ff6b6b', 
    fontWeight: '700' 
  },
});

export default styles;