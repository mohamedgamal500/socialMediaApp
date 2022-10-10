import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

interface CommentItemProps {
  body: string;
  name: string;
}

const CommentItem = ({name, body}: CommentItemProps) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <Image style={styles.avatar} source={require('../images/avatar.png')} />
        <View
          style={{
            backgroundColor: '#dfe4ed',
            padding: 15,
            borderRadius: 10,
            marginTop: 10,
            flexShrink: 1,
          }}>
          <Text
            style={{
              fontSize: 13,
              color: '#1E1F20',
            }}>
            {name}
          </Text>
          <Text
            style={{
              marginTop: 10,
            }}>
            {body}
          </Text>
        </View>
      </View>
    </>
  );
};

export default CommentItem;

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 12,
    marginRight: 5,
  },
});
