import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import PostItem from '../components/PostItem';

interface PostInferface {
  id: number;
  user_id: number;
  title: string;
  body: string;
}

const Home = () => {
  const {navigate} = useNavigation();

  const posts = [
    {
      id: 1608,
      user_id: 3401,
      title:
        'Curatio amitto censura defungo conventus audacia admiratio cura appositus degusto verus cibo vel aliqua causa.',
      body: 'Capillus appositus astrum. Hic conturbo comminor. Accedo veritas degenero. Tergiversatio vomer decor. Claustrum ad termes. Caries optio contabesco. Sunt neque supra. Spiritus triginta vox. Despirmatio cedo vilicus. Maxime tamquam et. Catena ascit aperio. Desipio solio occaecati. Acsi cupiditate aut. Temptatio tenus turbo. Stultus tempore conventus. Celer et accusator. Vero venio aut. Acies alienus talis. Admiratio coma curvus. Cariosus animus agnitio. Infit candidus tutamen.',
    },
    {
      id: 1607,
      user_id: 3398,
      title:
        'Desidero sed tepesco vesper vito alter cribro deduco cauda aestas occaecati debilito desolo deputo cohors curto denique canonicus.',
      body: 'Sed voluptas brevis. Ager maiores apto. Sustineo et annus. Ustulo ratione curia. Aiunt doloremque videlicet. Fugit decumbo repudiandae. Itaque cohors capio. Officia appello doloremque. Ut creo sum. Est tero valetudo. Triginta voluptate qui. Porro beatus censura. Excepturi vel dapifer. Victus omnis ut. Apto suscipio audacia. Molestiae sollicito auctor. Uberrime deprimo vix. Cuppedia thorax assentator. Demonstro somnus claro. Bonus crinis canto.',
    },
    {
      id: 108,
      user_id: 3401,
      title:
        'Curatio amitto censura defungo conventus audacia admiratio cura appositus degusto verus cibo vel aliqua causa.',
      body: 'Capillus appositus astrum. Hic conturbo comminor. Accedo veritas degenero. Tergiversatio vomer decor. Claustrum ad termes. Caries optio contabesco. Sunt neque supra. Spiritus triginta vox. Despirmatio cedo vilicus. Maxime tamquam et. Catena ascit aperio. Desipio solio occaecati. Acsi cupiditate aut. Temptatio tenus turbo. Stultus tempore conventus. Celer et accusator. Vero venio aut. Acies alienus talis. Admiratio coma curvus. Cariosus animus agnitio. Infit candidus tutamen.',
    },
    {
      id: 107,
      user_id: 3398,
      title:
        'Desidero sed tepesco vesper vito alter cribro deduco cauda aestas occaecati debilito desolo deputo cohors curto denique canonicus.',
      body: 'Sed voluptas brevis. Ager maiores apto. Sustineo et annus. Ustulo ratione curia. Aiunt doloremque videlicet. Fugit decumbo repudiandae. Itaque cohors capio. Officia appello doloremque. Ut creo sum. Est tero valetudo. Triginta voluptate qui. Porro beatus censura. Excepturi vel dapifer. Victus omnis ut. Apto suscipio audacia. Molestiae sollicito auctor. Uberrime deprimo vix. Cuppedia thorax assentator. Demonstro somnus claro. Bonus crinis canto.',
    },
    {
      id: 608,
      user_id: 3401,
      title:
        'Curatio amitto censura defungo conventus audacia admiratio cura appositus degusto verus cibo vel aliqua causa.',
      body: 'Capillus appositus astrum. Hic conturbo comminor. Accedo veritas degenero. Tergiversatio vomer decor. Claustrum ad termes. Caries optio contabesco. Sunt neque supra. Spiritus triginta vox. Despirmatio cedo vilicus. Maxime tamquam et. Catena ascit aperio. Desipio solio occaecati. Acsi cupiditate aut. Temptatio tenus turbo. Stultus tempore conventus. Celer et accusator. Vero venio aut. Acies alienus talis. Admiratio coma curvus. Cariosus animus agnitio. Infit candidus tutamen.',
    },
    {
      id: 607,
      user_id: 3398,
      title:
        'Desidero sed tepesco vesper vito alter cribro deduco cauda aestas occaecati debilito desolo deputo cohors curto denique canonicus.',
      body: 'Sed voluptas brevis. Ager maiores apto. Sustineo et annus. Ustulo ratione curia. Aiunt doloremque videlicet. Fugit decumbo repudiandae. Itaque cohors capio. Officia appello doloremque. Ut creo sum. Est tero valetudo. Triginta voluptate qui. Porro beatus censura. Excepturi vel dapifer. Victus omnis ut. Apto suscipio audacia. Molestiae sollicito auctor. Uberrime deprimo vix. Cuppedia thorax assentator. Demonstro somnus claro. Bonus crinis canto.',
    },
    {
      id: 16,
      user_id: 3401,
      title:
        'Curatio amitto censura defungo conventus audacia admiratio cura appositus degusto verus cibo vel aliqua causa.',
      body: 'Capillus appositus astrum. Hic conturbo comminor. Accedo veritas degenero. Tergiversatio vomer decor. Claustrum ad termes. Caries optio contabesco. Sunt neque supra. Spiritus triginta vox. Despirmatio cedo vilicus. Maxime tamquam et. Catena ascit aperio. Desipio solio occaecati. Acsi cupiditate aut. Temptatio tenus turbo. Stultus tempore conventus. Celer et accusator. Vero venio aut. Acies alienus talis. Admiratio coma curvus. Cariosus animus agnitio. Infit candidus tutamen.',
    },
    {
      id: 160,
      user_id: 3398,
      title:
        'Desidero sed tepesco vesper vito alter cribro deduco cauda aestas occaecati debilito desolo deputo cohors curto denique canonicus.',
      body: 'Sed voluptas brevis. Ager maiores apto. Sustineo et annus. Ustulo ratione curia. Aiunt doloremque videlicet. Fugit decumbo repudiandae. Itaque cohors capio. Officia appello doloremque. Ut creo sum. Est tero valetudo. Triginta voluptate qui. Porro beatus censura. Excepturi vel dapifer. Victus omnis ut. Apto suscipio audacia. Molestiae sollicito auctor. Uberrime deprimo vix. Cuppedia thorax assentator. Demonstro somnus claro. Bonus crinis canto.',
    },
    {
      id: 10,
      user_id: 3401,
      title:
        'Curatio amitto censura defungo conventus audacia admiratio cura appositus degusto verus cibo vel aliqua causa.',
      body: 'Capillus appositus astrum. Hic conturbo comminor. Accedo veritas degenero. Tergiversatio vomer decor. Claustrum ad termes. Caries optio contabesco. Sunt neque supra. Spiritus triginta vox. Despirmatio cedo vilicus. Maxime tamquam et. Catena ascit aperio. Desipio solio occaecati. Acsi cupiditate aut. Temptatio tenus turbo. Stultus tempore conventus. Celer et accusator. Vero venio aut. Acies alienus talis. Admiratio coma curvus. Cariosus animus agnitio. Infit candidus tutamen.',
    },
    {
      id: 11,
      user_id: 3398,
      title:
        'Desidero sed tepesco vesper vito alter cribro deduco cauda aestas occaecati debilito desolo deputo cohors curto denique canonicus.',
      body: 'Sed voluptas brevis. Ager maiores apto. Sustineo et annus. Ustulo ratione curia. Aiunt doloremque videlicet. Fugit decumbo repudiandae. Itaque cohors capio. Officia appello doloremque. Ut creo sum. Est tero valetudo. Triginta voluptate qui. Porro beatus censura. Excepturi vel dapifer. Victus omnis ut. Apto suscipio audacia. Molestiae sollicito auctor. Uberrime deprimo vix. Cuppedia thorax assentator. Demonstro somnus claro. Bonus crinis canto.',
    },
    {
      id: 68,
      user_id: 3401,
      title:
        'Curatio amitto censura defungo conventus audacia admiratio cura appositus degusto verus cibo vel aliqua causa.',
      body: 'Capillus appositus astrum. Hic conturbo comminor. Accedo veritas degenero. Tergiversatio vomer decor. Claustrum ad termes. Caries optio contabesco. Sunt neque supra. Spiritus triginta vox. Despirmatio cedo vilicus. Maxime tamquam et. Catena ascit aperio. Desipio solio occaecati. Acsi cupiditate aut. Temptatio tenus turbo. Stultus tempore conventus. Celer et accusator. Vero venio aut. Acies alienus talis. Admiratio coma curvus. Cariosus animus agnitio. Infit candidus tutamen.',
    },
    {
      id: 67,
      user_id: 3398,
      title:
        'Desidero sed tepesco vesper vito alter cribro deduco cauda aestas occaecati debilito desolo deputo cohors curto denique canonicus.',
      body: 'Sed voluptas brevis. Ager maiores apto. Sustineo et annus. Ustulo ratione curia. Aiunt doloremque videlicet. Fugit decumbo repudiandae. Itaque cohors capio. Officia appello doloremque. Ut creo sum. Est tero valetudo. Triginta voluptate qui. Porro beatus censura. Excepturi vel dapifer. Victus omnis ut. Apto suscipio audacia. Molestiae sollicito auctor. Uberrime deprimo vix. Cuppedia thorax assentator. Demonstro somnus claro. Bonus crinis canto.',
    },
  ];

  const onPress = (item: PostInferface) => {
    navigate('PostDetails', {
      item,
    });
  };
  return (
    <View style={styles.container}>
      {posts.length !== 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 40,
            paddingBottom: 20,
            paddingHorizontal: 24,
          }}>
          {posts.map(item => (
            <TouchableOpacity
              style={styles.PostItem}
              onPress={() => {
                onPress(item);
              }}>
              <PostItem {...item} key={item.id} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <View
          style={{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 15, color: '#1E1F20'}}>No Posts Yet!</Text>
        </View>
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
});
