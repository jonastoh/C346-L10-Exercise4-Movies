
import React from 'react';
import { StyleSheet, Text, View, SectionList, Image, TouchableOpacity, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

// movie data
const datasource = [
  {
    title: 'ACTION MOVIES',
    bgcolor: 'firebrick',
    icon: 'film',
    data: [
      {
        key: '1',
        name: 'John Wick',
        year: '2014',
        rating: '7.5',
        description: 'John Wick is a retired hitman who returns to the criminal world after criminals break into his home, kill his dog and steal his car. He sets out to take revenge.',
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5InpjWzWK8x3sPRE2rdZum4SkvoZignnja3h09Sxk-w&s'
      },
      {
        key: '2',
        name: 'Avengers: Endgame',
        year: '2019',
        rating: '8.4',
        description: 'After Thanos wipes out half of all life, the remaining Avengers come together for one final mission to reverse the damage and save the universe.',
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_XB-D8sL9KHIz-5gjeGPcu-Wf-ZJJR-D3xPMNUj_abz79VgWf4s9slVam&s=10'
      }
    ]
  },
  {
    title: 'HORROR MOVIES',
    bgcolor: 'rebeccapurple',
    icon: 'ghost',
    data: [
      {
        key: '3',
        name: 'The Conjuring',
        year: '2013',
        rating: '7.5',
        description: 'A family moves into a farmhouse and begins experiencing terrifying paranormal events. Paranormal investigators Ed and Lorraine Warren try to help them.',
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4apBQ7_x5yP2y7qBtHoce0DOM1SdkBIx8v0j2pIparg&s=10'
      },
      {
        key: '4',
        name: 'Backrooms',
        year: '2026',
        rating: '6.7',
        description: 'A mysterious doorway appears inside a furniture showroom and leads into an endless network of strange rooms. The people who enter must find a way to escape.',
        picture: 'https://m.media-amazon.com/images/M/MV5BZmY0MDExYTAtMGM1YS00Y2QyLWE0ZWUtODAyNTExYmViNTRmXkEyXkFqcGc@._V1_.jpg'
      }
    ]
  }
];

// clickable
const showMovieDetails = (item) => {
  Alert.alert(
    item.name + ' (' + item.year + ')',
    'IMDb Rating: ' + item.rating + '/10\n\n' +
    'Description:\n' + item.description,
    [
      {text: 'Close'}
    ]
  );
};

// to display movie
const renderItem = ({item}) => {
  return (
    <TouchableOpacity
      style={styles.movieBox}
      onPress={() => showMovieDetails(item)}
    >
      <View style={styles.movieInfo}>

        <Text style={styles.movieName}>
          {item.name}
        </Text>

        <Text style={styles.movieYear}>
          {item.year}
        </Text>

        <View style={styles.ratingRow}>
          <FontAwesome6
            name="star"
            solid
            size={18}
            color="gold"
          />

          <Text style={styles.ratingText}>
            {item.rating}/10
          </Text>
        </View>

        <Text style={styles.tapText}>
          Click to read description
        </Text>

      </View>

      <Image
        source={{uri: item.picture}}
        style={styles.movieImage}
      />
    </TouchableOpacity>
  );
};

// to display category headers
const sectionHeader = ({section: {title, bgcolor, icon}}) => {
  return (
    <View style={[styles.headerBox, {backgroundColor: bgcolor}]}>

      <FontAwesome6
        name={icon}
        size={20}
        color="white"
      />

      <Text style={styles.headerText}>
        {title}
      </Text>

    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <View style={styles.titleBox}>
        <Text style={styles.title}>
          Movie list app
        </Text>
      </View>

      <SectionList
        sections={datasource}
        renderItem={renderItem}
        renderSectionHeader={sectionHeader}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  titleBox: {
    backgroundColor: 'darkslategray',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 14,
    color: 'lightgray',
  },

  list: {
    margin: 10,
  },

  headerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    marginTop: 10,
  },

  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },

  movieBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'darkslategray',
    borderWidth: 1,
    borderColor: 'slategray',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },

  movieInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  movieName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },

  movieYear: {
    fontSize: 14,
    color: 'lightgray',
    marginTop: 8,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },

  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 6,
  },

  tapText: {
    fontSize: 12,
    color: 'lightgray',
    marginTop: 12,
    textAlign: 'center',
  },

  movieImage: {
    width: 150,
    height: 210,
    resizeMode: 'contain',
  },
});
