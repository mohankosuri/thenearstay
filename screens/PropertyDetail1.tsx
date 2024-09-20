import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const PropertyDetail1 = ({route}:any) => {
    const { property } = route.params;
    const navigation:any = useNavigation();
    
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer} key={property.id}>
        <Image
          source={{ uri: property.image }}
          style={styles.mainImage}
        />
        <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.favoriteButton}>
          <Ionicons name="heart-outline" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.thumbnails}>
          <Image source={{ uri: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-Hh5RPsKhtBPsWCFSiEKnUJ6x/user-8qgiVpCV0U0b7zDjfFInHgjl/img-Z3bfIFhANODtbGg6vJzQ0dOJ.png?st=2024-09-20T04%3A30%3A27Z&se=2024-09-20T06%3A30%3A27Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-19T23%3A19%3A47Z&ske=2024-09-20T23%3A19%3A47Z&sks=b&skv=2024-08-04&sig=jejyk7/g2656SffWh6hHzd3WlFNSQIPX5nmtZA5kQC0%3D' }} style={styles.thumbnail} />
          <Image source={{ uri: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-Hh5RPsKhtBPsWCFSiEKnUJ6x/user-8qgiVpCV0U0b7zDjfFInHgjl/img-SNib0tgkaBxIEyuCQEmDH1g0.png?st=2024-09-20T04%3A30%3A27Z&se=2024-09-20T06%3A30%3A27Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-19T23%3A22%3A21Z&ske=2024-09-20T23%3A22%3A21Z&sks=b&skv=2024-08-04&sig=TfmjIzVf19aIs9zVnA%2BcksaFQUufsUxaSPKqPgel5s8%3D' }} style={styles.thumbnail} />
          <Image source={{ uri: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-Hh5RPsKhtBPsWCFSiEKnUJ6x/user-8qgiVpCV0U0b7zDjfFInHgjl/img-TqCluEb6HtV9lDUj8EAEIEmp.png?st=2024-09-20T04%3A30%3A26Z&se=2024-09-20T06%3A30%3A26Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-19T23%3A10%3A55Z&ske=2024-09-20T23%3A10%3A55Z&sks=b&skv=2024-08-04&sig=PGABYCUgSK7ldC5u2Peeji4oKKtnZgoY/WT1xM0vdCg%3D' }} style={styles.thumbnail} />
          
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{property.title}</Text>
        <Text style={styles.price}>
          {property.price} <Text style={styles.priceInfo}>per day</Text>
        </Text>
        <View>
            <Text style={styles.detailText}>Location: {property.location}</Text>
        </View>
        <View style={styles.overview}>
          <Text style={styles.overviewTitle}>Overview</Text>
          <View style={styles.details}>
            <View style={styles.detailItem}>
              <Ionicons name="bed-outline" size={20} color="#00bfa5" />
              <Text>Beds:{property.beds}</Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="water-outline" size={20} color="#00bfa5" />
              <Text>Baths:{property.baths}</Text>
            </View>
          </View>
          <Text style={styles.description}>
            {property.description}
          </Text>
        </View>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#e0f7f9',
    alignItems: 'center',
    padding: 16,
  },
  imageContainer: {
    width: '100%',
    height: 300,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
    position: 'relative',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  mainImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  thumbnails: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    flexDirection: 'column',
    gap: 5,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 10,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  content: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2e2e2e',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00bfa5',
    marginBottom: 20,
  },
  priceInfo: {
    fontSize: 14,
    color: '#2e2e2e',
    fontWeight: 'normal',
  },
  overview: {
    marginBottom: 20,
  },
  overviewTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#2e2e2e',
  },
  details: {
    flexDirection: 'row',
    gap: 30,
    marginBottom: 10,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  description: {
    color: '#2e2e2e',
    lineHeight: 22,
  },
  bookButton: {
    backgroundColor: '#00bfa5',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  detailText: {
    fontSize: 16,
    color: '#4a5568',
    marginBottom: 8,
  },
});

export default PropertyDetail1;
