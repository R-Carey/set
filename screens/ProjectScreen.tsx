import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useProjectStore } from '../state/projectState'; // Import your Zustand store

const ProjectScreen = () => {
  const navigation = useNavigation();
  const { projectData, setProjectData } = useProjectStore();

  useEffect(() => {
    const fetchProjectData = async () => {
      const data = await fetchProject();
      setProjectData(data);
    };

    fetchProjectData();
  }, []);


  // Function to render a device item in the FlatList
  const renderDeviceItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('DeviceScreen', { deviceId: item.id })}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      {/* Render the project title */}
      <Text>{projectData.title}</Text>

      {/* Render the device list */}
      <FlatList
        data={projectData.devices}
        renderItem={renderDeviceItem}
        keyExtractor={(item) => item.id}
      />

      {/* Add a button to create a new device */}
      <TouchableOpacity onPress={() => navigation.navigate('CreateDeviceScreen')}>
        <Text>Add Device</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProjectScreen;