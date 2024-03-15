import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  FlatList,
  ItemSeparatorComponent,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {useState} from 'react';

import React from 'react';
const ProfileCreation = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [skillSets, setSkillSets] = useState('');
  const [skillSetsLevel, setSkillSetsLevel] = useState('');
  const [degreeName, setDegreeName] = useState('');
  const [degreeUniversity, setDegreeUniversity] = useState('');
  const [degreeSpecialization, setDegreeSpecialization] = useState('');

  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSkillSelection = skill => {
    setSelectedSkills(prevSkills =>
      prevSkills.includes(skill)
        ? prevSkills.filter(s => s !== skill)
        : [...prevSkills, skill],
    );
  };

  const skillSetsAvailable = [
    {label: 'HTML5', value: 'html5'},
    {label: 'CSS3', value: 'css3'},
    {label: 'Javascript', value: 'javascript'},
    {label: 'Bootstrap', value: 'bootstrap'},
    {label: 'Tailwind.css', value: 'tailwind.css'},
    {label: 'React.js', value: 'react.js'},
    {label: 'Node.js', value: 'node.js'},
    {label: 'Angular.js', value: 'angular.js'},
    {label: 'Vue.js', value: 'vue.js'},
    {label: 'Next.js', value: 'next.js'},
    {label: 'Mongodb', value: 'mongodb'},
    {label: 'Postgresql', value: 'postgresql'},
    {label: 'SQL', value: 'sql'},
    {label: 'Postman-API', value: 'postman-api'},
    {label: 'Java', value: 'java'},
    {label: 'Springboot', value: 'springboot'},
    {label: 'Django', value: 'django'},
    {label: 'Python', value: 'python'},
    {label: 'Flask', value: 'flask'},
    {label: 'Git', value: 'git'},
    {label: 'GitHub', value: 'github'},
    {label: 'NumPy', value: 'numpy'},
    {label: 'Pandas', value: 'pandas'},
    {label: 'React-Native', value: 'react-native'},
    {label: 'Flutter', value: 'flutter'},
    {label: 'Kotlin', value: 'kotlin'},
    {label: 'AWS', value: 'aws'},
    {label: 'GCP', value: 'google-cloud-computing'},
    {label: 'Docker', value: 'docker'},
    {label: 'Kubernetes', value: 'kubernetes'},
    {label: 'C#', value: 'c#'},
    {label: 'ASP.NET', value: 'asp.net'},
  ];
  return (
    <SafeAreaView style={styles.safeAreaViewStyling}>
      <ScrollView>
        <View style={styles.mainProfileContainer}>
          <Text style={styles.headingTextStyling}>
            Create your profile in simple steps
          </Text>
          <TextInput
            placeholder="Enter your first name"
            value={firstName}
            onChangeText={text => setFirstName(text)}
            style={styles.inputFormStyling}
          />
          <TextInput
            placeholder="Enter last name"
            value={lastName}
            onChangeText={text => setLastName(text)}
            style={styles.inputFormStyling}
          />
          <Text style={styles.formTextStyling}>Select your skills</Text>
          <View>
            <View style={styles.gridContainer}>
              {skillSetsAvailable.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleSkillSelection(item.label)}
                  style={[
                    styles.skillItem,
                    selectedSkills.includes(item.label) &&
                      styles.selectedSkillItem,
                  ]}>
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <Text style={styles.formTextStyling}>Your Selected Skills</Text>
          <View>
            {selectedSkills.map((item, index) => (
              <View key={index} style={styles.gridContainer}>
                <Text style={styles.selectedSkillsText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewStyling: {
    flex: 1,
    backgroundColor: 'rgb(203 213 225)',
  },
  mainProfileContainer: {
    padding: 20,
  },
  headingTextStyling: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputFormStyling: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: 'rgb(241 245 249)',
  },
  formTextStyling: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  skillItem: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
    width: '45%',
    alignItems: 'center',
    backgroundColor: 'rgb(241 245 249)',
  },
  selectedSkillItem: {
    backgroundColor: 'rgb(37 99 235)',
  },
  selectedSkillsText: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 6,
    padding: 8,
    marginBottom: 10,
    width: '45%',
    alignItems: 'center',
    backgroundColor: 'rgb(241 245 249)',
    textAlign: 'center',
  },
});

export default ProfileCreation;
