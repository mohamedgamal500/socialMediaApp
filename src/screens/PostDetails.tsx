import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import {useRoute} from '@react-navigation/native';
import PostItem from '../components/PostItem';
import CommentItem from '../components/CommentItem';

interface PostInferface {
  id: number;
  user_id: number;
  title: string;
  body: string;
}
interface routeType {
  key: string;
  name: string;
  params: {
    item: PostInferface;
  };
}
const PostDetails = () => {
  const route: routeType = useRoute();
  const {item} = route.params;

  const comments = [
    {
      id: 1596,
      post_id: 1608,
      name: 'Uttam Bandopadhyay PhD',
      email: 'bandopadhyay_uttam_phd@johnson.co',
      body: 'Consectetur id delectus. Voluptatum fugit e jfdkldfsjlkjdfslk dsf dfjkdsfklfdsljkljkfdjfdlkdslklkdlkjfdjfds sdjdsfksdfkdksfl;sdfkll;dsfkl;dflsklsdfkl;kldsft.',
    },
    {
      id: 1595,
      post_id: 1608,
      name: 'Tanushri Devar DVM',
      email: 'tanushri_dvm_devar@white-gutmann.net',
      body: 'Quod rerum et. Omnis occaecati fuga.',
    },
    {
      id: 1594,
      post_id: 1606,
      name: 'Bhargava Ahuja',
      email: 'bhargava_ahuja@oreilly-wehner.info',
      body: 'Nemo molestiae hic.',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <PostItem {...item} key={item.id} />
          <View style={{marginTop: 30}}>
            {comments.map(item => (
              <CommentItem {...item} key={item.id} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PostDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 16,
    margin: 20,
  },
});
