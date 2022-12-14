import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {IUser} from '../interface';
import {handleGetUser} from '../services';

interface PostProps {
  user_id: number;
  title: string;
  body: string;
}

const PostItem = ({user_id, title, body}: PostProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    handleGetUser(user_id)
      .then(res => {
        setUser(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, [user_id]);
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 14,
          }}>
          <Image
            style={styles.avatar}
            source={require('../images/avatar.png')}
          />
          <View style={{flexShrink: 1}}>
            <Text
              style={{
                fontSize: 15,
                color: '#1E1F20',
              }}>
              {user?.name}
            </Text>
          </View>
        </View>
      </View>
      <Text style={{fontSize: 15, color: '#1E1F20', marginBottom: 16}}>
        {title}
      </Text>

      <Text>{body}</Text>
    </>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 16,
  },
});
