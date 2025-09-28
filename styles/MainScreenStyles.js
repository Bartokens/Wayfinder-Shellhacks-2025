import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loadingContainer: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#17263c" 
  },
  bottomNav: { 
    position: "absolute", 
    bottom: 10, 
    left: 10, 
    right: 10, 
    height: 60, 
    backgroundColor: "rgba(0,0,0,0.7)", 
    borderRadius: 12, 
    flexDirection: "row", 
    justifyContent: "space-around", 
    alignItems: "center" 
  },
  navText: { 
    color: "#fff", 
    fontWeight: "bold" 
  },
  quotaBadge: { 
    position: "absolute", 
    bottom: -8, 
    left: 0, 
    right: 0, 
    alignItems: "center", 
    backgroundColor: "#007AFF", 
    borderRadius: 10, 
    paddingHorizontal: 5 
  },
  quotaText: { 
    color: "#fff", 
    fontWeight: "bold" 
  },
  modalOverlay: { 
    flex: 1, 
    backgroundColor: 'rgba(0,0,0,0.5)', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  modalContent: { 
    width: '80%', 
    backgroundColor: '#fff', 
    borderRadius: 12, 
    padding: 16, 
    alignItems: 'center' 
  },
  thumbnail: { 
    width: 200, 
    height: 150, 
    borderRadius: 8, 
    marginBottom: 12 
  },
  spotTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 8 
  },
  spotText: { 
    fontSize: 16, 
    marginBottom: 12 
  },
});

export default styles;