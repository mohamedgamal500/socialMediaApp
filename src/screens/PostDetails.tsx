import React, { useEffect, useState } from 'react';
import {View, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';

import {useRoute} from '@react-navigation/native';
import PostItem from '../components/PostItem';
import CommentItem from '../components/CommentItem';
import { IComment, IPost } from '../interface';
import { handleGetComments } from '../services';

interface routeType {
  key: string;
  name: string;
  params: {
    item: IPost;
  };
}
const PostDetails = () => {
  const route: routeType = useRoute();
  const {item} = route.params;
  const [comments, setComments]=useState<IComment[]>([])
  const [isLoading, setIsLoading] = useState(true);


  useEffect(()=>{
    handleGetComments(item.id)
    .then(res => {
      setComments(res);
      setIsLoading(false);
    })
    .catch(err => {
      console.log(err);
    });
  },[])

  return (
    <View style={styles.container}>
      
      {!isLoading ? (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <PostItem {...item} />
          <View style={{marginTop: 30}}>
            {comments.map(comment => (
              <CommentItem name={comment.name} body={comment.body} key={item.id} />
            ))}
          </View>
        </View>
      </ScrollView>
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
  indicatorUpload: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
