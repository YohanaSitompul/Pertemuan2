import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* FOTO PROFIL */}
    <Image
     source={require('../../assets/images/yohana.jpeg')}
     style={styles.profilePic}
    />

      {/* IDENTITAS */}
      <Text style={styles.name}>Yohana Kristin Sitompul</Text>
      <Text style={styles.nim}>NIM: 243303621205</Text>
      <Text style={styles.jurusan}>Jurusan: Sistem Informasi</Text>

      {/* QUOTE */}
      <View style={styles.bioCard}>
        <Text style={styles.bioText}>
          "Terus belajar, terus berkembang, karena masa depan dibangun dari usaha hari ini."
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  profilePic: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: '#ffff99',
    marginBottom: 15,
  },

  name: {
    fontSize: 24,
    fontWeight: '900',
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center'
  },

  nim: {
    fontSize: 14,
    color: '#ffff99',
    letterSpacing: 2,
  },

  jurusan: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 20,
  },

  bioCard: {
    backgroundColor: '#111',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#333',
    width: '100%',
  },

  bioText: {
    color: '#ccc',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});