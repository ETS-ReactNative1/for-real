import { StyleSheet, Text, View, TextInput, MaskedViewComponent } from 'react-native';
import { useState, useContext} from 'react';
import { sendPost , likePost} from '../../../firebase';
import { UserContext } from '../../context/userContext';



export default function Question() {

  const questionOfDay =
    ' Would you rather have $5 million or dinner with Jay Z and why?';

  const [answer, setAnswer] = useState('');
  const [user, setUser] = useContext(UserContext);

  
  const getRealTime = () =>{
      let hour = new Date().getHours().toString();
      const pm = true; 
      let ampm = 'am';

      if(hour>12){
        hour = hour - 12; 
        ampm='pm';
      }
      const time =
        hour + ':' + String(new Date().getMinutes()).padStart(2, '0') + ampm;

        return time;

  };

  const submitPostHandler = async () =>{

    likePost('2022-5-29 13:57 AustinPham', 'AustinPham');
    // const post = {
    //   question: questionOfDay,
    //   answer,
    //   time:
    //     new Date().getFullYear().toString() +
    //     '-' +
    //     (new Date().getMonth() + 1).toString() +
    //     '-' +
    //     new Date().getDate().toString() +
    //     ' ' +
    //     +new Date().getHours().toString() +
    //     ':' +
    //     String(new Date().getMinutes()).padStart(2, '0'),
    //   //MAKE ACTUAL USERNAME
    //   username: user.username.toLowerCase(),
    //   realtime: getRealTime(),
    //   date:
    //     (new Date().getMonth() + 1).toString() +
    //     '-' +
    //     new Date().getDate().toString() +
    //     ' ' +
    //     new Date().getFullYear().toString()
    // };

    // const response = await sendPost(post);
  };


  return (
    <View style={styles.container}>
      <View style={styles.questionofday}>
        <Text style={styles.question}>

        {questionOfDay}

        </Text>
      </View>
      <TextInput
        placeholder="Your thoughts here..."
        placeholderTextColor="white"
        multiline = {true}
        marginTop = '10'
        maxLength={250}
        numberOfLines={8}
        style={styles.textInput}
        value={answer}
        onChangeText={setAnswer}
      />

      <Text style={styles.characters}>{250-answer.length}/250 characters left</Text>
      <View style={styles.button}>
        <Text style={styles.buttonText} onPress={submitPostHandler}>Publish</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    width: 150,
    backgroundColor: 'black',
    borderRadius: 30,
    padding: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  textInput: {
    marginTop: 20,
    height: 250,
    width: '90%',
    backgroundColor: '#D3D3d3',
    borderRadius: 20,
    padding: 30,
    paddingTop: 25,
    fontSize: 17,
    color: 'black',
    opacity: 0.8,
    textAlignVertical: 'top',
    textAlign : 'left',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },

  question: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  questionofday: {
    backgroundColor: 'white',
    width: '90%',
    padding: 25,
    paddingHorizontal: 40,
    borderRadius: 14,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },

  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#AA83FF'
  },
  characters: {
    marginTop: 8,
    fontSize: 12
  }
});

