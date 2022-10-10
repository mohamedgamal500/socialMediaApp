import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import PostItem from '../components/PostItem';
import {handleGetPosts} from '../services';
import {IPost} from '../interface';

const Home = () => {
  const {navigate} = useNavigation();
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    handleGetPosts()
      .then(res => {
        setPosts(res);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const onPress = (item: IPost) => {
    navigate('PostDetails', {
      item,
    });
  };
  return (
    <View style={styles.container}>
      {!isLoading ? (
        posts.length !== 0 ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: 40,
              paddingBottom: 20,
              paddingHorizontal: 24,
            }}>
            {posts.map((item,index) => (
              <TouchableOpacity
                style={styles.PostItem}
                onPress={() => {
                  onPress(item);
                }}>
                <PostItem {...item} key={item.id}/>
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 15, color: '#1E1F20'}}>No Posts Yet!</Text>
          </View>
        )
      ) : (
        <ActivityIndicator
          style={styles.indicatorUpload}
          size="large"
          color={'#78ad91'}
        />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    flex: 1,
  },
  PostItem: {
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 16,
    marginBottom: 16,
  },
  indicatorUpload: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
