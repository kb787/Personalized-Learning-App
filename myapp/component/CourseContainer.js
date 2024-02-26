import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity ,Linking } from 'react-native';
import { WebView } from 'react-native-webview';

const Coursecontainer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterLevel, setFilterLevel] = useState('All');
  const [filterCategory, setFilterCategory] = useState('All');
  const [courses, setCourses] = useState([
    {
      name: 'JAVA BASICS Beginner',
      category: 'Java',
      level: 'Beginner',
      video: 'https://www.youtube.com/embed/eIrMbAQSU34?rel=0'
    },
    {
      name: 'JAVA DSA Intermediate',
      category: 'Java',
      level: 'Intermediate',
      video: 'https://youtube.com/embed/2ZLl8GAk1X4?rel=0'
    },
    {
      name: 'JAVA FULLSTACK DEVELOPER',
      category: 'Java',
      level: 'Advanced',
      video: 'https://youtube.com/embed/qv2TPh7hbAY?rel=0'
    },
    {
      name: 'PYTHON BASICS',
      category: 'Python',
      level: 'Beginner',
      video:'https://youtube.com/embed/gfDE2a7MKjA?rel=0'
    },
    {
      name: 'PYTHON DSA',
      category: 'Python',
      level: 'Intermediate',
      video:'https://youtube.com/embed/f9Aje_cN_CY?rel=0'
    },
    {
      name: 'PYTHON FULLSTACK DEVELOPER',
      category: 'Python',
      level: 'Advanced',
      video:'https://youtube.com/embed/EPzUN97KvNU?rel=0'
    },
    {
      name: 'WEB DEVELOPMENT BASICS',
      category: 'Web Development',
      level: 'Beginner',
      video:'https://youtube.com/embed/6mbwJ2xhgzM?rel=0'
    },
    {
      name: 'WEB DEVELOPMENT INTERMEDIATE',
      category: 'Web Development',
      level: 'Intermediate',
      video:'https://youtube.com/embed/FxgM9k1rg0Q?rel-0'
    },
    {
      name: 'WEB DEVELOPMENT ADVANCED',
      category: 'Web Development',
      level: 'Advanced',
      video:'https://youtube.com/embed/ZxKM3DCV2kE?rel=0'
    },
    {
      name: 'APP DEVELOPMENT BASICS',
      category: 'App Development',
      level: 'Beginner',
      video:'https://youtube.com/embed/uEhmQd0Z1CA?rel=0'
    },
    {
      name: 'APP DEVELOPMENT INTERMEDIATE',
      category: 'App Development',
      level: 'Intermediate',
      video:'https://youtube.com/embed/mXjZQX3UzOs?rel=0'
    },
    {
      name: 'APP DEVELOPMENT ADVANCED',
      category: 'App Development',
      level: 'Advanced',
      video:'https://youtube.com/embed/u64gyCdqawU?rel=0'
    },
    {
      name: 'Data Science BASICS',
      category: 'Data Science',
      level: 'Beginner',
      video:'https://youtube.com/embed/bQZk18rke2o?rel=0'
    },
    {
      name: 'Data Science INTERMEDIATE',
      category: 'Data Science',
      level: 'Intermediate',
      video:'https://www.youtube.com/embed/xiEC5oFsq2s?rel=0'
    },
    {
      name: 'Data Science ADVANCED',
      category: 'Data Science',
      level: 'Advanced',
      video:'https://youtube.com/embed/VaSjiJMrq24?rel=0'
    },
  ]);


  const handleLevelFilterChange = (level) => {
    setFilterLevel(level);
  };

  const handleCategoryFilterChange = (category) => {
    setFilterCategory(category);
  };

  const filteredCourses = courses.filter((course) => {
    const isMatched = course.name.toLowerCase().includes(searchQuery.toLowerCase());
    const isLevelMatched = filterLevel === 'All' || course.level === filterLevel;
    const isCategoryMatched = filterCategory === 'All' || course.category === filterCategory;
    return isMatched && isLevelMatched && isCategoryMatched;
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Welcome to Courses</Text>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            clearButtonMode="always"
            autoCorrect={false}
            value={searchQuery}
            onChangeText={(query) => setSearchQuery(query)}
          />
        </View>
        <View style={styles.filterContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                style={[
                  styles.filterOption,
                  filterLevel === 'All' && styles.activeFilterOption,
                ]}
                onPress={() => handleLevelFilterChange('All')}>
                <Text style={styles.filterText}>All Levels</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.filterOption,
                  filterLevel === 'Beginner' && styles.activeFilterOption,
                ]}
                onPress={() => handleLevelFilterChange('Beginner')}>
                <Text style={styles.filterText}>Beginner</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.filterOption,
                  filterLevel === 'Intermediate' && styles.activeFilterOption,
                ]}
                onPress={() => handleLevelFilterChange('Intermediate')}>
                <Text style={styles.filterText}>Intermediate</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.filterOption,
                  filterLevel === 'Advanced' && styles.activeFilterOption,
                ]}
                onPress={() => handleLevelFilterChange('Advanced')}>
                <Text style={styles.filterText}>Advanced</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={styles.filterContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                style={[
                  styles.filterOption,
                  filterCategory === 'All' && styles.activeFilterOption,
                ]}
                onPress={() => handleCategoryFilterChange('All')}>
                <Text style={styles.filterText}>All Categories</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.filterOption,
                  filterCategory === 'Java' && styles.activeFilterOption,
                ]}
                onPress={() => handleCategoryFilterChange('Java')}>
                <Text style={styles.filterText}>Java</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.filterOption,
                  filterCategory === 'Python' && styles.activeFilterOption,
                ]}
                onPress={() => handleCategoryFilterChange('Python')}>
                <Text style={styles.filterText}>Python</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.filterOption,
                  filterCategory === 'Web Development' &&
                    styles.activeFilterOption,
                ]}
                onPress={() => handleCategoryFilterChange('Web Development')}>
                <Text style={styles.filterText}>Web Development</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.filterOption,
                  filterCategory === 'App Development' &&
                    styles.activeFilterOption,
                ]}
                onPress={() => handleCategoryFilterChange('App Development')}>
                <Text style={styles.filterText}>App Development</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.filterOption,
                  filterCategory === 'Data Science' &&
                    styles.activeFilterOption,
                ]}
                onPress={() => handleCategoryFilterChange('Data Science')}>
                <Text style={styles.filterText}>Data Science</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        <View style={styles.courseListContainer}>
          {filteredCourses.map((course, index) => (
            <View style={styles.courseCard} key={index}>
              <Text style={styles.courseName}>{course.name}</Text>
              <WebView
                style={styles.videoContainer}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{ uri: course.video }}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headingContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchContainer: {
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 20,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  filterOption: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    marginRight: 10,
  },
  filterText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  activeFilterOption: {
    backgroundColor: 'lightblue',
  },
  courseList: {
    marginTop: 10,
  },
  courseListContainer: {
    paddingHorizontal: 15,
  },
  courseCard: {
    backgroundColor:'rgb(243 243 245)',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  videoContainer: {
    height: 200,
    marginBottom: 10,
  },
  courseLinkButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  courseLinkText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Coursecontainer;